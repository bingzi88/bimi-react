import React from 'react';
import './Loading.modules.less';

/**
 * Loading 组件
 * @param {string} size - 加载图标大小
 * @param {string} color - 加载图标颜色
 */
const Loading = ({ size = '40px', color = '#000' }) => {
  const containerStyle = {
    width: size,
    height: size,
  };

  const spinnerStyle = {
    borderTopColor: color,
    borderLeftColor: color,
  };

  return (
    <div className="loading" style={containerStyle}>
      <div className="loading-spinner" style={spinnerStyle}></div>
    </div>
  );
};

export default Loading;
