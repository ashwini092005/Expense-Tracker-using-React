import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="list">
      <h3>Transactions</h3>
      <ul>
        {transactions.map((item) => (
          <li key={item.id} className={item.amount < 0 ? "minus" : "plus"}>
            {item.text} <span>₹{item.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
