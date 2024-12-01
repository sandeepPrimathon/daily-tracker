import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const ActivityChart = ({ tasks }) => {
  const data = tasks.reduce((acc, task) => {
    const existing = acc.find((item) => item.date === task.date);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ date: task.date, count: 1 });
    }
    return acc;
  }, []);

  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};

export default ActivityChart;
