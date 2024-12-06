import  { useState } from "react";
import { useContext } from "react";
import { Dashcontext } from "../../../contex/DashContext";
import { updateStatus } from '../../../Firebase_admin/update.js';
import { FiLoader } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import {sendStatusEmail} from '../../../../mailer/EmailSender.js';

function StatusUpdate() {


    const {setCurAdminOrder, curAdminOrder} = useContext(Dashcontext)
    const [selectedStatus, setSelectedStatus] = useState(curAdminOrder.status);
    const [updatingStatus, setUpdatingStatus] = useState();

    const status = [
        {name: 'Pending'},
        {name: 'Submitted'},
        {name: 'Approved'},
        {name: 'Sketching'},
        {name: 'Finished'},
        {name: 'Delivered'},
        {name: 'Rejected'},
        {name: 'Done'}

    ];  

    const handleStatus = async(orderId, status ) => {
        setUpdatingStatus(<FiLoader />);
         await updateStatus(orderId, status)
         if(status==='Approved' || status==='Sketching' || status==='Finished' || status==='Delivered' || status==='Rejected' || status==='Done'){
            await sendStatusEmail(curAdminOrder.email, curAdminOrder, status)
         }
         setUpdatingStatus();
      }

  return (
    <>

    <div className=" relative overflow-hidden w-full shadow-md gap-4 items-center justify-center text-xl flex rounded-xl bg-white p-4 h-full ">
       Current Status {updatingStatus}
        <select
            value={selectedStatus}
            onChange={(e) => {
                setSelectedStatus(e.target.value)
                handleStatus(curAdminOrder.orderId, e.target.value)
                setCurAdminOrder({...curAdminOrder, status: e.target.value})
            }}
            className="ml-4 p-2 border-2 text-xl font-semibold shadow-md  text-slate-700 rounded-xl border-slate-300"
        >
            {status.map((s, index) => (
                <option className=" bg-blue-100  rounded-xl " disabled={!curAdminOrder.payment} key={index} value={s.name}>
                    {s.name}
                </option>
            ))}
        </select>
        {
            !curAdminOrder.payment ? <div className=" flex gap-2 text-slate-800 font-bold items-center bg-indigo-500/25 justify-center lock w-full h-full backdrop-blur-sm absolute ">
             Locked <FaLock className=" text-mypurple" />
            </div> : null
        }
    </div>
    </>
  )
}

export default StatusUpdate