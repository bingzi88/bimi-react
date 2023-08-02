import React from 'react';
import Border from '..';
export default function BorderDemo1() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Solid"), /*#__PURE__*/React.createElement(Border, {
    type: "solid",
    color: ""
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Dashed"), /*#__PURE__*/React.createElement(Border, {
    type: "dashed",
    color: ""
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Dotted"), /*#__PURE__*/React.createElement(Border, {
    type: "dotted",
    color: ""
  })));
}