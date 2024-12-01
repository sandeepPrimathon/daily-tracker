import React from "react";

const TaskList = ({ tasks, onToggleComplete }) => {
  return (
    <div>
      <h2>Tasks</h2>
      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <span>
              {task.date} - {task.activity}
            </span>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
