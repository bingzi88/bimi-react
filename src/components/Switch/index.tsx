import React, { FC, useState, memo } from 'react';
import './demo/Switch.css';
import { SwitchProps, NativeInputProps } from './interface';

const Switch: FC<SwitchProps> = memo(({ isOn = false, onClick, displayText = '' }) => {
  const [checked, setChecked] = useState(isOn);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);

    if (onClick) {
      onClick(newChecked);
    }
  };

  return (
    <div className="switch" onClick={handleChange}>
      <div className={`switch-toggle ${checked ? 'on' : 'off'}`} />
      {displayText && <span className='open'>{displayText}</span>}
    </div>
  );
});

export default Switch;