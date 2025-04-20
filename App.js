import React from "react";
import { GlobalProvider } from "./context/GlobalState";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import ExpenseChart from "./components/ExpenseChart";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <h1>💰 Expense Tracker</h1>
        <Balance />
        <ExpenseChart />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;


