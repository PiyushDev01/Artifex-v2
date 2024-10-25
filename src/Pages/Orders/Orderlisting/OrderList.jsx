import React from "react";
import "./orderlist.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Framer/fadein.js";

const orders = [
  {
    id: "ORD123457",
    date: "DEC 13, 2021",
    price: "₹ 1500",
    status: "Pending",
  },
  {
    id: "ORD123458",
    date: "DEC 14, 2021",
    price: "₹ 2000",
    status: "Shipped",
  },
  {
    id: "ORD123459",
    date: "DEC 15, 2021",
    price: "₹ 2500",
    status: "Packing",
  },
  {
    id: "ORD123460",
    date: "DEC 16, 2021",
    price: "₹ 3000",
    status: "Approved",
  },
  {
    id: "ORD123461",
    date: "DEC 17, 2021",
    price: "₹ 3500",
    status: "Rejected",
  },
  {
    id: "ORD123462",
    date: "DEC 18, 2021",
    price: "₹ 4000",
    status: "Sketching",
  },
  {
    id: "ORD123463",
    date: "DEC 19, 2021",
    price: "₹ 4500",
    status: "Submitted",
  },
  {
    id: "ORD123464",
    date: "DEC 20, 2021",
    price: "₹ 5000",
    status: "Finished",
  },
  {
    id: "ORD123465",
    date: "DEC 21, 2021",
    price: "₹ 5500",
    status: "Delivered",
  },
];

const OrderList = (props) => {
  return (
    <div className="flex justify-between items-center border-b-[1px] hover:bg-slate-200 border-slate-400 h-15 py-4 mx-4 md:pl-6 px-2 text-slate-500  text-xl font-semibold ">
      <p className="hidden md:block w-16">{props.id}</p>
      <p className=" text-sm md:text-lg md:font-bold" > {props.date} </p>
      <p className="hidden md:block">{props.price} </p>
      <Status status={props.status} />
      <button className=" bg-indigo-400 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-indigo-600 transition-all text-sm">
        Details
      </button>
    </div>
  );
};

const Status = (props) => {
const statusClass =
    props.status === "Delivered" || props.status === "Finished"
        ? "bg-[#B6FFB4] text-[#04BE00]"
        : props.status === "Submitted"
        ? "bg-[#FFE6B8] text-[#BF7C00]"
        : props.status === "Rejected"
        ? "bg-[#FFBFB4] text-[#BE5200]"
        : props.status === "Sketching"
        ? "bg-[#DFBAFF] text-[#8E2DE2] animate-pulse"
        : props.status === "Approved"
        ? "bg-[#CBEAFF] text-[#2283C6]"
        : props.status === "Shipped"
        ? "bg-[#B4D6FF] text-[#0052BE]"
        : props.status === "Pending"
        ? "bg-[#FFD6B4] text-[#BF5B00]"
        : "bg-slate-300 text-slack-400";

  const dotClass =
    props.status === "Delivered" || props.status === "Finished"
      ? "bg-[#04BE00]"
      : props.status === "Submitted"
      ? "bg-[#BF7C00]"
      : props.status === "Rejected"
      ? "bg-[#BE5200]"
      : props.status === "Sketching"
      ? "bg-[#8E2DE2]"
      : props.status === "Approved"
      ? "bg-[#2283C6]"
      : props.status === "Shipped"
      ? "bg-[#0052BE]"
      : props.status === "Pending"
      ? "bg-[#BF5B00]"
      : "bg-slate-500";

  return (
    <button
      className={` ${statusClass} py-2 mr-4 px-4  w-[6rem]  md:w-[8rem] rounded-full text-sm flex items-center`}
    >
      <div className={`w-2 h-2 ${dotClass} rounded-full hidden md:block mr-2`}></div>
      {props.status}
    </button>
  );
};

function OrderPrice() {
 
  const navigate = useNavigate();

  return (
    <>
      <div
        className="relative h-[100vh]  flex flex-col items-center bg-[#2f2f2f]  pt-32   "
        id="background"
      >
        <div
          id="backBox"
          className="fixed md:absolute top-0 w-full h-1/2 md:h-1/2 rounded-b-[2rem] bg-gradient-to-r z-[1rem]  from-[#6200EA] to-[#8E2DE2]"
        ></div>

        <div
          id="container"
          className=" z-10 w-[90%]  md:max-w-[70rem] md:w-[75%]  h-[80%] mt-10 shadow-inner    bg-slate-50 rounded-2xl md:rounded-[2rem] flex overflow-hidden flex-col"
        >
          <div className="flex justify-between items-center border-b-[1px] border-slate-400 h-10 py-1 px-6 text-slate-500 m-4 text-xl font-semibold ">
            <p className="hidden md:block">Order ID</p>
            <p>Date</p>
            <p className="hidden md:block">Price</p>
            <p>Status</p>
            <p>Details</p>
          </div>
          <motion.div
           variants={fadeIn("", 0.1)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.2 }}
 

          className="flex flex-col overflow-y-auto">
            {orders.map((order) => {
              return (
                <OrderList
                  id={order.id}
                  date={order.date}
                  price={order.price}
                  status={order.status}
                  key={order.id}
                />
              );
            })}
          </motion.div>
        </div>
        <button onClick={
          ()=>{
            navigate("/Order")
          }
        } className=" hover:bg-purple-600 transition-all bg-mypurple text-white py-2 px-4 rounded-full m-4" ><ArrowBackIcon /></button>
      </div>
    </>
  );
}

export default OrderPrice;
