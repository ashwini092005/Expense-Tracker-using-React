import React, { useContext } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { GlobalContext } from "../context/GlobalState";

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseChart() {
  const { transactions } = useContext(GlobalContext);

  const income = transactions
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = transactions
    .filter((item) => item.amount < 0)
    .reduce((acc, item) => acc + item.amount, 0);

  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "₹",
        data: [income, Math.abs(expense)],
        backgroundColor: ["#28a745", "#dc3545"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart">
      <Pie data={data} />
    </div>
  );
}

export default ExpenseChart;
