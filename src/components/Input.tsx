import React, { useState } from "react";

const Input: any = () => {
  const [todo, setTodo] = useState("");
  const handleChange = (event: any) => {
    setTodo(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e)} value={todo} />
      <button>Add</button>
    </div>
  );
};

export default Input;
