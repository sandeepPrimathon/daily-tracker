import React, { useState, useEffect } from "react";
import ActivityForm from "./components/ActivityForm";
import TaskList from "./components/TaskList";
import CalendarView from "./components/CalendarView";
import ActivityChart from "./components/ActivityChart";
import "./App.css";

const App = () => {
  // Initialize state with localStorage data
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to localStorage whenever tasks state updates
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Daily Routine Tracker</h1>
      <ActivityForm onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleComplete={toggleComplete} />
      <CalendarView tasks={tasks} />
      <ActivityChart tasks={tasks} />
    </div>
  );
};

export default App;
