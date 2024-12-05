

import { motion } from "framer-motion";
import { fadeIn } from "../../../../Framer/fadein.js";
import { HiOutlineDownload } from "react-icons/hi";
import { TbCopy } from "react-icons/tb";
import toast, { Toaster } from 'react-hot-toast';


function OrderDetails(props) {

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success(text+" Copied to clipboard")
  };

  return (
    <>
    <motion.div 
   variants={fadeIn("", 0.1)}
   initial="hidden"
   whileInView={"show"}
   viewport={{ once: false, amount: 0.2 }} 
    className="   bg-white rounded-xl shadow-md flex md:w-1/3  ">
              <div className="refimg min-w-[12rem] my-4  w-full flex-col flex items-center justify-center ">
                <h1 className="  flex items-center gap-2 font-bold text-xl  from-indigo-500 bg-gradient-to-tr to-purple-500 bg-clip-text text-transparent mb-1  ">
                  {props.id}<TbCopy onClick={()=>{
            copyToClipboard(props.id)
          }}  className=" cursor-pointer text-lg  text-slate-500" />
                </h1>
              
                
                <div className=" relative w-full flex justify-center  "  >
                
                <div className="ghostimg aspect-[1/1.414] relative  w-[60%]   shadow-lg min-w-[12rem] rounded-xl ">
                <img
                  className=" absolute  shadow-lg z-10 min-w-[12rem] rounded-xl"
                  src={props.downloadURL}
                  alt="refimg"
                />
                <div className="skeleton absolute flex items-center justify-center bg-slate-200 animate-pulse w-full h-full   shadow-lg min-w-[12rem] rounded-xl">
                        <img className=" animate-pulse w-16" src="https://www.iconpacks.net/icons/4/free-icon-no-image-14600.png" alt="" />
                </div>
                <h1 className=" font-semibold text-2xl z-10 absolute bottom-0 right-[1rem] md:right-[1rem] text-slate-200 bg-gradient-to-tr to-purple-700 from-indigo-700 p-1 rounded-t-full " >

                  {props.size}
                </h1>
                <div onClick={()=>{
                  window.open(props.downloadURL)
                }} className="download   z-10 absolute top-0 right-[1rem] md:right-[1rem] text-slate-200 bg-gradient-to-tr to-purple-700 from-indigo-700 p-2 cursor-pointer my-2 rounded-lg ">
                <HiOutlineDownload /> 
                </div>

                </div> 

                
               

                </div>
                
                <h1 className=" font-semibold text-xl text-zinc-800  ">
                  {props.person}
                </h1>
                <h1 className=" font-semibold text-lg text-zinc-500  ">
                  {props.orientation}
                </h1>
              </div>
            </motion.div>
            <Toaster />
    </>
  )
}

export default OrderDetails