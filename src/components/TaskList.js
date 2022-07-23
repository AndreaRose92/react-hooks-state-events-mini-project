import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {

  // const tasksToDisplay = tasks

  const tasksToRender = tasks.map(task => <Task key={task.text} category={task.category} text={task.text}/> )

  return (
    <div className="tasks">
      {tasksToRender}
    </div>
  );
}

export default TaskList;
