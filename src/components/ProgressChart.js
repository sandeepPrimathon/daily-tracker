import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ProgressChart = ({ tasks }) => {
  const labels = tasks.map((task) => task.title);
  const completedData = tasks.map((task) => task?.completedDates?.length);

  const data = {
    labels,
    datasets: [
      {
        label: "Tasks Completed",
        data: completedData,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Tasks",
        },
      },
      y: {
        title: {
          display: true,
          text: "Completed Days",
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ProgressChart;
