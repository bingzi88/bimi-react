import React from 'react';
import Dropdown from '..';

export default () => {
  const options = ['Option A', 'Option B', 'Option C'];

  const handleSelectOption = (option) => {
    console.log('Selected option:', option);
    // 执行你需要的操作
  };

  return (
    <div>
      <p>最基本的下拉菜单</p>
      <Dropdown options={options} onSelect={handleSelectOption} />
    </div>
  );
};
