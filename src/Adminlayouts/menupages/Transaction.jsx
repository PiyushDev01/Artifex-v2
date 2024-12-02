import React from 'react';
import PropTypes from 'prop-types';

// Dummy data for Transactions
const dummyTransactionData = [
  { paymentId: "pay_POmzEjYwOjR30v", orderId: "ORD173281505", paidBy: "Piyush Vishwakarma", amount: 200, date: "JAN 1, 2024" },
  { paymentId: "pay_RMfaNJHmUZHOf2", orderId: "ORD173281506", paidBy: "Jane Smith", amount: 150, date: "FEB 14, 2024" },
  { paymentId: "pay_RMfaNJHmUZHOf3", orderId: "ORD173281507", paidBy: "Mike Johnson", amount: 100, date: "MAR 3, 2024" },
  { paymentId: "pay_RMfaNJHmUZHOf4", orderId: "ORD173281508", paidBy: "Anna Williams", amount: 250, date: "APR 22, 2024" },
  { paymentId: "pay_RMfaNJHmUZHOf5", orderId: "ORD173281509", paidBy: "Sarah Connor", amount: 300, date: "MAY 30, 2024" },
  { paymentId: "pay_RMfaNJHmUZHOf6", orderId: "ORD173281510", paidBy: "Robert Brown", amount: 400, date: "JUN 18, 2024" },
  { paymentId: "pay_RMfaNJHmUZHOf7", orderId: "ORD173281511", paidBy: "Robert Brown", amount: 450, date: "JUL 5, 2024" },
  { paymentId: "pay_RMfaNJHmUZHOf7", orderId: "ORD173281511", paidBy: "Robert Brown", amount: 450, date: "JUL 5, 2024" },
  { paymentId: "pay_RMfaNJHmUZHOf7", orderId: "ORD173281511", paidBy: "Robert Brown", amount: 450, date: "JUL 5, 2024" },
  { paymentId: "pay_RMfaNJHmUZHOf7", orderId: "ORD173281511", paidBy: "Robert Brown", amount: 450, date: "JUL 5, 2024" },
];

export const totalrevenue = 0;
export const totalTransactions = 0;

// Row Component for Transactions
const TransactionRow = (props) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
  };

  return (
    <div
      onClick={() => {
        props.handleFunc(); // Handle click action
      }}
      className="flex cursor-pointer justify-between items-center rounded-lg border-b-[1px] hover:bg-slate-200 border-slate-200 py-4 mx-4 md:pl-6 px-2 text-slate-500 text-xl font-semibold"
    >
      <div className="flex items-center">
        <p className="hidden md:block w-20">{props.paymentId.substring(0, 6)}...</p>
        <button onClick={() => copyToClipboard(props.paymentId)} className="ml-2 text-sm text-blue-500">Copy</button>
      </div>
      <div className="flex items-center">
        <p className="text-sm md:text-lg min-w-32 md:font-bold">
        {props.orderId}
        </p>
      </div>
      <div className="flex items-center">
        <p className="hidden md:block min-w-40 text-lg">
        {props.paidBy.substring(0, 12)}...
        </p>
      </div>
      <p className="text-sm md:text-lg">₹{props.amount}</p>
      <p className="text-sm md:text-lg min-w-32 text-right">{props.date}</p>
    </div>
  );
};

TransactionRow.propTypes = {
  paymentId: PropTypes.string.isRequired,
  orderId: PropTypes.string.isRequired,
  paidBy: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  handleFunc: PropTypes.func.isRequired,
};

// Main List Component for Transactions
export const TransactionLists = ({ rowlimit }) => {
  const [loading, setLoading] = React.useState(false);

  const handleRowClick = () => {
    console.log('Transaction row clicked!');
  };

  

  return (
    <div className="maincontainer w-full flex flex-col items-center">
      <div
        id="container"
        className="z-10 w-[100%] h-[80%] bg-slate-50 pb-4 rounded-2xl md:rounded-[2rem] flex overflow-hidden flex-col"
      >
        {/* Table Header */}
        <div className="flex justify-between items-center text-indigo-400 border-b-[1px] border-slate-400 py-1 px-6 m-4 text-xl font-semibold">
          <p className="hidden md:block">Payment ID</p>
          <p>Order ID</p>
          <p className="hidden md:block">Paid By</p>
          <p className="">Amount</p>
          <p className="">Date</p>
        </div>

        {/* Rows or Loading Message */}
        <div className="flex flex-col overflow-y-auto h-fit max-h-[24rem]">
          {loading ? (
            <div className="flex items-center justify-center h-1/2">
              <p className="text-xl text-slate-500">Loading...</p>
            </div>
          ) : dummyTransactionData.length > 0 ? (
            dummyTransactionData.map((transaction) => (
              <TransactionRow
                key={transaction.paymentId}
                paymentId={transaction.paymentId}
                orderId={transaction.orderId}
                paidBy={transaction.paidBy}
                amount={transaction.amount}
                date={transaction.date}
                handleFunc={handleRowClick}
              />
            ))
          ) : (
            <p className="text-center text-xl text-slate-400">No Transactions Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

TransactionLists.propTypes = {
  rowlimit: PropTypes.number,
};

const Transaction = () => {
  return (
    <>
      <div className="w-full">
        <h1 className="text-2xl my-2 font-semibold text-slate-500">Transactions</h1>
        <TransactionLists/>
      </div>
    </>
  );
};

export default Transaction;
