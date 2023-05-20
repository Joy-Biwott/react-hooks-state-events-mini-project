import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");

function App() {
  
  const [categories, setCategories] = useState(CATEGORIES)
  const [selectedCategory, setSelectedCategory] =useState("All");
  const [tasks, setTasks] = useState(TASKS);

  function onTaskFormSubmit(newTask){
    return setTasks([...tasks, newTask])
    // setCategories([...categories, category]))
  }
console.log({ categories, tasks });
  function onSelectCategory(category){
    console.log(tasks)
    setSelectedCategory(category);
    const showTasks = category=== "All" ? TASKS : TASKS.filter((task) => task.category === category);
    setTasks(showTasks);
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        onSelectCategory={ onSelectCategory }/>
      <NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} key={tasks.id} setTasks={setTasks}/>
    </div>
  );
}

export default App;
