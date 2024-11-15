import "./orderlist.css";
import { Status, formatDate } from "./OrderList";
import { useContext } from "react";
import Detailcontext from "../OrderformSection/DetailContext/Detailcontext";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router";
import paymenthandler from "../../../RazorpayPG/paymenthandler";

const StAtus = [ "Payment", "Sketching", "Finished", "Delivered"];

function OrderStatus(props){
  return (
    <div className=" relative p-2 px-4" >
                        <div className=" w-2 h-2 rounded-full -left-[0.25rem] top-5 bg-green-500 z-10 absolute ball"></div>
                        {/* <div className=" w-4 h-4 rounded-full -left-[0.5rem] top-4 animate-pulse bg-green-200 absolute ball"></div> */}
                        <h1 className=" text-xl font-semibold text-slate-700">{props.status}</h1>
                        {/* <p className=" text-sm font-semibold text-slate-500" >Fri Oct 18, 03:02am</p> */}
                    </div>
  )
}


function OrderTrack() {

  const { currentOrder,setCurrentOrder } = useContext(Detailcontext); 
  const shipping = currentOrder.shipping;                                                                               
  const navigate = useNavigate();
  
    
    const handleback = () => {  
      navigate("/Your-Orders")
      setCurrentOrder(null);
    }
    const curstatus = currentOrder.payment || currentOrder.status ;

  return (
    <>
    
      <div
        className="relative h-[100vh] md:h-fit   flex flex-col items-center bg-[#2f2f2f]  pt-32   "
        id="background"
      >
        <div
          id="backBox"
          className="fixed md:absolute top-0 w-full h-1/2 md:h-1/2 rounded-b-[2rem] bg-gradient-to-r z-10  from-[#6200EA] to-[#8E2DE2]"
        ></div>
  
  <div className=" md:flex  w-[90%] items-center gap-6 hidden  md:max-w-[70rem] md:w-[75%]   h-fit z-10">
       <button onClick={
        handleback
      } className=" border-slate-300 border-[2px] hover:bg-purple-600 transition-all bg-zinc-600 text-white py-2 px-4 rounded-full my-4" ><ArrowBackIcon />
      </button>
      <h1 className=" text-2xl text-slate-50" >Order History</h1>
       </div>

        <div
          id="container"
          className="  z-10 w-[90%]  md:max-w-[80rem] md:w-[80%]  h-[90%] mt-2  bg-slate-50 rounded-2xl md:rounded-[2rem] flex overflow-hidden flex-col"
        >
          <div className="flex justify-between items-center border-b-[1px] border-slate-400 h-10 py-1 md:px-6 text-slate-500 m-4 text-xl font-semibold ">
            <p className="hidden md:block">Order Details</p>
            <h1 className=" font-semibold text-slate-500  "> {formatDate(currentOrder.date)} </h1>
            <button 
            onClick={handleback}
            className=" text-base  bg-purple-500 font-normal md:hidden text-white px-2 py-1 rounded-full" ><ArrowBackIcon /></button>
          </div>
          <div className=" flex md:flex-row flex-col md:overflow-hidden overflow-scroll h-full m-2">
            <div className="  h-full md:w-1/3">
              <div className="refimg w-full flex-col flex items-center justify-center ">
                <h1 className=" font-bold text-xl text-slate-700 mb-1  ">
                  {currentOrder.id}
                </h1>
              
                
                <div className=" relative w-full flex justify-center  aspect-[1 / 1.414] "  >
                <img
                  className=" w-[60%] shadow-lg rounded-xl"
                  src={currentOrder.downloadURL}
                  alt="refimg"
                /> 
                <h1 className=" font-bold text-2xl absolute bottom-0 right-[5rem] md:right-[6rem] text-purple-300  bg-slate-600 p-1 rounded-t-lg " >

                  {currentOrder.size}
                </h1>
                </div>
                
                <h1 className=" font-semibold text-xl text-zinc-800  ">
                  {currentOrder.person}
                </h1>
                <h1 className=" font-semibold text-lg text-zinc-500  ">
                  {currentOrder.orientation}
                </h1>
              </div>
            </div>
            <div className=" px-2 bg-slate-50 h-fit md:w-1/3">
              <h1 className=" font-semibold text-2xl text-indigo-700 mb-1  ">
                {currentOrder.name}
              </h1>
              <h1 className=" font-semibold text-base gap-2 text-slate-700 mb-1 flex items-center ">
                <svg
                  width="13"
                  height="15"
                  viewBox="0 0 13 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.50019 6.7806C3.49474 8.91286 5.09706 10.6533 7.05163 11.7458L8.57108 10.0882C8.75756 9.8848 9.03382 9.81699 9.27555 9.9074C10.0491 10.1862 10.8848 10.3369 11.7412 10.3369C12.1211 10.3369 12.4319 10.6759 12.4319 11.0903V13.7198C12.4319 14.1342 12.1211 14.4733 11.7412 14.4733C5.25592 14.4733 0 8.73956 0 1.6647C0 1.25031 0.310797 0.911255 0.690659 0.911255H3.10797C3.48783 0.911255 3.79863 1.25031 3.79863 1.6647C3.79863 2.60651 3.93676 3.51065 4.1923 4.35451C4.26827 4.61821 4.21302 4.91206 4.01964 5.12302L2.50019 6.7806Z"
                    fill="#605F5F"
                  />
                </svg>
                {currentOrder.phone}
              </h1>
              <h1 className=" w-[80%] font-semibold text-base gap-2 text-slate-500 mb-1 flex items-center ">
               {currentOrder.flat}, {currentOrder.street}, {currentOrder.district}, {currentOrder.state}
              </h1>
              <h1 className=" w-[80%] font-semibold text-lg gap-2 mb-6 text-slate-700 md:mb-1 flex items-center ">
              Pincode: {currentOrder.pin}
              </h1>
              <h1 className=" w-[80%] font-semibold text-xl  flex gap-4 my-2 text-purple-700  ">
              Payment <Status status={curstatus} />
              </h1>
              

<div className="payment w-full h-fit min-h-[8rem] mb-1 bg-zinc-200 rounded-2xl shadow-sm shadow-slate-600 ">
        <div className="pricing  h-fit  ">
        <div className="price flex  p-2 mx-2 pb-0 justify-between  ">
            <h1 className=" text-lg font-semibold text-slate-800" >Total Amount</h1>
            <h1 className=" text-lg font-semibold text-slate-800" >₹ {currentOrder.price}</h1>
            
        </div>
        <div className="price flex  p-2 mx-2 pt-0  justify-between border-b-[1px] border-slate-500 ">
            <h1 className=" text-lg font-semibold text-slate-800" >Shipping Charge</h1>
            { shipping===null? <h1 className=" text-lg font-semibold text-slate-500   " > Estimating... </h1> :
            
            <h1 className=" text-lg font-semibold text-slate-800   " >₹ {currentOrder.shipping || null} </h1>
            }
     </div>
     <div className="price flex  px-2 p-2 mx-2 pb-0 justify-between  ">
            <h1 className=" text-lg font-semibold text-slate-800" >Grand Total</h1>
             { shipping === null ? <h1 className=" text-lg font-semibold text-slate-500" >Not Calculated</h1> :
             
            <h1 className=" text-lg font-semibold text-slate-800" >₹ {currentOrder.price+currentOrder.shipping}</h1>
             }
            
        </div>
        </div>

        <div className="paymentstatus flex flex-col justify-between items-center p-4 mx-2  ">
    { curstatus === "Approved" ? <>
    <div className=" flex w-full gap-2 items-center justify-center ">
    <p className=" text-slate-500" >Secure payment with</p><img  className=" w-[6rem] " src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/120px-Razorpay_logo.svg.png?20171127075036" alt="" />
    </div>
  <div className=" flex w-full justify-center items-center gap-4 mt-4 ">
  <button className=" bg-slate-100 text-zinc-500 py-2 px-4 rounded-lg shadow-md hover:border-slate-500 border-slate-100 border-[1px] transition-all text-sm " >
    Cancel
  </button>

    <button
    onClick={(e) => paymenthandler(e,currentOrder,currentOrder.price+currentOrder.shipping)}
    className="bg-blue-700 text-white py-2 px-4 rounded-lg shadow-blue-400 shadow-lg border-blue-700 border-[1px] hover:bg-blue-500 transition-all text-sm">
        Pay Now
    </button>
  </div>

    </> : curstatus === "PAID" ? 

    <>
    <div className="price flex w-full justify-between  ">
        <h1 className=" text-lg font-semibold text-slate-800" >Payment Method</h1>
        <h1 className=" text-lg font-semibold text-slate-800" >{ currentOrder.paymethod || "UPI"}</h1>
        
    </div>
    <div className="price flex w-full justify-between  ">
        <h1 className=" text-lg font-semibold text-slate-800" >Payment ID</h1>
        <h1 className=" text-lg font-semibold text-slate-800" >{currentOrder.paymentId}</h1>
        
    </div>
    <div className="price flex w-full justify-between  ">
        <h1 className=" text-lg font-semibold text-slate-800" >Paid On</h1>
        <h1 className=" text-lg font-semibold text-slate-800" >{currentOrder.paymentDate}</h1>
        
    </div>
</>
    
    :
    <h1 className=" text-slate-400 text-center" >*We estimate the total payment amount upon receiving the Artist&apos;s approval.</h1>
    
    }
        
        </div>
        
</div>

            </div>
            <div className=" flex flex-col mt-8 md:mt-0 md:border-l-2 px-2 h-full md:w-1/3">
                <h1 className=" text-xl font-semibold text-slate-500" >Current Status</h1>

                <div className="statusContainer border-l-[2px] border-slate-300 h-fit min-h-40 m-6 ">
                    
            {
                StAtus.map((status, index) => (
                    <OrderStatus key={index} status={status} />
                ))
            }
                    
                </div>

                <div className="statusdescription p-2">
                    <h1 className=" text-base font-semibold text-slate-500 underline " >Status Description</h1>
                    <p className=" text-base font-normal text-slate-500" >{currentOrder.statusMessage
                    }</p>
                </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderTrack;
