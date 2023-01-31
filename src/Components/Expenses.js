export default function Expenses({ transactions, deleteTransaction }) {
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <div className="minus">
      <div>
        <h3>Expense</h3>
        <h3 className="money minus">${expense}</h3>
      </div>
    </div>
  );
}
