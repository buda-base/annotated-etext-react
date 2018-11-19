import React, { Component } from 'react';
import AnnotatedEtextContainer from '../lib/AnnotatedEtextContainer';
import InfiniteScroll from 'react-infinite-scroller';
import LayerSelectorContainer from '../lib/LayerSelectorContainer';
import './App.css';

type Props = {
   IRI?:string,
   chunks? : [],
   next?:number,
   services:ServiceState[],
   onGetChunks : (iri:string,n:number,s:ServiceState[],c:number) => void
}

type State = {
}

class App extends Component<Props,State> {

   constructor(props:Props)
   {
      super(props);

      this.state = {}
   }

   render() {

      console.log("props",this.props)

      let chunks = [{"value":"Hello World"}]
      if(this.props.chunks) chunks = this.props.chunks.map(e => (
         {
            "value":e.chunkContents["@value"],
            seq:e.seqNum,
            start:e.sliceStartChar,
            end:e.sliceEndChar
         }
      ))

      return (
         <div className="App">
            <LayerSelectorContainer IRI={this.props.IRI} />
            <InfiniteScroll hasMore={this.props.IRI && chunks.length+1 !== this.props.next } pageStart={0}
                 loadMore={(e) => {
                    this.props.onGetChunks(this.props.IRI,chunks.length+1,this.props.services,this.props.chunks[this.props.chunks.length - 1].sliceEndChar)
                 } } >
                  <AnnotatedEtextContainer dontSelect={false} chunks={chunks} />
            </InfiniteScroll>
         </div>
      );
   }
}

export default App;
