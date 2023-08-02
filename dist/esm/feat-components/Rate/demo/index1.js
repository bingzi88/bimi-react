import React from 'react';
import Rate from '..';
export default (function () {
  var handleRatingChange = function handleRatingChange(value) {
    console.log('New rating:', value);
    // 执行你需要的操作
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Rate Component"), /*#__PURE__*/React.createElement(Rate, {
    defaultValue: 3,
    max: 5,
    onChange: handleRatingChange
  }));
});