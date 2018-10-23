//@flow
import React, { Component } from 'react';
import '../src/AnnotatedEtext.css'
import ReactDOM from 'react-dom';
import rangy from 'rangy';

type Props = {
   chunks:[],
   IRI:string,
}

type State = {
   annotations:[],
   chunks?:[],
   numAnno?:number
}

export default class AnnotatedEtext extends Component<Props,State> {

   constructor(props:Props)
   {
      super(props);

      this.state = { annotations:[] }
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
      if(props.chunks && (!state.chunks || state.annotations.length !== state.numAnno
                           || props.chunks.length !== state.chunks.length ))
      {
         for(let elem of props.chunks)
         {
            let chunk = { ...elem }
            for(let anno of state.annotations)
            {
               if((anno.startChar >= chunk.start && anno.startChar <= chunk.end)
                  ||(anno.endChar >= chunk.start && anno.endChar <= chunk.end)
                  ||(chunk.start >= anno.startChar && chunk.end <= anno.endChar))
               {
                  if(!chunk.annoList) chunk["annoList"] = []
                  chunk.annoList.push(anno)
               }
            }

            annoChunks.push(chunk)
         }
         return { ...state, chunks:annoChunks, numAnno:state.annotations.length }
      }
      else return { ...state  }
   }


   onMouseUp(e:Event)
   {
      let selec = rangy.getSelection()

      let fromChunk = selec.anchorNode.parentNode.dataset
      if(!fromChunk.seq) fromChunk = { ...selec.anchorNode.firstChild.parentNode.dataset, noFrom:true }
      fromChunk = { ...fromChunk, offset: selec.anchorOffset  }
      let toChunk = selec.focusNode.parentNode.dataset
      if(!toChunk.seq) toChunk = { ...selec.focusNode.firstChild.parentNode.dataset, noTo:true}
      toChunk = { ...toChunk, offset: selec.focusOffset  }

      let startChar = Number(fromChunk.start) + fromChunk.offset
      let endChar = Number(toChunk.start) + toChunk.offset

      if(startChar > endChar)
      {
         let val = endChar
         endChar = startChar
         startChar = val;
         // when selection starts after end of row backwards
         if(toChunk.offset + toChunk.start == toChunk.end) startChar ++
      }
      // when selection starts after end of row
      else if(fromChunk.offset + fromChunk.start == fromChunk.end) startChar ++
      // when selection ends between two rows
      if(toChunk.noTo) endChar -- ;

      if(startChar !== endChar)
         this.setState({ ...this.state, annotations:[...this.state.annotations, { startChar, endChar } ]})

      console.log("selec ",startChar,endChar,fromChunk,toChunk,selec)

   }

   render() {

      console.log("render",this.props,this.state)

      let ret =
         <div id="annotatedEtext"  onMouseUp={ this.onMouseUp.bind(this) }>
            {this.state.chunks && this.state.chunks.map((c,i) => (
               <div>
                  { c.annoList && c.annoList.map(a => (<div className='anno'>
                     <span>{c.value.substring(0,a.startChar-c.start)}</span>
                     <span className="color">{c.value.substring(a.startChar-c.start,a.endChar-c.start)}</span>
                  </div>) ) }
                  <div className="text" key={i} data-seq={c.seq} data-start={c.start} data-end={c.end}>{c.value}</div>
               </div>
            ))}
         </div> ;
      return ret ;
   }
}
