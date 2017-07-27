import React from 'react';
import PropTypes from 'prop-types';
import red from '../styles/app.scss';

const App = (props) => {
    const { counter, increment, decrement } = props;
    return (<div className={Object.keys(red).length}>
        <span>{ counter.value }</span>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
    </div>);
};

App.propTypes = {
    counter: PropTypes.object.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
};
export default App;
