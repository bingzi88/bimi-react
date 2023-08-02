import React from 'react';
import Border from '..';
export default function BorderDemo2() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "No Radius"), /*#__PURE__*/React.createElement("p", null, "border-radius: 0px"), /*#__PURE__*/React.createElement(Border, {
    radius: "no"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Small Radius"), /*#__PURE__*/React.createElement("p", null, "border-radius: 2px"), /*#__PURE__*/React.createElement(Border, {
    radius: "small"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Large Radius"), /*#__PURE__*/React.createElement("p", null, "border-radius: 4px"), /*#__PURE__*/React.createElement(Border, {
    radius: "large"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Round Radius"), /*#__PURE__*/React.createElement("p", null, "border-radius: 20px"), /*#__PURE__*/React.createElement(Border, {
    radius: "round"
  })));
}