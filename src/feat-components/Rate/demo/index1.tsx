import React from 'react';
import Rate from '..';

export default () => {
  const handleRatingChange = (value) => {
    console.log('New rating:', value);
    // 执行你需要的操作
  };

  return (
    <div>
      <h1>Rate Component</h1>
      <Rate defaultValue={3} max={5} onChange={handleRatingChange} />
    </div>
  );
};
