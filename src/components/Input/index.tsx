import React, { useState } from "react";
import PropTypes from "prop-types";
 import './demo/App.css'

/**
 * Dumi Input Component
 *
 * @param {function} onChange - 回调函数，当输入框的值发生变化时触发
 * @param {string} value - 输入框的值
 * @param {string} placeholder - 输入框的占位符文本
 * @param {boolean} disabled - 是否禁用输入框
 */
const DumiInput = ({ onChange, value, placeholder, disabled }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (event?:any) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <input
      type="text"
      className="dumi-input"
      value={inputValue}
      placeholder={placeholder}
      disabled={disabled}
      onChange={handleChange}
    />
  );
};

DumiInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

DumiInput.defaultProps = {
  value: "",
  placeholder: "",
  disabled: false,
};

export default DumiInput;
