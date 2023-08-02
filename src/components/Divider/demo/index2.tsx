import React from 'react';
import Divider from '..';

export default () => {
  return (
    <div>
      <p>左边</p>
      <Divider position='left'>left</Divider>
      <p>右边</p>
      <Divider position='right'>right</Divider>
      <p>中间</p>
      <Divider position='center'>center</Divider>
    </div>
  );
};
