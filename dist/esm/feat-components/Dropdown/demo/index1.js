import React from 'react';
import Dropdown from '..';
export default (function () {
  var options = ['Option A', 'Option B', 'Option C'];
  var handleSelectOption = function handleSelectOption(option) {
    console.log('Selected option:', option);
    // 执行你需要的操作
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "\u6700\u57FA\u672C\u7684\u4E0B\u62C9\u83DC\u5355"), /*#__PURE__*/React.createElement(Dropdown, {
    options: options,
    onSelect: handleSelectOption
  }));
});