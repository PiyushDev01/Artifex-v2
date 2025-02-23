import  { useState } from "react";
import { useContext } from "react";
import { Dashcontext } from "../../../contex/DashContext";
import { updateStatusDesc } from '../../../Firebase_admin/update.js';
import { FiLoader } from "react-icons/fi";
import { FaLock } from "react-icons/fa";

function StatusDesc() {

const {setCurAdminOrder, curAdminOrder} = useContext(Dashcontext)
const [curStatusdesc, setCurStatusdesc] = useState(curAdminOrder.statusMessage);
const [updatingStatus, setUpdatingStatus] = useState("Save");

const handleStatusdesc = async(orderId, statusDesc ) => {
    setUpdatingStatus(<FiLoader />);
     await updateStatusDesc(orderId, statusDesc)
     setUpdatingStatus("Saved");
  }

  return (
    <>
    <div className=" relative w-full bg-white rounded-xl p-4 overflow-hidden shadow-md">
        <h1 className=" text-lg text-slate-500 font-semibold"> Status Description </h1>
        <textarea 
        onChange={(e) => {
            setCurStatusdesc(e.target.value)
        }
        }
        value={curStatusdesc}
        className="w-full p-2 mt-2 border-2 border-slate-300 rounded-xl shadow-md " placeholder="Enter Status Description" />
        <button  
        onClick={() => {
            handleStatusdesc(curAdminOrder.orderId, curStatusdesc)
            setCurAdminOrder({...curAdminOrder, statusMessage: curStatusdesc})
        }
        }
        className=" px-4 py-2 min-w-[6rem] flex items-center justify-center min-h-[2.5rem] bg-mypurple rounded-full text-white">
            {updatingStatus}
        </button>
        {
            curAdminOrder.payment === "PAID" || curAdminOrder.status === 'Rejected' ? null : <div className=" flex gap-2 top-0 left-0 text-slate-800 font-bold items-center bg-indigo-500/25 justify-center lock w-full h-full backdrop-blur-sm absolute ">
            Locked <FaLock className=" text-mypurple" />  </div>
        }
    </div>
    
    </>
  )
}

export default StatusDesc