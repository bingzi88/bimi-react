 import React,{useState} from "react";
 import Input from '..'

 
 
 const App = () => {
   const [inputValue, setInputValue] = useState("");
 
   const handleInputChange = (value?:any) => {
     setInputValue(value);
   };
 
   return (
     <div>
 
       <Input
         value={inputValue}
         onChange={handleInputChange}
         placeholder="请输入..."
         disabled={false}
     
       />
 
     </div>
   );
 };
 
 export default App;
 