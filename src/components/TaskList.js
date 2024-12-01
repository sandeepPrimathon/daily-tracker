import React from "react";

const TaskList = ({ tasks, onToggleCompletion }) => {
  const handleDateToggle = (taskId, date) => {
    onToggleCompletion(taskId, date);
  };

  return (
     <div className="task-list">
     {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <div className="sub-heading">
          <h3>{task.title?.toUpperCase()}</h3>
          <p>Deadline: {task.deadline}</p>
          </div>
          <div className="dates">
            {[...Array(31)].map((_, i) => {
              const date = new Date().toISOString().slice(0, 7) + `-${i + 1}`;
              return (
                <button
                  key={i}
                  className={
                    task.completedDates?.includes(date)
                      ? "date-btn completed"
                      : "date-btn"
                  }
                  onClick={() => handleDateToggle(task.id, date)}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>
      ))}
     </div>
  );
};

export default TaskList;
