import React from 'react';
var RadioButton = function RadioButton(_ref) {
  var label = _ref.label,
    value = _ref.value,
    checked = _ref.checked,
    onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement("div", null, ' ', /*#__PURE__*/React.createElement("label", null, ' ', /*#__PURE__*/React.createElement("input", {
    type: "radio",
    value: value,
    checked: checked,
    onChange: onChange
  }), " ", label, ' '), ' ');
};
export default RadioButton;