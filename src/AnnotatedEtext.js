//@flow
import React, { Component } from 'react';
import '../src/AnnotatedEtext.css'
import ReactDOM from 'react-dom';
import rangy from 'rangy';
import _ from "lodash" ;
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from "@material-ui/core/Tooltip"
import Chat from "@material-ui/icons/Chat"
import Reply from "@material-ui/icons/Reply"
import Build from "@material-ui/icons/Build"
import Announcement from "@material-ui/icons/Announcement"
import QuestionAnswer from "@material-ui/icons/QuestionAnswer"
import Search from "@material-ui/icons/Search"
import Delete from "@material-ui/icons/Delete"
import AddLocation from "@material-ui/icons/AddLocation"

const styles = theme => ({
  lightTooltip: {
    background: "rgb(250,250,250)",
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    fontSize: 14,
    padding:"0px",
    //paddingBottom:"44px",
    //minWidth:44*5+"px"
  }
})

type Props = {
   chunks:[],
   IRI:string,
   classes:{}
}

type State = {
   annotations: Array<Object>,
   chunks?:Array<Object>,
   numAnno?:number,
   annoPanel?:boolean,
   trash:[]
}

class AnnotatedEtext extends Component<Props,State> {
   //_addingAnno : boolean = false ;

   constructor(props:Props)
   {
      super(props);

      this.state = { annotations: [] }
   }
   /*
   componentWillMount()
   {
   }

   componentDidMount()
   {
   }

   componentWillUpdate(nextProps, nextState)
   {

   }

   componentDidUpdate()
   {
   }

   shouldComponentUpdate(nextProps, nextState)
   {
   }
   */
   static getDerivedStateFromProps(props:Props,state:State)
   {
      console.log("getDSfP",props,state) //JSON.stringify(state.annotations,null,3))
      let annoChunks = []
      let annoInfo = [ ...state.annotations ]
      if(props.services) for(let service of props.services)
      {
         for(let id of Object.keys(service.collectionsById))
         {
            let pages = service.collectionsById[id].pages
            if(pages) for(let p of Object.values(pages))
            {
               for(let anno of p.items)
               {
                  console.log("anno",anno)
                  if(anno.target)
                  {
                     let startChar, endChar, target
                     if(anno.target.type === "WorkLocation")
                     {
                        startChar = anno.target.workLocationChar
                        endChar = anno.target.workLocationEndChar
                     }
                     else if(anno.target.type === "Annotation")
                     {
                        target = anno.target
                        let targetId
                        // can be recursive in target eg target.target...target
                        do {
                           if(!targetId) targetId = target.id
                           target = target.target
                        }
                        while(target.type && target.type != "WorkLocation" && target.target)
                        if(target) {
                           startChar = target.workLocationChar
                           endChar = target.workLocationEndChar
                           target = targetId
                        }
                     }
                     annoInfo.push({
                        startChar,
                        endChar,
                        body:anno.body,
                        id:anno.id,
                        motivation:anno.motivation,
                        ...(target?{target:target}:{})
                     });
                  }
               }
            }
         }
      }

      annoInfo = annoInfo.filter(k => {
         //console.log("trash?",k,state.trash)
         return (!state.trash || state.trash.indexOf(k.id) === -1)
      })
      console.log("annoInfo",annoInfo) //JSON.stringify(annoInfo,null,3),state,state.trash);
      let panelAnno = annoInfo.reduce( (acc,a) => ({...acc,[a.id]:a}),{})

      //console.log("panelAnno",JSON.stringify(panelAnno,null,3));

      if(props.chunks) // && (!state.chunks || annoInfo.length !== state.numAnno
                       //      || props.chunks.length !== state.chunks.length ))
      {

         for(let elem of props.chunks)
         {
            let chunk = { ...elem }
            let annoList = []
            for(let anno of annoInfo)
            {
               if((anno.startChar >= chunk.start && anno.startChar <= chunk.end)
                  ||(anno.endChar >= chunk.start && anno.endChar <= chunk.end)
                  ||(chunk.start >= anno.startChar && chunk.end <= anno.endChar))
               {
                  annoList.push(anno)
               }
            }
            if(annoList.length > 0)
            {
               let tmp = annoList.reduce( (acc,e,i) => {
                  let a = e.startChar
                  let z = e.endChar
                  if(a < chunk.start) a = chunk.start
                  if(z > chunk.end) z = chunk.end
                  let target = e.target
                  let text = chunk.value.substring(a - chunk.start, z - chunk.start)
                  return ([ ...acc,
                           { i, char:a, start:true, id:e.id, body:e.body,motivation:e.motivation, target, text },
                           { i, char:z, start:false,id:e.id } ])
               },[])
               tmp = _.orderBy(tmp,['char'],['ASC']);
               console.log("tmp",tmp)
               chunk.pieces = []
               let nb = 0, body  // for superposition of annotations
               let idx = chunk.start // cursor into chunk
               let nxt = idx  // next start/end of annotation
               for(let a of tmp)
               {
                  let elem ;
                  nxt = a.char
                  if(nxt >= chunk.end) nxt ++ ;
                  if(idx != nxt) {
                     elem = {nb,start:idx,end:nxt}
                     if(body) {
                        elem.annotations = { ...body }
                        //elem.text = a.text //chunk.value.substring(idx - chunk.start,nxt - chunk.start  )
                     }
                     chunk.pieces.push(elem)
                  }
                  if(a.start) {
                     nb ++
                     if(a.body) {
                        if(!body) body = {}
                        body[a.id] = {
                           body:a.body,motivation:a.motivation,
                           ...(a.target?{target:a.target}:{}),
                           ...(a.text?{text:a.text}:{})
                        }

                        if(a.text) panelAnno[a.id]["text"] = a.text
                     }
                  }
                  else {
                     if(nb == 0) body = false
                     nb-- ;
                     if(a.id) delete body[a.id]
                  }
                  idx = nxt
               }
               if(nxt < chunk.end) chunk.pieces.push({nb,start:nxt,end:chunk.end+1,
                     ...(nb>0?{annotations:{...body}}:{})
                  })
               //console.log(JSON.stringify(chunk.pieces,null,4))
               annoList = _.orderBy(annoList,['char'],['ASC'])
               //console.log(chunk.annoList)

            }

            annoChunks.push(chunk)
         }
         return { ...state, chunks:annoChunks, numAnno:state.annotations.length, panelAnno }
      }
      //else return { ...state, numAnno:state.annotations.length, panelAnno  }
   }

