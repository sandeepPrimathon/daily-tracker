import React, { useState } from "react";

const ActivityForm = ({ onAddTask }) => {
  const [date, setDate] = useState("");
  const [activity, setActivity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !activity) return alert("Please fill in all fields.");
    const newTask = {
      id: Date.now(),
      date,
      activity,
      completed: false,
    };
    onAddTask(newTask);
    setDate("");
    setActivity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="text"
        value={activity}
        placeholder="E.g.: Exercise, Reading"
        onChange={(e) => setActivity(e.target.value)}
        required
      />
      <button type="submit">Add Activity</button>
    </form>
  );
};

export default ActivityForm;
