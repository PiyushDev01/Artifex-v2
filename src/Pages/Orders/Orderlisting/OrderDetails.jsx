
import { useContext } from "react";
import Detailcontext from "../OrderformSection/DetailContext/Detailcontext";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Framer/fadein.js";









function OrderDetails() {

  const { currentOrder } = useContext(Detailcontext);

  return (
    <>
    <motion.div 
   variants={fadeIn("", 0.1)}
   initial="hidden"
   whileInView={"show"}
   viewport={{ once: false, amount: 0.2 }} 
    className="   bg-white rounded-xl shadow-md flex md:w-1/3  ">
              <div className="refimg min-w-[12rem] my-4  w-full flex-col flex items-center justify-center ">
                <h1 className=" font-bold text-xl  from-indigo-500 bg-gradient-to-tr to-purple-500 bg-clip-text text-transparent mb-1  ">
                  {currentOrder.id}
                </h1>
              
                
                <div className=" relative w-full flex justify-center  "  >
                
                <div className="ghostimg aspect-[1/1.414] relative  w-[60%]   shadow-lg min-w-[12rem] rounded-xl ">
                <img
                  className=" absolute  shadow-lg z-10 min-w-[12rem] rounded-xl"
                  src={currentOrder.downloadURL}
                  alt="refimg"
                />
                <div className="skeleton absolute flex items-center justify-center bg-slate-200 animate-pulse w-full h-full   shadow-lg min-w-[12rem] rounded-xl">
                        <img className=" animate-pulse w-16" src="https://www.iconpacks.net/icons/4/free-icon-no-image-14600.png" alt="" />
                </div>

                </div> 

                <h1 className=" font-semibold text-2xl z-10 absolute bottom-0 right-[5rem] md:right-[6rem] text-slate-200 bg-gradient-to-tr to-purple-700 from-indigo-700 p-1 rounded-t-full " >

                  {currentOrder.size}
                </h1>
                </div>
                
                <h1 className=" font-semibold text-xl mt-3 text-zinc-800  ">
                  {currentOrder.person}
                </h1>
                <h1 className=" font-semibold text-lg text-zinc-500  ">
                  {currentOrder.orientation}
                </h1>
              </div>
            </motion.div>
    </>
  )
}

export default OrderDetails