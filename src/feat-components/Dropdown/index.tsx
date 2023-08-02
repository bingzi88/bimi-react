import React, { useState } from 'react';
import './Dropdown.module.less';

/**
 * Dropdown 组件
 * @param {array} options - 下拉选项数组
 * @param {function} onSelect - 选项选择回调函数
 */
const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    // 调用 onSelect 回调函数，传递选择的选项
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={handleToggleDropdown}>
        {selectedOption || 'Select an option'}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelectOption(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
