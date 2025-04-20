import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);

  const total = transactions.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="balance">
      <h2>Balance: ₹{total}</h2>
    </div>
  );
}

export default Balance;
