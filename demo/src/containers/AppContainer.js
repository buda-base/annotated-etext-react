//@flow
import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state, ownProps) => {
    let props = { ...ownProps }
    let chunks = state.data.chunks
    props = { ...props, chunks}
    return props ;
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
