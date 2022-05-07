import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };

  const delayIncrease = () => {
    setTimeout(
      () =>
        setValue((prevValue) => {
          return prevValue + 1;
        }),
      2000
    );
  };
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular Counter</h2>
        <h1>{value}</h1>
        <button
          className='btn'
          onClick={() => {
            setValue(value - 1);
          }}
        >
          Decrease
        </button>
        <button className='btn' onClick={reset}>
          Reset
        </button>
        <button
          className='btn'
          onClick={() => {
            setValue(value + 1);
          }}
        >
          increase
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>Complex Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={delayIncrease}>
          Delay Increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
