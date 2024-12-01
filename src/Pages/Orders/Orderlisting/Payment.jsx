import { useContext, useState } from "react";
import Detailcontext from "../OrderformSection/DetailContext/Detailcontext";
import { Status } from './OrderList';
import { motion } from "framer-motion";
import { fadeIn } from "../../../Framer/fadein.js";

function Payment(props) {

  const { currentOrder } = useContext(Detailcontext);
  const shipping = currentOrder.shipping;
  const curstatus = currentOrder.payment || currentOrder.status;
  const [paymentprocessing, setPaymentprocessing] = useState("Pay Now");  

  const handlePayment = (e) => {
    e.preventDefault();
    setPaymentprocessing("Processing...");
    props.handlePayment();
  }


  return (
    <>
      <motion.div
        variants={fadeIn("", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="payment w-full h-full min-h-[8rem] p-2 bg-white  rounded-xl shadow-md "
      >
        <div className=" flex gap-2 items-center">
          <h1 className=" text-base md:text-xl font-bold m-2 md:font-semibold text-slate-700">
            Payment Details 
          </h1>
          <Status status={curstatus} />
        </div>

        <div className="pricing  h-fit  ">
          <div className="price flex  p-2 mx-2 pb-0 justify-between  ">
            <h1 className=" text-lg font-semibold text-slate-600">
              Total Amount
            </h1>
            <h1 className=" text-lg font-semibold text-slate-800">
              ₹ {currentOrder.price}
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
                ₹ {currentOrder.shipping}{" "}
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
                ₹ {currentOrder.price + currentOrder.shipping}
              </h1>
            )}
          </div>
        </div>

        <div className="paymentstatus flex flex-col justify-between items-center  m-4  ">
          {curstatus === "Approved" ? (
            <>
              <div className=" flex flex-col md:flex-row w-full gap-2 items-center justify-center ">
                <p className=" text-slate-500">Secure payment with</p>
                <img
                  className=" w-[6rem]  "
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Razorpay_logo.svg/120px-Razorpay_logo.svg.png?20171127075036"
                  alt=""
                />
              </div>
              <div className=" flex md:flex-row flex-col-reverse w-full justify-center items-center gap-4 md:gap-8 mt-4 ">
                <button className=" bg-slate-200 text-zinc-900 w-full  py-2 px-4 rounded-full hover:border-slate-500 border-slate-100 border-[1px] transition-all text-sm font-semibold ">
                  Cancel
                </button>

                <button
                  onClick={
                    handlePayment
                  }
                  
                  className="bg-blue-700 text-white w-full  py-2 px-4 rounded-full shadow-blue-400 shadow-lg border-blue-700 border-[1px] hover:bg-blue-500 transition-all font-semibold text-sm"
                >
                  {paymentprocessing}
                </button>
              </div>
            </>
          ) : curstatus === "PAID" ? (
            <>
              <div className="price flex w-full justify-between items-center ">
                <h1 className=" md:text-lg text-sm font-semibold text-slate-600">
                  Payment ID
                </h1>
                <h1 className=" text-sm md:text-lg  font-semibold text-slate-800">
                  {currentOrder.paymentId}
                </h1>
              </div>
              <div className="price flex w-full justify-between items-center  ">
                <h1 className=" md:text-lg text-sm font-semibold text-slate-600">
                  Paid On
                </h1>
                <h1 className=" text-sm md:text-lg font-semibold text-slate-800">
                  {currentOrder.paymentDate}
                </h1>
              </div>
            </>
          ) : (
            <h1 className=" text-slate-400 text-center">
              *We estimate the total payment amount upon receiving the
              Artist&apos;s approval.
            </h1>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Payment;
