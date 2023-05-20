//Tasklist.js
import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  const tasksToDisplay = tasks.map((task) => {
    return(<li key={task.text}><Task  text={task.text} category={task.category}/></li>)
  })
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      
        <ul>{tasksToDisplay}</ul>
    </div>
  );
}

export default TaskList;
