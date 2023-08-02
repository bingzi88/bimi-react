import React from 'react';
// import Switch from './Switch.css';
import Switch from '..';
var App = function App() {
  var handleClick = function handleClick(isOn) {
    console.log("Switch is ".concat(isOn ? 'on' : 'off'));
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Switch \u5F00\u5173"), /*#__PURE__*/React.createElement(Switch, {
    isOn: true,
    onClick: handleClick
  }));
};
export default App;