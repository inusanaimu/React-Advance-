import React from 'react';

const ErrorExample = () => {
  let title = 'random title';
  const handleClick = () => {
    title = 'Hello People';
    console.log(title);
  };
  return (
    <>
      <h2>{title}</h2>
      <button className='btn' onClick={handleClick}>
        change click
      </button>
    </>
  );
};

export default ErrorExample;
