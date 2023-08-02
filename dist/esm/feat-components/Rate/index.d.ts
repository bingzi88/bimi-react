import React from 'react';
import './Rate.module.less';
/**
 * Rate 组件
 * @param {number} defaultValue - 默认评分值
 * @param {number} max - 最大评分值
 * @param {function} onChange - 评分变化回调函数
 */
declare const Rate: ({ defaultValue, max, onChange }: {
    defaultValue?: number | undefined;
    max?: number | undefined;
    onChange: any;
}) => React.JSX.Element;
export default Rate;
