import React from 'react';
import './Alert.modules.less';

interface AlertProps {
  
}
const Alert = ({ type = 'info', message }) => {
  return (
    <div className={`alert alert-${type}`}>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
