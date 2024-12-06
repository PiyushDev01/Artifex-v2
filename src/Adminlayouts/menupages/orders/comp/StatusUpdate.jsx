import  { useState } from "react";
import { useContext } from "react";
import { Dashcontext } from "../../../contex/DashContext";
import { updateStatus, updateStatusDesc } from '../../../Firebase_admin/update.js';
import { FiLoader } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import {sendStatusEmail} from '../../../../mailer/EmailSender.js';


const msg = {
    Approved: "We’re excited to let you know that your order has been approved by the artist! To proceed with the next steps, please complete the payment at your earliest convenience. If you have any questions, feel free to reach out.",
    PAID: "Thank you for completing the payment! We’ve received your transaction and will begin processing your order shortly. Feel free to contact us if you have any questions.",
    Sketching: "Great news! Your order is now in the sketching phase. Our artist is working on creating your custom piece. We’ll notify you once it’s ready for review.",
    Finished: "Your artwork is complete! Please review the final piece and let us know if you have any feedback or approval for delivery.",
    Delivered: "Your order has been shipped and is on its way to you! You can track the shipment using the tracking number provided. Thank you for choosing us!",
    Rejected: "We regret to inform you that your order could not be approved by the artist. Please contact us if you need further clarification or wish to explore alternative options.",
    Done: "Thank you for confirming! Your order has been successfully completed. We hope you’re delighted with your custom piece. Feel free to reach out if you need assistance in the future.",
    Pending: "Your order is currently under review. We’ll notify you once the status is updated. Thank you for your patience!"
};


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
         if(status==='Approved' || status==='Sketching' || status==='Finished' || status==='Delivered' || status==='Rejected' || status==='Done' || status==='Pending'){
            await sendStatusEmail(curAdminOrder.email, curAdminOrder, status, curAdminOrder.orderId)
            await updateStatusDesc(curAdminOrder.orderId ,msg[status]) 
            
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