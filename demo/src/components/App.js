import React, { Component } from 'react';
import AnnotatedEtextContainer from '../lib/AnnotatedEtextContainer';
import InfiniteScroll from 'react-infinite-scroller';
import './App.css';

type Props = {
   IRI?:string,
   chunks? : [],
   onGetChunks : (iri:string,n:number) => void
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
      let chunks = [{"value":"Hello World"}]
      if(this.props.chunks) chunks = this.props.chunks.map(e => ({"value":e.chunkContents["@value"]}))

      return (
         <div className="App">
            <InfiniteScroll hasMore={!this.props.loaded} pageStart={0}
               loadMore={(e) => { if(chunks.length !== this.props.next) this.props.onGetChunks(this.props.IRI,chunks.length) } } >
                  <AnnotatedEtextContainer chunks={chunks} />
            </InfiniteScroll>
         </div>
      );
   }
}

export default App;
