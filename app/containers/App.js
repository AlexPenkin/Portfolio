import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/increment';
import App from '../components/App';

const mapStateToProps = (state, ownProps) => ({
    counter: state.counter,
    inputValue: ownProps.location.pathname.substring(1)
})

export default connect(mapStateToProps, {
    increment,
    decrement
})(App)