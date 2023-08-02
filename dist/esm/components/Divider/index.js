import React, { memo, useMemo } from 'react';
import "./Divider.modules.less";
var Divider = /*#__PURE__*/memo(function (props) {
  var type = props.type,
    width = props.width,
    position = props.position,
    children = props.children;
  var dividerStyle = useMemo(function () {
    if (!type && type !== 'dashed' && type !== 'dotted') {
      return 'solid';
    }
    return type;
  }, [type]);
  return /*#__PURE__*/React.createElement("div", {
    className: "divider"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-text ".concat(dividerStyle)
  }, children));
});
export default Divider;