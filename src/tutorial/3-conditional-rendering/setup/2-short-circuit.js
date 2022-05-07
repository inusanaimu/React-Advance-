/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  // console.log(secondValue);
  // console.log(firstValue);

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>{secondValue}</h1> */}
      <h2>short circuit Evaluation</h2>
      <button className='btn' onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {/* <h1>{text || 'john doe'}</h1> */}
      {isError ? (
        <h3 style={{ color: 'red' }}>Error...</h3>
      ) : (
        <h3> No Error is Found</h3>
      )}
    </>
  );
};

export default ShortCircuit;
