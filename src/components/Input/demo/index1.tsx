import React,{useState} from "react";
import Input from '..'



const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value?:any) => {
    setInputValue(value);
  };

  return (
    <div>
<h1>双向绑定</h1>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        placeholder="请输入..."
        disabled={false}
    
      />
       <p>You typed: {inputValue}</p>
    </div>
    
  );
};

export default App;
