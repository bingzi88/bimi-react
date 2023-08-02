function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import "./Rate.module.less";

/**
 * Rate 组件
 * @param {number} defaultValue - 默认评分值
 * @param {number} max - 最大评分值
 * @param {function} onChange - 评分变化回调函数
 */
var Rate = function Rate(_ref) {
  var _ref$defaultValue = _ref.defaultValue,
    defaultValue = _ref$defaultValue === void 0 ? 0 : _ref$defaultValue,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? 5 : _ref$max,
    onChange = _ref.onChange;
  var _useState = useState(defaultValue),
    _useState2 = _slicedToArray(_useState, 2),
    rating = _useState2[0],
    setRating = _useState2[1];
  var handleRatingChange = function handleRatingChange(value) {
    setRating(value);
    if (onChange) {
      onChange(value);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "rate"
  }, Array(max).fill(0).map(function (_, index) {
    return /*#__PURE__*/React.createElement("span", {
      key: index,
      className: "rate-star ".concat(index < rating ? 'rate-star-filled' : ''),
      onClick: function onClick() {
        return handleRatingChange(index + 1);
      }
    }, "\u2605");
  }));
};
export default Rate;