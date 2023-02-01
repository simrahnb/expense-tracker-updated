import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddExpense({ addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount, // turn string to number
    };

    addTransaction(newTransaction);
    navigate("/");
  };

  return (
    <>
      <h3 className="minus">Add a New Expense</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Name</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            -All expenses should have a negative value & income should have a
            positive value-
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
