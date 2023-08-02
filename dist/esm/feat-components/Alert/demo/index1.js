import React from 'react';
import Alert from '..';
export default (function () {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Alert Component"), /*#__PURE__*/React.createElement(Alert, {
    type: "success",
    message: "This is a success message."
  }), /*#__PURE__*/React.createElement(Alert, {
    type: "info",
    message: "This is an info message."
  }), /*#__PURE__*/React.createElement(Alert, {
    type: "warning",
    message: "This is a warning message."
  }), /*#__PURE__*/React.createElement(Alert, {
    type: "error",
    message: "This is an error message."
  }));
});