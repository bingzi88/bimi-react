import React, { useState } from 'react';
import './Rate.module.less';

/**
 * Rate 组件
 * @param {number} defaultValue - 默认评分值
 * @param {number} max - 最大评分值
 * @param {function} onChange - 评分变化回调函数
 */
const Rate = ({ defaultValue = 0, max = 5, onChange }) => {
  const [rating, setRating] = useState(defaultValue);

  const handleRatingChange = (value) => {
    setRating(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="rate">
      {Array(max)
        .fill(0)
        .map((_, index) => (
          <span
            key={index}
            className={`rate-star ${
              index < rating ? 'rate-star-filled' : ''
            }`}
            onClick={() => handleRatingChange(index + 1)}
          >
            ★
          </span>
        ))}
    </div>
  );
};

export default Rate;
