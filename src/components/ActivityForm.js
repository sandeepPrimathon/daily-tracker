import React, { useState } from "react";

const ActivityForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !deadline) return alert("Please fill in all fields.");
    const newTask = {
      id: Date.now(),
      title,
      deadline,
      completedDates: [],
    };
    onAddTask(newTask);
    setTitle("");
    setDeadline("");
  };

  return (
    <form onSubmit={handleSubmit} className="activity-form">
      <input
        type="text"
        placeholder="Add Task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Select Deadline Date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ActivityForm;
