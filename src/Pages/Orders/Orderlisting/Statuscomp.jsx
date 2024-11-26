import { Status, formatDate } from "./OrderList";
import { useContext } from "react";
import Detailcontext from "../OrderformSection/DetailContext/Detailcontext";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Framer/fadein.js";


function Statuscomp(props) {
  const { currentOrder } = useContext(Detailcontext);
  let currentstatus;
    
    if(currentOrder.payment === "PAID" && currentOrder.status === "Approved"){
       currentstatus = "Sketching";
    }else{
       currentstatus = currentOrder.status;
    }
    const date = props.date;
    const StAtus = ["Payment", "Sketching", "Finished", "Delivered"];

    function OrderStatus(props) {
      return (
        <div className=" relative p-2 px-4">
          <div className=" w-4 h-4 -left-[0.53rem] top-4 flex items-center justify-center bg-white z-10 absolute ball">
            
            <div className={`absolute -z-10 ${ currentstatus===props.status ? 'flex' : 'hidden'} w-4 h-4 items-center justify-center animate-ping rounded-full bg-purple-200 ball`}></div>
    
            <div className={`w-2 h-2 ${ StAtus.indexOf(props.status)>= StAtus.indexOf(currentstatus) && currentstatus !== 'Done' ? "block": "hidden"} rounded-full  ${currentstatus=== props.status? "bg-purple-500": "bg-slate-400"} ball`}></div> 
    
           <h2 className= {` text-sm font-semibold rotate-12 text-purple-600 ${ StAtus.indexOf(props.status)< StAtus.indexOf(currentstatus) || currentstatus === 'Done' ? "block": "hidden"} `}>&#10004;</h2>
          
          </div>
    
          
          <h1 className=" text-xl font-medium text-slate-600">{props.status}</h1>
          <p className=" text-xs text-slate-500 font-medium " >{date} </p>
        </div>
      );
    }


  return (
    <>
      <motion.div 
      variants={fadeIn("", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className=" flex flex-col  md:mt-0 shadow-md bg-white p-2 md:p-6  md:w-1/3 rounded-xl ">
        <h1 className=" text-xl m-2 font-semibold text-slate-700">
          Current Status
        </h1>

        <div className="statusContainer border-l-[2px] border-slate-300 h-fit min-h-40 m-6 ">
          {StAtus.map((status, index) => (
            <OrderStatus key={index} status={status} />
          ))}
        </div>

        <div className="statusdescription flex flex-col p-2">
          <h1 className=" text-xl font-semibold text-slate-700 ">
            Status Description
          </h1>
          <p className=" text-sm md:text-base font-normal w-fit bg-gradient-to-tl from-indigo-200 to-purple-200 p-4 rounded-lg md:rounded-xl mt-2 text-slate-700">
          {currentOrder.statusMessage}
          </p>
        </div>
      </motion.div>
    </>
  );
}



export default Statuscomp;
