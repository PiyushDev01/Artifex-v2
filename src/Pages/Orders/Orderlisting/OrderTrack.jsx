import "./orderlist.css";
import { useContext, useState, useEffect } from "react";
import Detailcontext from "../OrderformSection/DetailContext/Detailcontext";
import UserContext from "../../../Context/UserContex";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";
import paymenthandler from "../../../RazorpayPG/paymenthandler";
import { paymentUpdate } from "../../../Firebase/CURDfunc/create.js";
import paymentanimation from "../../../assets/paymentgreen.json";
import Lottie from "lottie-react";
import OrderDetails from "./OrderDetails";
import PersonalDetail from "./PersonalDetail";
import Payment from "./Payment";
import Status from "./Statuscomp.jsx";

// TODO: add flip image for refrence pic and sketched pic
// TODO ADD STATUS DATES IN ORDER TRACKING PAGE



function OrderTrack() {
  const {  setCurrentOrder, currentOrder } = useContext(Detailcontext);
  const { user } = useContext(UserContext);
  const [paymentpopup, setPaymentpopup] = useState(false);

  const navigate = useNavigate();

  const handleback = () => {
    navigate("/Your-Orders");
    setCurrentOrder(null);
  };

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);





  const handlePayment = async(e) => {
    await paymenthandler(
      e,
      setPaymentpopup,
      currentOrder,
      currentOrder.price + currentOrder.shipping,
      paymentUpdate,
      user.uid,
      setCurrentOrder
    );
  };

  return (
    <>
      <div
        className={` ${
          paymentpopup ? "flex" : "hidden"
        } popupcontainer fixed top-0 left-0 w-full items-center justify-center h-full bg-black bg-opacity-50 z-20`}
      >
        <div className="popup max-w-[30rem] w-[90%] md:w-[80%] p-4 md:h-[80%] bg-slate-50 flex items-center justify-center flex-col rounded-2xl ">
          <Lottie
            animationData={paymentanimation}
            className=" scale-150"
            loop={true}
            style={{ width: 200, height: 200 }} // Customize size
          />
          <h1 className="text-2xl text-center font-bold  text-[#454545] ">
            Payment Successful
          </h1>
          <h1 className="text-2xl text-center font-bold  text-[#454545] ">
            ₹ {currentOrder.price + currentOrder.shipping}
          </h1>
          <div className="paymentdtl text-sm md:text-lg">
            <h1 className=" text-center font-semibold  text-[#454545] ">
              Payment ID: {currentOrder.paymentId}
            </h1>
            <h1 className="text-center font-semibold  text-[#454545] ">
              Paid on: {currentOrder.paymentDate}
            </h1>
          </div>

          <div className="flex my-2 flex-col-reverse w-[60%]">
            <button
              onClick={() => {
                navigate("/");
              }}
              className=" bg-zinc-300  text-slate-800 min-w-20 py-2 px-4 rounded-lg m-2 "
            >
              Back to Home
            </button>
            <button
              onClick={() => {
                setPaymentpopup(false);
              }}
              className=" bg-green-500  min-w-20 py-2 px-4 text-white rounded-lg m-2 shadow-lg"
            >
              Got it
            </button>
          </div>
        </div>
      </div>

      <div
        className=" md:min-h-[100vh] h-fit pb-10   flex flex-col items-center  bg-gradient-to-t from-[#9647ff] to-[#694dff] pt-24   "
        id="background"
      >
        <div className=" md:flex flex-row-reverse justify-between  w-[90%] items-center gap-6 hidden  md:max-w-[90rem] md:w-[80%]   h-fit z-10">
          <button
            onClick={handleback}
            className=" hover:bg-slate-300 transition-all bg-[#c5b7ff] text-slate-600 py-2 px-4 rounded-full my-4"
          >
            <CloseIcon />
          </button>
          <h1 className=" text-2xl text-[#c5b7ff] ">Order Details</h1>
        </div>

        {/* // Compare this snippet from src/Pages/Orders/Orderlisting/OrderTrack.jsx: */}
        <div className="container1 z-10 p-4 rounded-2xl gap-3 flex flex-col md:max-w-[80%] max-w-[90%] md:flex-row backdrop:blur-lg bg-slate-200/50 justify-center w-fit">
          <OrderDetails />
          <Status status="Finished" />
          <div className="flex flex-col gap-3 md:w-1/3">
            <PersonalDetail />
            <Payment handlePayment={handlePayment} />
          </div>
        </div>
        <button
          onClick={handleback}
          className=" hover:bg-slate-300 md:hidden transition-all bg-[#c5b7ff] text-slate-600 py-2 px-4 rounded-full my-4"
        >
          <CloseIcon />
        </button>
      </div>
    </>
  );
}

export default OrderTrack;
