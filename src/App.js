import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

// Components
import { Header } from "./Components/Header";
import Balance from "./Components/Balance";
import Expenses from "./Components/Expenses";
import ExpensesList from "./Components/ExpensesList";
import AddExpense from "./Components/AddExpense";

function App() {
  const [transactions, setTransactions] = useState([]);

  const deleteTransaction = (id) => {
    console.log(id);
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
    console.log(transactions);
  };

  const addTransaction = (transaction) => {
    setTransactions((transactions) => [transaction, ...transactions]);
    console.log(transaction);
    console.log(transactions);
  };

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Balance transactions={transactions} />
              <Expenses transactions={transactions} />
              <ExpensesList
                transactions={transactions}
                deleteTransaction={deleteTransaction}
              />
            </>
          }
        />
        <Route
          path="/add"
          element={<AddExpense addTransaction={addTransaction} />}
        />
      </Routes>
    </>
  );
}

export default App;
