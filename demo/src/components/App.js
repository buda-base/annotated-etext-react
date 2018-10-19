import React, { Component } from 'react';
import AnnotatedEtextContainer from '../lib/AnnotatedEtextContainer';
import './App.css';

type Props = {
   chunks? : []
}

type State = {
}

class App extends Component<Props> {

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
            <AnnotatedEtextContainer chunks={chunks} />
         </div>
      );
   }
}

export default App;
