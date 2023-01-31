import React from "react";

import Expense from "./Expense";

export default function ExpensesList({ transactions, deleteTransaction }) {
  return (
    <>
      <h3>List of all Expenses</h3>
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
