import React from 'react'
import { useContext, useState } from 'react'
import Detailcontext from './DetailContext/Detailcontext'
import UserContext from "../../../Context/UserContex";
import Formcontext from './OrderFormContext/FormContex';
import submitimg from "./orderform-assets/Success.gif"

import { useNavigate } from 'react-router-dom';


function Orderform3() {

    const navigate = useNavigate();

    const {details, setDetails} = useContext(Detailcontext)
    const { price, setprice }= useContext(UserContext);
    const {submitted, setSubmitted, setCurrentStep, setStep}= useContext(Formcontext);

    const handlesubmit = () => {
      setSubmitted(false);
      setDetails({
        size: null,
        orientation: null,
        cropped:null,
        notes: null,
        file: null,
        name: null,
        phone: null,
        saveas: null,
        flat: null,
        street: null,
        pin: null,
        district: null,
        state: null,
      }
      )
      setprice({
        person: null,
        price: null,
      })
      setCurrentStep(1);
      setStep('0%');
      navigate('/')
     
    }


  return (
    <>
    {
      submitted ? (
        <div id="formcontainer" className="flex flex-col items-center justify-center w-1/2 h-full rounded-md">
          <img src={submitimg} alt="submitted" className="md:w-1/2" />
          <h1 className="text-3xl text-center font-semibold  text-mypurple">Order Submitted</h1>
          <h1 className=" md:text-lg text-sm text-center font-semibold text-slate-700 my-2">Feel free to relax while we wait for the artist’s approval!</h1>
          <h1 className="md:text-sm text-xs text-center font-semibold text-slate-400 my-2">*Estimated amount to be paid after approval. </h1>
          <div className='flex'>
          {/* <button className=' py-2 px-4 text-slate-500 border-slate-500 border-2 rounded-full m-4 shadow-slate-400 shadow-lg'>Back</button> */}
          <button onClick={handlesubmit} className=' bg-mypurple py-2 px-4 text-white rounded-full m-4 shadow-slate-400 shadow-lg'>Orders</button>
          </div>
        </div>
      ) : (
        <div id="formcontainer" className="   flex-col md:flex-row w-full h-full rounded-md flex">
        <div id="leftform" className="flex flex-col p-2 md:w-1/2 w-full h-full gap-2 text-left ">
          {/* contact details */}
          <h1 className=" text-zinc-700 text-left text-xl font-semibold py-2">
            Contact Details
          </h1>
          <h1 className=' text-slate-700 font-semibold' >
            <span className=' text-mypurple font-semibold' >Full name : </span>{details.name}
          </h1>
          <h1 className=' text-slate-700 font-semibold' >
            <span className=' text-mypurple font-semibold' >Phone no. : </span>{details.phone}
          </h1>

          {/* Address details */}
          <h1 className=" text-zinc-700 text-left text-xl font-semibold py-2">
            Address
          </h1>
          <h1 className=' text-slate-700 max-w-[80%] font-semibold'>
            {details.flat}{" "}{details.street}{" "}
          </h1>
          <h1 className=' text-slate-700 font-semibold' >
            <span className=' text-mypurple font-semibold' >District : </span>{details.district}
          </h1>
          <h1 className=' text-slate-700 font-semibold' >
            <span className=' text-mypurple font-semibold' >State : </span>{details.state}
          </h1>
          <h1 className=' text-slate-700 font-semibold' >
            <span className=' text-mypurple font-semibold' >Pincode : </span>{details.pin}
          </h1>
        </div>

        {/* this is right side of the form */}
        <div id="rightform" className="p-2 md:w-1/2 h-full text-left">
          {/* contact details */}
          <h1 className=" text-zinc-700 text-left text-xl font-semibold py-2">
            Order Details
          </h1>
          <h1 className=' text-slate-700 font-semibold' >
            <span className=' text-mypurple font-semibold' >Person : </span>{price.person}
          </h1>
          <h1 className=' text-slate-700 font-semibold' >
            <span className=' text-mypurple font-semibold' >Size : </span>{details.size}
          </h1>
          <h1 className=' text-slate-700 font-semibold' >
            <span className=' text-mypurple font-semibold' >Orientation : </span>{details.orientation}
          </h1>
          <h1 className=' text-slate-700 font-semibold' >
            <span className=' text-mypurple font-semibold' >Note: </span>{details.notes ? details.notes: 'No'}
          </h1>
          <h1 className=' text-3xl mt-10'>
            Amount to Pay
          </h1>
          <h1 className=' text-3xl font-bold my-2 '>
          ₹{price.price} <span className=' text-lg font-normal'>+ Shipping Charge</span>
          </h1>
        </div>
      </div>  
      )
    }
    </>
  )
}

export default Orderform3