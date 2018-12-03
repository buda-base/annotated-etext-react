//@flow
import React, { Component } from 'react';
import '../src/AnnotatedEtext.css'
import ReactDOM from 'react-dom';
import rangy from 'rangy';
import _ from "lodash" ;

type Props = {
   chunks:[],
   IRI:string,
}

type State = {
   annotations: Array<Object>,
   chunks?:Array<Object>,
   numAnno?:number,
   annoPanel?:boolean
}

export default class AnnotatedEtext extends Component<Props,State> {

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
      console.log("getDSfP",props,state)
      let annoChunks = []
      let annoInfo = [ ...state.annotations ]
      if(props.services) for(let service of props.services)
      {
         for(let id of Object.keys(service.collectionsById))
         {
            let pages = service.collectionsById[id].pages
            for(let p of Object.values(pages))
            {
               for(let anno of p.items)
               {
                  console.log("anno",anno)
                  if(anno.target)
                  {
                     let startChar, endChar
                     if(anno.target.type === "WorkLocation")
                     {
                        startChar = anno.target.workLocationChar
                        endChar = anno.target.workLocationEndChar
                     }
                     else if(anno.target.type === "Annotation")
                     {
                        let target = anno.target
                        // can be recursive in target eg target.target...target
                        do {
                           target = target.target
                        }
                        while(target.type && target.type != "WorkLocation" && target.target)
                        if(target) {
                           startChar = target.workLocationChar
                           endChar = target.workLocationEndChar
                        }
                     }
                     annoInfo.push({
                        startChar,
                        endChar,
                        body:anno.body,
                        id:anno.id,
                        motivation:anno.motivation,
                     });
                  }
               }
            }
         }
      }

      console.log("annoInfo",annoInfo);

      if(props.chunks && (!state.chunks || annoInfo.length !== state.numAnno
                           || props.chunks.length !== state.chunks.length ))
      {

         for(let elem of props.chunks)
         {
            let chunk = { ...elem }
            for(let anno of annoInfo)
            {
               if((anno.startChar >= chunk.start && anno.startChar <= chunk.end)
                  ||(anno.endChar >= chunk.start && anno.endChar <= chunk.end)
                  ||(chunk.start >= anno.startChar && chunk.end <= anno.endChar))
               {
                  if(!chunk.annoList) chunk["annoList"] = []
                  chunk.annoList.push(anno)
               }
            }
            if(chunk.annoList)
            {
               let tmp = chunk.annoList.reduce( (acc,e,i) => {
                  let a = e.startChar
                  let z = e.endChar
                  if(a < chunk.start) a = chunk.start
                  if(z > chunk.end) z = chunk.end
                  return ([ ...acc,
                           { i, char:a, start:true, id:e.id, body:e.body,motivation:e.motivation },
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
                     if(body) elem.annotations = { ...body }
                     chunk.pieces.push(elem)
                  }
                  if(a.start) {
                     nb ++
                     if(a.body) {
                        if(!body) body = {}
                        body[a.id] = { body:a.body,motivation:a.motivation }
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
               console.log(JSON.stringify(chunk.pieces,null,4))
               chunk.annoList = _.orderBy(chunk.annoList,['char'],['ASC'])
               //console.log(chunk.annoList)

            }

            annoChunks.push(chunk)
         }
         return { ...state, chunks:annoChunks, numAnno:state.annotations.length }
      }
      else return { ...state  }
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


   onMouseUp(e:{})
   {
      if(this.props.dontSelect) return

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
               this.setState({ ...this.state, annotations:[...this.state.annotations, {
                  startChar, endChar, motivation:"identifying",
                  body:{ "rdfs:comment": { "@language": "en", "@value": "This is test annotation #"+id },
               }, id:"tmp:test"+'_' + id } ] })
            }
            console.log("selec ",startChar,endChar,fromChunk,toChunk,selec,e)
         }
         else {
            console.log("no chunk selec",fromChunk,toChunk)
         }

         selec.collapseToStart()
      }
      catch(e)
      {
         console.error("selec error",e)
      }
   }

   onAnnoClick(e) {

      this.setState({...this.state,annoPanel:!this.state.annoPanel})
      //alert(a.nb+" annotation"+(a.nb > 1?"s":"")+" here")}

   }

   render() {

      console.log("AeT",this.props,this.state)

      let ret =
         [<div id='annoPanel' className={(this.state.annoPanel?" open":"")}><h3>Annotation panel</h3></div>,
         <div id="annotatedEtext"  onMouseUp={ this.onMouseUp.bind(this) }>
            {this.state.chunks && this.state.chunks.map((c,i) => (
               <div key={i} >
                  <div className="text" data-seq={c.seq} data-start={c.start} data-end={c.end}>
                     {!c.pieces && c.value}
                     {c.pieces && c.pieces.map( (a,j) =>
                        (<span { ...(a.nb > 0 ? {onClick:this.onAnnoClick.bind(this)}:{})  }
                        className={a.nb > 0 ? "annotated":""} key={j} data-seq={c.seq} data-start={a.start} data-end={a.end}
                        style={ { backgroundColor:"rgba(128,255,0,"+0.35*a.nb+")" } }>
                           {c.value.substring(a.start-c.start,a.end-c.start)}
                        </span>))}
                  </div>
               </div>
            ))}
         </div>] ;

      return ret
   }
}