   getSelectedNode(node:{},offset:number=0)
   {
      while(node && (!node.dataset || !node.dataset.seq))
      {
        node = node.parentNode ;
        console.log("node",node,node.dataset,!node.dataset,!node.dataset.seq)
      }

      let data ;
      if(node) data = {
         // make numbers addable
         ...Object.keys(node.dataset).reduce((acc,e) => ({...acc,[e]:Number(node.dataset[e])}), {}),
         offset
      }
      return data ;
   }

   prefLabel(body:{})
   {
      let val
      if(body["id"]) val = body["id"]
      if(body["skos:prefLabel"]) {
         if(Array.isArray(body["skos:prefLabel"])) for(let l of body["skos:prefLabel"])
         {
            // take first as a starting point (cf library/getLangLabel code)
            val = l["@value"]
            if(!val) val = l["value"]
            break ;
         }
         else {
            val = body["skos:prefLabel"]["@value"]
            if(!val) val = body["skos:prefLabel"]["value"]
         }
      }
      return val
   }

   identifying(body:{})
   {
      let val = <a href={"http://library.bdrc.io/show/"+body["id"]} target="_blank">{this.prefLabel(body)}</a>
      return val
   }

   questioning(body:{})
   {
      let val
      if(Array.isArray(body)) for(let c of body)
      {
         val = c["rdfs:comment"]["@value"]
      }
      else {
         val = body["rdfs:comment"]["@value"]
      }
      return val
   }

   replying(body:{})
   {
      return this.questioning(body);
   }

   assessing(body:{})
   {
      return this.questioning(body);
   }

