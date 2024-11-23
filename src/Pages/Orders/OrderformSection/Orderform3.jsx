import { useContext, useState, useEffect } from 'react'
import Detailcontext from './DetailContext/Detailcontext'
import UserContext from "../../../Context/UserContex";
import Formcontext from './OrderFormContext/FormContex';
import uploading from "./orderform-assets/Up Arrow.gif"
import successanimation from '../../../assets/success.json'
import Lottie  from 'lottie-react';
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
      // navigate('/')
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
    <span className="word">Order</span>
    <span className="word">Details</span>
    <span className="word">Address</span>
    <span className="word">Image</span>
    <span className="word">Done.</span>
    
  </div>
  
</div>
<img className=' w-32' src={uploading} alt="" />
</div>) : (
  <div id="formcontainer" className="flex flex-col py-4 items-center justify-center w-full h-full rounded-md">
          <Lottie 
        animationData={successanimation} 
        loop={false} 
        style={{ width: 280, height: 280 }} // Customize size
      />
          <h1 className="text-2xl text-center font-bold  text-[#454545] ">Your Order is on its way of approval!
          </h1>
          <h1 className=" md:text-sm text-sm md:w-[50%] w-[80%] text-center font-semibold text-[#828282] my-2">We’ve sent it to Artist and are just waiting on their approval to get you paid</h1>
          
          <motion.div 
           variants={fadeIn("", 0.1)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.2 }}

          className='flex my-2 flex-col-reverse w-[60%] '>
          {/* <button className=' py-2 px-4 text-slate-500 border-slate-500 border-2 rounded-full m-4 shadow-slate-400 shadow-lg'>Back</button> */}
          <button onClick={()=>{
            navigate('/Your-Orders')
            aftersubmit()
          }} className=' bg-zinc-300  text-slate-800 min-w-20 py-2 px-4 rounded-lg m-2 '>Track Your Order</button>
          <button onClick={()=>{
            aftersubmit()
            navigate('/')
          }} className=' bg-mypurple  min-w-20 py-2 px-4 text-white rounded-lg m-2 shadow-lg'>Got it</button>
          </motion.div>
          
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