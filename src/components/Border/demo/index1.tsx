import React from 'react';
import Border from '..';

export default function BorderDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <p>Solid</p>
        <Border type="solid" color=''></Border>
      </div>
      <div>
        <p>Dashed</p>
        <Border type="dashed" color=''></Border>
      </div>
      <div>
        <p>Dotted</p>
        <Border type="dotted" color=''></Border>
      </div>
    </div>
  );
}
