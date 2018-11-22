//@flow
import React from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from "redux";
import AnnotatedEtext from './AnnotatedEtext';

const mapStateToProps = (state: Object, ownProps: Object): Object => {
    let props = { ...ownProps }

    let services = state.data.services
    props = { ...props, services }

    return props ;
}

const mapDispatchToProps = (dispatch: Dispatch<*>): Object => {
    return {
    }
};

const AnnotatedEtextContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnnotatedEtext);

export default AnnotatedEtextContainer;
