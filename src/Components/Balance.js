export default function Balance({ transactions }) {
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <div className="minus">
        <h3>Your Wallet value</h3>
        <h1 className={total < 0 ? "minus" : "plus"}>${total}</h1>
        <div>
          {total < 0 && (
            <h3 className="money minus">
              Your expenses have exceeded your wallet value!
            </h3>
          )}
        </div>
      </div>
    </>
  );
}
