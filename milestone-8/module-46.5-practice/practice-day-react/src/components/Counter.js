import React from 'react';

const Counter = (props) => {
    const {count, increaseNum , decreseNum} = props;
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increaseNum}>+</button>
            <button onClick={decreseNum}>-</button>
        </div>
    );
};

export default Counter;