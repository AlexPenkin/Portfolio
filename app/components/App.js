import React from 'react'

const App = (props) => { 
 const { counter, increment, decrement } = props;
    return <div>
        <span>{counter.counter}</span>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
    </div>
}

export default App;