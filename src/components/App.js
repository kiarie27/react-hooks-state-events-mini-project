import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {

  const [tasks, setTasks] = useState(TASKS);

  function selectCategory(selectedCat) {
    const newTask = tasks.filter(task => {
      if (selectedCat === "All") {
        return true;
      } else {
        return task.category === selectedCat
      }
    });
    setTasks(newTask);
    console.log(newTask);
    console.log(selectedCat)
  }

  function addNewTask(newTaskObj) {
    setTasks([...tasks, newTaskObj])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectCategory={selectCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addNewTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;