   renderAnno(annotations:{},inDiv:boolean=false)
   {
      console.group("RENDER_ANNO")
      console.log("rendering",inDiv,annotations) //JSON.stringify(annotations,null,3))

      let remaining = [ ...Object.keys(annotations).map(k => ({k,motivation:annotations[k].motivation})) ]
      remaining = _.orderBy(remaining,["motivation"],['ASC']).map(e => e.k)
      let next
      let nb = remaining.length
      let renderedAnno = {}
      while(nb > 0)
      {
         next = [ ...remaining ]

         console.log("remaining",remaining,renderedAnno,annotations)

         for(let k of remaining)
         {
            let anno = annotations[k]

            console.log("anno",k,anno) //,remaining,renderedAnno)

            let newAnno = []
            if(!anno.target) newAnno.push(<h4>{anno.text}</h4>)
            newAnno.push(
               <span id="anno-tooltip-span" className={anno.motivation}>
                  { anno.motivation === "identifying" && <span><u>identifying</u>: {this.identifying(anno.body)}</span> }
                  { anno.motivation === "questioning" && <span><u>questioning</u>: {this.questioning(anno.body)}</span> }
                  { anno.motivation === "replying"    && <span><u>replying</u>:    {this.replying(anno.body)}</span> }
                  { anno.motivation === "assessing"    && <span><u>assessing</u>:    {this.assessing(anno.body)}</span> }
               </span>
            )
            renderedAnno[k] = newAnno
            if(!anno.target)
            {
               console.log("no target")
               next.splice(next.indexOf(k),1)
               nb --
            }
            else if(renderedAnno[anno.target])
            {
               console.log("target rendered",anno.target)
               renderedAnno[anno.target].push(<div className='sub-anno'>{newAnno}</div>)
               next.splice(next.indexOf(k),1)
               nb --
            }
            else
            {
               console.log("target unrendered",anno.target)
            }
         }
         remaining = [ ...next ]
      }
      //console.log("remains",remaining,renderedAnno)

      let ret = []
      let annoK = Object.keys(annotations).map( k => ({ anno:k, key:annotations[k].startChar }))
      annoK = _.orderBy(annoK,['key'],['ASC']).map( e => e.anno )
      console.log("annoK",annoK,renderedAnno)
      for(let k of annoK) {
         if(!annotations[k].target) {
            if(!inDiv) ret.push(renderedAnno[k])
            else ret.push(<div>{renderedAnno[k]}</div>)
        }
      }
      console.groupEnd()

      return ret ;
   }

   trash(e:Event,anno:{})
   {
      console.log("trash",anno)

      let trash = this.state.trash
      if(!trash) trash = []
      for(let k of Object.keys(anno)) if(trash.indexOf(k) === -1) trash.push(k)

      this.setState({...this.state,/*annoPanel:true,*/trash})
   }

   question(e:Event,a:{})
   {

      let anno = Object.keys(a.annotations).filter(k => !a.annotations[k].target)[0]
      console.log("question",a,anno)
      let id = anno.replace(/^.*?([^:/]+)$/,"$1")
      let startChar = a.start
      let endChar = a.end

      let uniq = Math.random().toString(36).substr(2, 9)

      this.setState({ ...this.state, /*annoPanel:true,*/ annotations:[...this.state.annotations,
         {
            id:"tmp:question_" + uniq,
            startChar, endChar, motivation:"questioning",
            target:anno,
            body:{
               "rdfs:comment": { "@language": "en", "@value": "about annotation #"+id }, id:"tmp:question_" + uniq
            }
         } ] })
   }

   reply(e:Event,a:{})
   {

      let anno = Object.keys(a.annotations).filter(k => a.annotations[k].motivation === "questioning")[0]
      console.log("reply",anno,a)
      let id = anno.replace(/^.*?([^:/]+)$/,"$1")
      let startChar = a.start
      let endChar = a.end

      let uniq = Math.random().toString(36).substr(2, 9)

      this.setState({ ...this.state, /*annoPanel:true,*/ annotations:[...this.state.annotations,
         {
            id:"tmp:reply_" + uniq,
            startChar, endChar, motivation:"replying",
            target:anno,
            body:{
               "rdfs:comment": { "@language": "en", "@value": "about question on annotation #"+id },
               id:"tmp:reply_" + uniq
            }
         } ] })
   }

