import React, { useState, useEffect } from "react";
import ActivityForm from "./components/ActivityForm";
import TaskList from "./components/TaskList";
import CalendarView from "./components/CalendarView";
import "./App.css";
import ProgressChart from "./components/ProgressChart";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add new task
  const addTask = (task) => setTasks([...tasks, task]);

  // Toggle completion for a date in a task
  const toggleCompletion = (taskId, date) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            completedDates: task.completedDates.includes(date)
              ? task.completedDates.filter((d) => d !== date)
              : [...task.completedDates, date],
          }
        : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1 className="heading">Daily Target Tracker</h1>
      <ActivityForm onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleCompletion={toggleCompletion} />
      {/* <CalendarView tasks={tasks} /> */}
      <ProgressChart tasks={tasks} />
    </div>
  );
};

export default App;
