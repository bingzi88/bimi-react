import React, { useState } from 'react';
import Switch from '..';

const App: React.FC = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleClick = (isOn: boolean) => {
    setIsSwitchOn(isOn);
    console.log(`Switch is ${isOn ? 'on' : 'off'}`);
  };

  return (
    <div>
 
      <Switch
        isOn={isSwitchOn}
        onClick={handleClick}
        displayText={isSwitchOn ? '开启' : '关闭'} // 设置开关按钮的文字内容
      />
      <p><span className='open_wen'>带有文字的</span></p>
    </div>
  );
};

export default App;