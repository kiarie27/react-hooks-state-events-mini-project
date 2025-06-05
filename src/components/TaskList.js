import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks }) {

  function deleteTask(oneTask) {
    const remainingTasks = tasks.filter(task => task.text !== oneTask);
    setTasks(remainingTasks)
  }

  const displayTasksIndividually = tasks.map(task => {
    return <Task key={task.text} text={task.text} category={task.category} onDeleteTask={deleteTask} />
  })

  return (
    <div className="tasks">
      {displayTasksIndividually}
    </div>
  );
}

export default TaskList;