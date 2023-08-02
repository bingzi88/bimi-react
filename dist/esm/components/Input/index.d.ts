import React from "react";
import PropTypes from "prop-types";
import './demo/App.css';
/**
 * Dumi Input Component
 *
 * @param {function} onChange - 回调函数，当输入框的值发生变化时触发
 * @param {string} value - 输入框的值
 * @param {string} placeholder - 输入框的占位符文本
 * @param {boolean} disabled - 是否禁用输入框
 */
declare const DumiInput: {
    ({ onChange, value, placeholder, disabled }: {
        onChange: any;
        value: any;
        placeholder: any;
        disabled: any;
    }): React.JSX.Element;
    propTypes: {
        onChange: PropTypes.Validator<(...args: any[]) => any>;
        value: PropTypes.Requireable<string>;
        placeholder: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        value: string;
        placeholder: string;
        disabled: boolean;
    };
};
export default DumiInput;
