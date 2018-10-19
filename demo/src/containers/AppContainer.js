//@flow
//import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import * as data from "../state/data/actions" ;

const mapStateToProps = (state, ownProps) => {
    let props = { ...ownProps }
    let chunks = state.data.chunks
    let IRI = state.data.IRI
    let next = state.data.next
    props = { ...props, chunks, IRI, next}
    return props ;
}

const mapDispatchToProps = (dispatch) => {
    return {
      onGetChunks:(iri:string,n:number) => {
         dispatch(data.getChunks(iri,n));
      },
    }
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;