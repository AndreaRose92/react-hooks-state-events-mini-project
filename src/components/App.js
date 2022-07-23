import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [tasks, setTasks] = useState([...TASKS])

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.name)
    e.target.className="selected"
  }
  
  function onAddTask(newTask) {
    setTasks(tasks => {
      return [...tasks, newTask]
    })  
  }

  const tasksToDisplay = tasks.filter((task) => {
    if (selectedCategory === "All" ) return true;

    return task.category === selectedCategory
})

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        handleSelect={handleCategoryChange}
      />
      <NewTaskForm
        onTaskFormSubmit={onAddTask}
      />
      <TaskList tasks={tasksToDisplay}/>
    </div>
  );
}

export default App;
