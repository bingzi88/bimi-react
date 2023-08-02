import React from 'react';
import Border from '..';

export default function BorderDemo2() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <h3>No Radius</h3>
        <p>border-radius: 0px</p>
        <Border radius='no'></Border>
      </div>
      <div>
        <h3>Small Radius</h3>
        <p>border-radius: 2px</p>
        <Border radius='small'></Border>
      </div>
      <div>
        <h3>Large Radius</h3>
        <p>border-radius: 4px</p>
        <Border radius='large'></Border>
      </div>
      <div>
        <h3>Round Radius</h3>
        <p>border-radius: 20px</p>
        <Border radius='round'></Border>
      </div>
    </div>
  );
}
