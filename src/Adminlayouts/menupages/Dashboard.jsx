import { useContext, useEffect, useState } from "react";
import { Dashcontext } from "../contex/DashContext";
import { OrderLists } from "./orders/Orders.jsx";

function Dashboardcard({ title, value, opentab, isNew, onClick }) {
  const { sidebar, setSidebar } = useContext(Dashcontext);

  return (
    <div
      onClick={() => {
        setSidebar({ ...sidebar, curoption: opentab });
        onClick(title, value); // Reset "new" sta-tus for this card
      }}
      className="flex relative cursor-pointer flex-col items-center hover:bg-purple-800 transition-all rounded-xl justify-center w-full p-4 bg-[#8E2DE2] shadow-md"
    >
      <h1 className="text-2xl font-semibold text-slate-200">{value}</h1>
      <p className="text-sm text-slate-300">{title}</p>
      <div
        className={`${
          isNew ? "block" : "hidden"
        } w-4 rounded-full h-4 bg-indigo-500 animate-pulse absolute top-0 right-0 translate-x-[10%] -translate-y-[10%]`}
      ></div>
    </div>
  );
}

const checkIncrease = (title, currentValue) => {
  const storedValue = localStorage.getItem(title);
  const storedNumber = parseInt(storedValue, 10);
  const currentNumber = parseInt(currentValue, 10);

  if (isNaN(storedNumber)) {
    // If no previous value exists, treat it as no increase
    return false;
  }

  return currentNumber > storedNumber;
};

function Dashboard() {
  const { totalorder, totaluser, totalpays, totalrevenue } = useContext(Dashcontext);
  const [newStatus, setNewStatus] = useState({});

  // Initialize new status from localStorage or default values
  useEffect(() => {
    const initialStatus = {
      "Total Revenue 🤑": checkIncrease("Total Revenue 🤑", totalrevenue),
      "Total Orders 🛒": checkIncrease("Total Orders 🛒", totalorder),
      "Total Users 😉": checkIncrease("Total Users 😉", totaluser),
      "Total Transaction 💲": checkIncrease("Total Transaction 💲", totalpays),
    };
    setNewStatus(initialStatus);
  }, [totalorder, totaluser, totalpays, totalrevenue]);

  const handleCardClick = (title, value) => {
    // Update localStorage for the clicked card
    localStorage.setItem(title, value);

    // Reset "new" status for the clicked card
    setNewStatus((prevStatus) => ({
      ...prevStatus,
      [title]: false,
    }));
  };

  const dashDetails = [
    {
      title: "Total Revenue 🤑",
      value: "₹" + totalrevenue,
      open: "Dashboard",
      isNew: newStatus["Total Revenue 🤑"],
    },
    {
      title: "Total Orders 🛒",
      value: totalorder,
      open: "Orders",
      isNew: newStatus["Total Orders 🛒"],
    },
    {
      title: "Total Users 😉",
      value: totaluser,
      open: "Users",
      isNew: newStatus["Total Users 😉"],
    },
    {
      title: "Total Transaction 💲",
      value: totalpays,
      open: "Transactions",
      isNew: newStatus["Total Transaction 💲"],
    },
  ];

  return (
    <div className="maincontainer w-full flex flex-col items-center">
      <div className="w-full my-4">
        <h1 className="text-2xl font-semibold text-slate-500">Dashboard</h1>
        <div className="cardcontainer flex gap-2 my-2">
          {dashDetails.map((item, index) => (
            <Dashboardcard
              key={index}
              title={item.title}
              value={item.value}
              opentab={item.open}
              isNew={item.isNew}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-2xl my-2 font-semibold text-slate-500">Recent Orders</h1>
        <OrderLists rowlimit={true} />
      </div>
    </div>
  );
}

export default Dashboard;
