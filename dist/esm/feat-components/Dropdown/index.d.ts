import React from 'react';
import './Dropdown.module.less';
/**
 * Dropdown 组件
 * @param {array} options - 下拉选项数组
 * @param {function} onSelect - 选项选择回调函数
 */
declare const Dropdown: ({ options, onSelect }: {
    options: any;
    onSelect: any;
}) => React.JSX.Element;
export default Dropdown;
