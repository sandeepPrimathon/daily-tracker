import React from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarView = ({ tasks }) => {
  const taskDates = tasks.map((task) => task.date);

  return (
    <div className="calendar-container">
      <h2>Calendar View</h2>
      <Calendar
        tileContent={({ date }) => {
          const formattedDate = date.toISOString().split("T")[0];
          if (taskDates.includes(formattedDate)) {
            return <span style={{ color: "red" }}>•</span>;
          }
          return null;
        }}
      />
    </div>
  );
};

export default CalendarView;
