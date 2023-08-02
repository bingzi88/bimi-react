import React from 'react';
import "./Alert.modules.less";
var Alert = function Alert(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'info' : _ref$type,
    message = _ref.message;
  return /*#__PURE__*/React.createElement("div", {
    className: "alert alert-".concat(type)
  }, /*#__PURE__*/React.createElement("p", null, message));
};
export default Alert;