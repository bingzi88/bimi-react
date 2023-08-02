import React from 'react';
import './Loading.modules.less';
/**
 * Loading 组件
 * @param {string} size - 加载图标大小
 * @param {string} color - 加载图标颜色
 */
declare const Loading: ({ size, color }: {
    size?: string | undefined;
    color?: string | undefined;
}) => React.JSX.Element;
export default Loading;
