import React from 'react';
import Divider from '..';

export default () => {
  return (
    <div>
      <p>实线</p>
      <Divider type='solid' />
      <p>虚线</p>
      <Divider type='dashed' />
      <p>点状</p>
      <Divider type='dotted' />
    </div>
  );
};
