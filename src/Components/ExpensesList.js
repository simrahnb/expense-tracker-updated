import React from "react";
import { Link } from "react-router-dom";

import Expense from "./Expense";

export default function ExpensesList({ transactions, deleteTransaction }) {
  return (
    <>
      <Link to="/add">
        <button className="explink">Add an Expense</button>
      </Link>
      <h3 className="expenselist">List of all Expenses</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Expense
            transaction={transaction}
            deleteTransaction={deleteTransaction}
            key={transaction.id}
          />
        ))}
      </ul>
    </>
  );
}
