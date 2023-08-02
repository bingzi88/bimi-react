import React, { memo, useMemo } from 'react';
import "./Border.module.less";
var Border = /*#__PURE__*/memo(function (props) {
  var type = props.type,
    width = props.width,
    height = props.height,
    color = props.color,
    radius = props.radius,
    shadow = props.shadow,
    children = props.children;
  var borderStyle = useMemo(function () {
    if (!type && type !== 'dashed' && type !== 'dotted') {
      return 'solid';
    }
    return type;
  }, [type]);
  var borderSize = useMemo(function () {
    var size = {
      width: '100px',
      height: '40px'
    };
    if (width) {
      size.width = width + 'px';
    }
    if (height) {
      size.height = height + 'px';
    }
    if (!radius && radius !== 'small' && radius !== 'large' && radius !== 'round') {
      size.borderRadius = '0px';
    } else if (radius === 'small') {
      size.borderRadius = '2px';
    } else if (radius === 'large') {
      size.borderRadius = '4px';
    } else if (radius === 'round') {
      size.borderRadius = '20px';
    }
    if (!shadow && shadow !== 'light' && shadow !== 'Lighter' && shadow !== 'Dark') {
      size.boxShadow = '0px 12px 32px 4px rgba(0, 0, 0, .04), 0px 8px 20px rgba(0, 0, 0, .08)';
    } else if (shadow === 'light') {
      size.boxShadow = '0px 0px 12px rgba(0, 0, 0, .12)';
    } else if (shadow === 'Lighter') {
      size.boxShadow = '0px 0px 6px rgba(0, 0, 0, .12)';
    } else if (shadow === 'Dark') {
      size.boxShadow = '0px 16px 48px 16px rgba(0, 0, 0, .08), 0px 12px 32px rgba(0, 0, 0, .12), 0px 8px 16px -8px rgba(0, 0, 0, .16)';
    }
    return size;
  }, [width, height, color, radius, shadow]);
  return /*#__PURE__*/React.createElement("div", {
    className: "border"
  }, /*#__PURE__*/React.createElement("div", {
    className: borderStyle,
    style: borderSize
  }, children));
});
export default Border;