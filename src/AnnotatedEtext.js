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
}

export default class AnnotatedEtext extends Component<Props,State> {

   constructor(props:Props)
   {
      super(props);

      this.state = {}
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

   onMouseUp(e)
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
      }

      // TODO fix issue with start/end when selection from/to is between two rows 

      console.log("selec ",startChar,endChar,fromChunk,toChunk,selec)

   }

   render() {
      let ret =
         <div id="annotatedEtext"  onMouseUp={ this.onMouseUp.bind(this) }>
            {this.props.chunks && this.props.chunks.map((c,i) => (
               <div key={i} data-seq={c.seq} data-start={c.start} data-end={c.end}>{c.value}</div>
            ))}
         </div> ;
      return ret ;
   }
}