   assert(e:Event,a:{})
   {
      console.log("assert",a)
      let startChar = a.start
      let endChar = a.end

      let uniq = Math.random().toString(36).substr(2, 9)

      this.setState({ ...this.state, /*annoPanel:true,*/ annotations:[...this.state.annotations,
         {
            id:"tmp:assert_" + uniq,
            startChar, endChar, motivation:"assessing",
            body:{
               "rdfs:comment": { "@language": "en", "@value": "assertion #"+uniq },
               id:"tmp:assert_" + uniq
            }
         } ] })
   }

   identify(e:Event,a:{})
   {

      console.log("identify",a)
      let startChar = a.start
      let endChar = a.end

      let uniq = Math.random().toString(36).substr(2, 9)

      this.setState({ ...this.state, /*annoPanel:true,*/ annotations:[...this.state.annotations,
         {
            id:"tmp:identify_" + uniq,
            startChar, endChar, motivation:"identifying",
            body:{
               "rdfs:comment": { "@language": "en", "@value": "identifying #"+uniq },
               id:"tmp:identify_" + uniq
            }
         } ] })
   }

   onAnnoClick(e) {

      this.setState({...this.state,annoPanel:true})
      //alert(a.nb+" annotation"+(a.nb > 1?"s":"")+" here")}

   }


   onMouseUp(e:{})
   {
      console.log("mUp",e,this._addingAnno)

      if(this.props.dontSelect) return


/*
      let newState = this.mayCancelAnno(e);
      if(this._addingAnno) {
         console.log("newS",newState)
         if(newState) this.setState(newState);
         return ;
      }
*/
      let newState;

      if(this.state.annotations && this.state.newAnno)
      {
         let anno = this.state.annotations.filter(a => a.id === this.state.newAnno)
         if(anno.length > 0 && !anno.motivation)
         {
            console.log("should cancel ")

            newState = { ...this.state, annotations:this.state.annotations.filter(a => a.id != this.state.newAnno) }
            delete newState["newAnno"]
            //return newState
            //this.setState(newState)
            //this.forceUpdate()
         }
         //console.log("newS",JSON.stringify(newState.annotations,null,3))
      }


      //this._addingAnno = true

      try {

         let selec = rangy.getSelection()

         console.log("selec",selec,e)

         let fromChunk = this.getSelectedNode(selec.anchorNode, selec.anchorOffset)
         let toChunk = this.getSelectedNode(selec.focusNode, selec.focusOffset)
         if(fromChunk && toChunk)
         {
            let startChar = fromChunk.offset + fromChunk.start
            let endChar = toChunk.offset + toChunk.start
            if(startChar > endChar)
            {
               let val = endChar
               endChar = startChar
               startChar = val;
            }

            if(!isNaN(startChar) && !isNaN(endChar) && startChar !== endChar)
            {
               let id = Math.random().toString(36).substr(2, 9)
               if(!newState) newState = {...this.state}
               newState = { ...newState, /*annoPanel:true,*/ newAnno: "tmp:test" + id, annotations:[...newState.annotations, {
                  startChar, endChar, //motivation:"identifying",
                  body:{ "rdfs:comment": { "@language": "en", "@value": "This is test annotation #"+id }, id:"tmp:test" + id
               }, id:"tmp:test" + id } ] }
            }
            console.log("end selec",startChar,endChar,fromChunk,toChunk,selec,e) //,JSON.stringify(newState.annotations,null,3))
         }
         else {
            console.log("no chunk selec",fromChunk,toChunk)
         }

         selec.collapseToStart()

         if(newState) this.setState(newState)

      }
      catch(e)
      {
         console.error("selec error",e)
      }
   }



