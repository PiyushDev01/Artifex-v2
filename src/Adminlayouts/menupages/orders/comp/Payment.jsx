
import { Status } from '../../../../Pages/Orders/Orderlisting/OrderList.jsx';
import { motion } from "framer-motion";
import { fadeIn } from "../../../../Framer/fadein.js";
import { TbCopy } from "react-icons/tb";
import toast, { Toaster } from 'react-hot-toast';
import { FiLoader } from "react-icons/fi";
import { updateShippingCharge, updateStatus } from '../../../Firebase_admin/update.js';
import { useContext } from 'react';
import { Dashcontext } from '../../../contex/DashContext.jsx';
import { useState } from 'react';
import {sendStatusEmail} from '../../../../mailer/EmailSender.js';

function Payment(props) {

  const {setCurAdminOrder, curAdminOrder} = useContext(Dashcontext)

  const [updatingShipping, setUpdatingShipping] = useState("Update");
  const [updatingStatus, setUpdatingStatus] = useState("Accept");
  const [shippingCharge, setShippingCharge] = useState(null);

  const shipping = props.shipping;
  const curstatus = props.payment || props.status;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success(text+" Copied to clipboard")
  };

  const handleShipping = async(orderId, shippingCharge ) => {
    setUpdatingShipping(<FiLoader />);
     await updateShippingCharge(orderId, shippingCharge)
     
    setUpdatingShipping("Update");
  }

  const handleStatus = async(orderId, status ) => {
    setUpdatingStatus(<FiLoader />);
     await updateStatus(orderId, status)
     await sendStatusEmail(curAdminOrder.email, curAdminOrder, "Approved")
     setUpdatingStatus("Accepted");
  }
    


  return (
    <>
      <motion.div
        variants={fadeIn("", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="payment  min-h-[8rem] p-2 bg-white  rounded-xl shadow-md "
      >
        <div className=" w-full justify-between flex  items-center">
          <h1 className=" text-base md:text-lg font-bold m-2 md:font-semibold text-slate-700">
            Payment Details 
          </h1>
          <Status status={!props.payment ? "UNPAID" : props.payment } />
          <Status status={props.status} />
        </div>

        <div className="pricing  h-fit  ">
          <div className="price flex  p-2 mx-2 pb-0 justify-between  ">
            <h1 className=" text-lg font-semibold text-slate-600">
              Total Amount
            </h1>
            <h1 className=" text-lg font-semibold text-slate-800">
              ₹ {props.price}
            </h1>
          </div>
          <div className="price flex  p-2 mx-2 pt-0  justify-between border-b-[1px] border-slate-300 ">
            <h1 className=" text-lg font-semibold text-slate-600">
              Shipping Charge
            </h1>
            {shipping === null ? (
              <h1 className=" text-lg font-semibold text-slate-500 ">
                {" "}
                Estimating...{" "}
              </h1>
            ) : (
              <h1 className=" text-lg font-semibold text-slate-800   ">
                ₹ {props.shipping}{" "}
              </h1>
            )}
          </div>
          <div className="price flex  px-2 p-2 mx-2 pb-0 justify-between  ">
            <h1 className=" text-lg font-semibold text-slate-600">
              Grand Total
            </h1>
            {shipping === null ? (
              <h1 className=" text-lg font-semibold text-slate-500">
                Not Calculated
              </h1>
            ) : (
              <h1 className=" text-lg font-semibold text-slate-800">
                ₹ {props.price + props.shipping}
              </h1>
            )}
          </div>
        </div>

        <div className="paymentstatus flex flex-col justify-between items-center  m-4  ">
          { curstatus === "PAID" ? (
            <>
              <div className="price flex w-full justify-between items-center ">
                <h1 className=" md:text-lg text-sm font-semibold text-slate-600">
                  Payment ID
                </h1>
                <h1 className=" flex items-center gap-2 text-sm md:text-lg  font-semibold text-slate-800">
                  {props.paymentId}
                  <TbCopy onClick={()=>{
            copyToClipboard(props.paymentId)
          }}  className=" cursor-pointer text-lg  text-slate-500" />
                  
                </h1>
              </div>
              <div className="price flex w-full justify-between items-center  ">
                <h1 className=" md:text-lg text-sm font-semibold text-slate-600">
                  Paid On
                </h1>
                <h1 className=" text-sm md:text-lg font-semibold text-slate-800">
                  {props.paymentDate}
                </h1>
              </div>
            </>
          ) : (
            <>
            <div className=' flex w-full gap-2 items-center justify-between ' >
              <label className=' font-semibold text-md ' htmlFor="">  Shipping Charge </label>
             <input onChange={(e)=>{
                setShippingCharge(Number(e.target.value))
             }} type="number" placeholder='₹' className=' w-20 rounded-xl text-center border-slate-300 border-2 px-2 p-1 text-xl ' />
             <button 
             onClick={()=>{
                handleShipping(props.orderId, shippingCharge)
                setCurAdminOrder({...curAdminOrder, shipping: shippingCharge})
             }}
             className=' p-2 px-4 min-w-24 flex justify-center items-center min-h-10 bg-blue-500 text-white rounded-xl' >{updatingShipping}</button>
            </div>

            <div className=' flex w-full gap-2 mt-4 items-center justify-between ' >
             
           {
            curAdminOrder.status === "Rejected" ? (
              <>
              <h1 className=' text-red-500' >This order has been Rejected</h1>
              </>) : (
                curAdminOrder.status === "Submitted" ? (
                  <>
                   <button 
             onClick={()=>{
                handleStatus(props.orderId, "Rejected")
                setCurAdminOrder({...curAdminOrder, status: "Rejected"})
                toast.error("Order Rejected")
             }}
             className=' p-2 px-4 w-full flex justify-center items-center min-h-10 bg-slate-200 text-slate-800 rounded-xl' >Decline</button>
            <button 
             onClick={()=>{
             if(props.shipping === null){
               toast.error("Please enter shipping charge")
              }
              else{
                handleStatus(props.orderId, "Approved")
                setCurAdminOrder({...curAdminOrder, status: "Approved"})
                toast.success("Order Approved")
              }
             }}
             className=' p-2 px-4 w-full transition-all flex justify-center items-center min-h-10 bg-mypurple text-white rounded-xl' >{updatingStatus }</button>
                  </>
                ) : (<>
                  <button
                  onClick={()=>{
                    handleStatus(props.orderId, "Rejected")
                    setCurAdminOrder({...curAdminOrder, status: "Rejected"})
                    toast.error("Order Rejected")
                  }}
                  className=' p-2 px-4 w-full flex justify-center items-center min-h-10 bg-slate-200 text-slate-800 rounded-xl' >Cancel</button>
                </>
                )
            )
           }
            </div>
            </>
          )}
        </div>
      </motion.div>
      <Toaster />
    </>
  );
}

export default Payment;
