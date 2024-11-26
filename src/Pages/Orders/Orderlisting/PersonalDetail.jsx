
import { useContext } from "react";
import Detailcontext from "../OrderformSection/DetailContext/Detailcontext";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Framer/fadein.js";



function PersonalDetail() {
  const { currentOrder } = useContext(Detailcontext);
  return (
    <>
    <motion.div 
    variants={fadeIn("", 0.1)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: true, amount: 0.1 }}
    className=" p-2 px-4 shadow-md rounded-xl bg-white w-full h-fit ">
              <h1 className=" font-semibold text-lg md:text-2xl from-indigo-500 bg-gradient-to-tr to-purple-500 bg-clip-text text-transparent w-fit mb-1  ">
                {currentOrder.name}
              </h1>
              <h1 className=" font-semibold text-sm md:text-base gap-2 text-slate-700 mb-1 flex items-center ">
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
              <h1 className=" font-semibold text-sm md:text-base gap-2 text-slate-500 mb-1 flex items-center ">
               {currentOrder.flat}, {currentOrder.street}, {currentOrder.district}, {currentOrder.state}
              </h1>
              <h1 className=" w-[80%] font-semibold text-lg gap-2 my-2 text-slate-700 md:mb-1 flex items-center ">
              Pincode: {currentOrder.pin}
              </h1>
        </motion.div>
    </>
  )
}

export default PersonalDetail