   render() {

      console.log("AeT",this.props,this.state)//,JSON.stringify(this.state.annotations,null,3),JSON.stringify(this.state.panelAnno,null,3))

      //this._addingAnno = false

      let panel = []

      panel.push(<div>{this.renderAnno(this.state.panelAnno)}</div>)

      let ret =
      <div>
         <div id="annotatedEtext"  onMouseUp={ this.onMouseUp.bind(this) }>
            {this.state.chunks && this.state.chunks.map((c,i) => (
               <div key={i} >
                  <div className="text" data-seq={c.seq} data-start={c.start} data-end={c.end}>
                     {!c.pieces && c.value}
                     {c.pieces && c.pieces.map( (a,j) => {
                        let text = c.value.substring(a.start-c.start,a.end-c.start)
                        if(a.nb == 0) return (
                           <span key={j} data-seq={c.seq} data-start={a.start} data-end={a.end}>
                              {text}
                           </span>)
                        else {
                           console.log("a.anno",this.state.newAnno&&a.annotations&&a.annotations[this.state.newAnno],a.annotations,a.annotations[this.state.newAnno],this.state.newAnno)
                           return (
                           <Tooltip
                              id={"tip-"+Math.random().toString(36).substr(2, 9)}
                              {...(this.state.newAnno&&a.annotations&&a.annotations[this.state.newAnno]?{open:true}:{})}
                              title={
                                  <div id="anno-tooltip" >
                                      <div> { this.renderAnno(a.annotations) } </div>
                                      <div id="anno-tooltip-menu" onMouseUp={ e => { e.stopPropagation(); } }>

                                        <a href={"http://library.bdrc.io/search?q=\""+text+"\"&lg="+c.lang+"&t=Any"} target="_blank">
                                          <IconButton size="small" title={"Search in BDRC Public Digital Library"} /* onClick={ e => this.setState({...this.state,annoPanel:true})} */ >
                                            <Search/>
                                          </IconButton>
                                        </a>
                                       <IconButton size="small" title="Identify" onClick={ e => this.identify(e,a) }>
                                          <AddLocation/>
                                       </IconButton>
                                        <IconButton size="small" title="Assert" onClick={ e => this.assert(e,a) }>
                                           <Chat/>
                                        </IconButton>
                                        {
                                           Object.keys(a.annotations).filter(k => a.annotations[k].motivation).length >= 1 &&
                                           <IconButton size="small" title="Question" onClick={ e => this.question(e,a) }>
                                              <Announcement/>
                                           </IconButton>
                                       }
                                       {
                                          Object.keys(a.annotations).filter(k => a.annotations[k].motivation === "questioning").length === 1 &&
                                           <IconButton size="small" title="Reply" onClick={ e =>  this.reply(e,a) }>
                                             <QuestionAnswer/>
                                          </IconButton>
                                       }
                                       {
                                          Object.keys(a.annotations).filter(k => a.annotations[k].motivation).length >= 1 &&
                                           <IconButton size="small" title="Edit" onClick={ e => this.setState({...this.state,annoPanel:true})}>
                                             <Build/>
                                           </IconButton>
                                       }
                                        {
                                           Object.keys(a.annotations).length === 1 &&
                                           <IconButton size="small" title="Delete" onClick={e => this.trash(e,a.annotations) }>
                                              <Delete/>
                                           </IconButton>
                                        }
                                      </div>
                                 </div>
                              }
                              interactive classes={{ tooltip: this.props.classes.lightTooltip }} PopperProps={{style:{ opacity:1 } }}>
                              <span onClick={this.onAnnoClick.bind(this)} className={"annotated"} key={j} data-seq={c.seq} data-start={a.start} data-end={a.end}
                                 style={ { backgroundColor:"rgba(128,255,0,"+0.35*a.nb+")" } }>
                                    {text}
                              </span>
                           </Tooltip> )
                          }
                        }
                     )}
                  </div>
               </div>
            ))}
         </div>
         <div id='annoPanel' className={(this.state.annoPanel?" open":"")}>
               <h3>Annotation panel</h3>
               {this.renderAnno(this.state.panelAnno,true)}
          </div>
      </div>

      return ret
   }
}


export default withStyles(styles)(AnnotatedEtext);
