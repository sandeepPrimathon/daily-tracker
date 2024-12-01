import React from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarView = ({ tasks }) => {
  const taskDates = tasks.flatMap((task) => task.completedDates);

  return (
    <div className="calendar-container">
      <h2>Calendar</h2>
      <Calendar
        tileClassName={({ date }) => {
          const formattedDate = date.toISOString().split("T")[0];
          if (taskDates?.includes(formattedDate)) return "completed-day";
          return null;
        }}
      />
    </div>
  );
};

export default CalendarView;
