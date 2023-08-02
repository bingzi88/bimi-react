import React from 'react';
import Border from '..';

export default function BorderDemo2() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <Border shadow="basic"></Border>
        <p>Basic Shadow</p>
      </div>
      <div>
        <Border shadow="light"></Border>
        <p>Light Shadow</p>
      </div>
      <div>
        <Border shadow="Lighter"></Border>
        <p>Lighter Shadow</p>
      </div>
      <div>
        <Border shadow="Dark"></Border>
        <p>Dark Shadow</p>
      </div>
    </div>
  );
}
