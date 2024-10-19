import React from 'react'
import { useContext, useState } from 'react'
import Detailcontext from './DetailContext/Detailcontext'
import UserContext from "../../../Context/UserContex";


function Orderform3() {

    const {details} = useContext(Detailcontext)
    const { price }= useContext(UserContext);


  return (
    <>
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
    </>
  )
}

export default Orderform3