import { useEffect, useContext, useState } from "react";
import "./orderlist.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Framer/fadein.js";
import { getOrders } from "../../../Firebase/CURDfunc/read.js";
import Lottie  from 'lottie-react';
import loader from '../../../assets/loader.json'
import UserContext from "../../../Context/UserContex.js";
import Detailcontext from "../OrderformSection/DetailContext/Detailcontext.js";




const OrderList = (props) => {

  

  return (
    <div 
    onClick={() => {
      props.handlefunc(); 
  }} className="flex cursor-pointer justify-between items-center rounded-lg border-b-[1px] hover:bg-slate-200 border-slate-200 h-15 py-4 mx-4 md:pl-6 px-2 text-slate-500  text-xl font-semibold ">
      <p className="hidden md:block w-16">{props.id}</p>
      <p className=" text-sm md:text-lg md:font-bold " > {props.date} </p>
      <p className="hidden md:block">{props.price} </p>
      <p className="flex w-32 justify-center"><Status status={props.status} /> </p>
      
      {/* <button 
      
      className=" bg-indigo-400 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-indigo-600 transition-all text-sm">
        Details
      </button> */}
    </div>
  );
};

export const Status = (props) => {
const statusClass =
    props.status === "Delivered" || props.status === "Finished"|| props.status === "PAID"
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
    props.status === "Delivered" || props.status === "Finished"|| props.status === "PAID"
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
      className={`${statusClass} py-2 mr-4 px-4 cursor-default shadow-md md:w-fit  md:max-w-[8rem] rounded-full text-sm flex items-center`}
    >
      <div className={`w-2 h-2 ${dotClass} rounded-full hidden md:block mr-2`}></div>
      {props.status}
    </button>
  );
};

 export const formatDate = (isoString) => {
  const date = new Date(isoString);

  // Options for the date format
  const options = { 
    month: 'short', // Get the short month (e.g., NOV)
    day: 'numeric', // Get the numeric day (e.g., 23)
    year: 'numeric' // Get the full year (e.g., 2024)
  };

  // Use the built-in `toLocaleDateString` method to format the date
  return date.toLocaleDateString('en-US', options).toUpperCase(); // Convert to uppercase for month
};



function OrderPrice() {
 
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const {user} = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  // const [currentOrder, setCurrentOrder] = useState(null);
  const {setCurrentOrder, currentOrder } = useContext(Detailcontext);

  const handlecurrentOrder = (idx) => {
    navigate("/Your-Orders/Details");
    // console.log("Current Order: ", currentOrder);
    setCurrentOrder(orders[idx]);
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders(user.uid);
        
        // Sort orders by date in descending order
        const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        setOrders(sortedData);
        // console.log("Orders: ", sortedData);
        setLoading(false);
      } catch (e) {
        console.log("This error occurred while fetching order details: " + e);
        setLoading(false);
      }
    };
  
    fetchOrders();
  }, [user.uid]);

  

  return (
    
    <>
    <div
      className="relative h-[100vh]  flex flex-col items-center bg-gradient-to-b from-[#9647ff] to-[#694dff]  pt-32   "
      id="background"
    >
      {/* <div
        id="backBox"
        className="fixed md:absolute top-0 w-full h-1/2 md:h-1/2 rounded-b-[2rem] bg-gradient-to-r z-[1rem]  from-[#6200EA] to-[#8E2DE2]"
      ></div> */}
       <div className=" md:flex  w-[90%] items-center gap-6 hidden  md:max-w-[70rem] md:w-[75%]   h-fit z-10">
       <button onClick={
        ()=>{
          navigate("/Order")
        }
      } className=" hover:bg-slate-300 transition-all bg-[#c5b7ff] text-slate-600 py-2 px-4 rounded-full my-4" ><ArrowBackIcon />
      </button>
      <h1 className=" text-2xl text-[#c5b7ff] " >Order History</h1>
       </div>
      <div
        id="container"
        className=" z-10 w-[90%]  md:max-w-[70rem] md:w-[75%]  h-[80%] bg-slate-50 to-zinc-800 rounded-2xl md:rounded-[2rem] flex overflow-hidden flex-col"
      >
        <div className="flex justify-between items-center border-b-[1px] border-slate-400 h-10 py-1 px-6 text-slate-500 m-4 text-xl font-semibold ">
          <p className="hidden md:block">Order ID</p>
          <p>Date</p>
          <p className="hidden md:block">Price</p>
          <p className=" mr-6">Status</p>
          {/* <p>Details</p> */}
        </div>
        <motion.div
         variants={fadeIn("", 0.1)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.2 }}


        className="flex flex-col overflow-y-auto">
       { 
          loading ? (
            <div className="flex items-center justify-center h-1/2 w-full">
               <Lottie animationData={loader} style={{width: '45px', height: '30px'}} className=" scale-[300%]" />
            </div>
          ) : (
            orders.length > 0 ? orders.map((order, index) => (
              <OrderList
                key={order.id}
                id={order.id}
                date={formatDate(order.date)}
                price={"₹"+order.price}
                status={order.status}
                handlefunc={() => handlecurrentOrder(index)}

              />
            )) : <p className="text-center text-xl text-slate-400">No Orders Found</p>)
          }
        </motion.div>
      </div>
      <button onClick={
        ()=>{
          navigate("/Order")
        }
      } className=" md:hidden hover:bg-slate-300 transition-all bg-[#c5b7ff] text-slate-600 py-2 px-4 rounded-full m-4" ><ArrowBackIcon /></button>
    </div>
  </>
  );
}

export default OrderPrice;
