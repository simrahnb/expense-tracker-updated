import React from "react";
import { Link } from "react-router-dom";

import Expense from "./Expense";

export default function ExpensesList({ transactions, deleteTransaction }) {
  return (
    <>
      <h3 className="expenselist title">List of all Expenses</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Expense
            transaction={transaction}
            deleteTransaction={deleteTransaction}
            key={transaction.id}
          />
        ))}
      </ul>
      <div className="Add Expense Link">
        <Link to="/add">Add an Expense</Link>
      </div>
    </>
  );
}
