import React from 'react';
import './Alert.modules.less';
declare const Alert: ({ type, message }: {
    type?: string | undefined;
    message: any;
}) => React.JSX.Element;
export default Alert;
