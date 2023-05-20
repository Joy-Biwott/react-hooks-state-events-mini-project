//Task.js
import React, {useState} from "react";

function Task({text, category }) {
  const [isDeleted, setIsDeleted] = useState(false)
  function handleDeleteButton(){
    setIsDeleted(true)
  }
  if (isDeleted) {
    return null;
  }
  
 
  return (
    <div className="task" >
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteButton}>X</button>
    </div>
  );
}

export default Task;
