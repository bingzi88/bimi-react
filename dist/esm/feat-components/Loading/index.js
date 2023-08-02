import React from 'react';
import "./Loading.modules.less";

/**
 * Loading 组件
 * @param {string} size - 加载图标大小
 * @param {string} color - 加载图标颜色
 */
var Loading = function Loading(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? '40px' : _ref$size,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#000' : _ref$color;
  var containerStyle = {
    width: size,
    height: size
  };
  var spinnerStyle = {
    borderTopColor: color,
    borderLeftColor: color
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "loading",
    style: containerStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "loading-spinner",
    style: spinnerStyle
  }));
};
export default Loading;