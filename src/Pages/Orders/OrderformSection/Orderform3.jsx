import React from 'react'
import { useContext, useState, useEffect } from 'react'
import Detailcontext from './DetailContext/Detailcontext'
import UserContext from "../../../Context/UserContex";
import Formcontext from './OrderFormContext/FormContex';
import uploading from "./orderform-assets/Up Arrow.gif"
import submitting from "./orderform-assets/Success.gif"
import "../order.css"
import { motion } from "framer-motion";
import { fadeIn } from "../../../Framer/fadein.js";

import { useNavigate } from 'react-router-dom';


function Orderform3() {

    const navigate = useNavigate();

    const {details, setDetails} = useContext(Detailcontext)
    const { price, setprice }= useContext(UserContext);
    const {submitted, setSubmitted, setCurrentStep, setStep}= useContext(Formcontext);
    const[uploadinganimaiton, setuploadinganimaiton] = useState(false);

    useEffect(() => {
      setuploadinganimaiton(true);
      setTimeout(() => {
        setuploadinganimaiton(false);
      }, 4000)
    }, [submitted])

    useEffect(() => {
      setDetails({...details, price: price.price, person: price.person});
    }, [price])

    const aftersubmit = () => {
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
      // window.location.reload();
     
    }


  return (
    <>
    {
      submitted ? (
        
        /* From Uiverse.io by kennyotsu */ 
        uploadinganimaiton ? (
        <div className="card flex flex-col items-center ">
          <div className="loader">
            <h4>Uploading</h4>
            <div className="words">
        {/* <span className="word">DONE</span> */}
    <span class="word">Order</span>
    <span class="word">Details</span>
    <span class="word">Address</span>
    <span class="word">Image</span>
    <span class="word">Done.</span>
    
  </div>
  
</div>
<img className=' w-32' src={uploading} alt="" />
</div>) : (
  <div id="formcontainer" className="flex flex-col items-center justify-center w-1/2 h-full rounded-md">
          <img src={submitting} alt="submitted" className="md:w-1/2 filter " />
          <h1 className="text-3xl text-center font-semibold  text-mypurple">Order Submitted</h1>
          <h1 className=" md:text-lg text-sm md:w-[18rem] w-[14rem] text-center font-semibold text-slate-700 my-2">Relax and wait for the artist’s approval!</h1>
          <h1 className="md:text-sm text-xs text-center font-semibold text-slate-400 my-2">*Estimated amount to be paid after approval. </h1>
          <div className='flex'>
          {/* <button className=' py-2 px-4 text-slate-500 border-slate-500 border-2 rounded-full m-4 shadow-slate-400 shadow-lg'>Back</button> */}
          <button onClick={()=>{
            navigate('/Your-Orders')
          }} className=' border-[2px] border-mypurple  min-w-20 py-2 px-4 text-mypurple rounded-2xl m-6 '>Track</button>
          <button onClick={aftersubmit} className=' bg-mypurple  min-w-20 py-2 px-4 text-white rounded-2xl m-6 shadow-lg'>OK</button>
          </div>
          <h1 className="md:text-sm text-xs text-center font-semibold text-slate-400 my-2">Feel free to reach out to us on WhatsApp for more information!</h1>
        </div>)



      ) : (
        <div id="formcontainer" className="   flex-col md:flex-row w-full h-full rounded-md flex">
        <motion.div 
         variants={fadeIn("", 0.1)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.2 }}

        id="leftform" className="flex flex-col p-2 md:w-1/2 w-full h-full gap-2 text-left ">
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
        </motion.div>

        {/* this is right side of the form */}
        <motion.div 
         variants={fadeIn("", 0.1)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.2 }}
        id="rightform" className="p-2 md:w-1/2 h-full text-left">
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
          <motion.h1 
           variants={fadeIn("up", 0.1)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.2 }}
          className=' text-3xl mt-10'>
            Amount to Pay
          </motion.h1>
          <motion.h1
           variants={fadeIn("up", 0.1)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.2 }}
          className=' text-3xl font-bold my-2 '>
          ₹{price.price} <span className=' text-lg font-normal'>+ Shipping Charge</span>
          </motion.h1>
        </motion.div>
      </div>  
      )
    }
    </>
  )
}

export default Orderform3