import React from 'react';
import Border from '..';
export default function BorderDemo2() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Border, {
    shadow: "basic"
  }), /*#__PURE__*/React.createElement("p", null, "Basic Shadow")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Border, {
    shadow: "light"
  }), /*#__PURE__*/React.createElement("p", null, "Light Shadow")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Border, {
    shadow: "Lighter"
  }), /*#__PURE__*/React.createElement("p", null, "Lighter Shadow")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Border, {
    shadow: "Dark"
  }), /*#__PURE__*/React.createElement("p", null, "Dark Shadow")));
}