import "../landing.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Framer/fadein";
import { useContext } from "react";
import UserContext from "../../../Context/UserContex";

export default function Leftcontent() {
  const {uDetails} = useContext(UserContext);
  let name= uDetails.name;
  let names=null;
  if(name!=null){
    names= name.split(' ');
  }

   
  return (
   <>

      <div
        id="leftcnt"
        className=" md:w-1/2 text-center md:translate-y-8 md:text-left md:h-full h-4/5 mb-4 flex flex-col justify-center items-center md:items-start"
      >

        <motion.h2
          variants={fadeIn("", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}

          
          id="leftname"
          className=" md:text-4xl text-3xl text-zinc-600 "
        >
          {" "}
         {name? <div><span id="span">Hi!</span> {names[0]},</div>  :<span></span>}
          {/* <span>on Paper</span>{" "} */}
        </motion.h2>
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          id="lefttitle"
          className=" md:text-6xl text-4xl text-zinc-900 "
        >
          {" "}
          <span id="span">Capture</span> Life&apos;s Moments{" "}
          <span id="span">on Paper</span>{" "}
        </motion.h1>
        <motion.p
        id="leftp"
          variants={fadeIn("", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" md:w-4/5 py-4 px-6 md:px-0  text-slate-500 text-sm md:text-xl"
        >
          Preserve Your Memories in Sketches
        </motion.p>
        <a href="https://www.instagram.com/im_artifex/?igsh=dW0yZGN3NHNzNTM3" target="_blank">
        <motion.button
          variants={fadeIn("nothing", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          whileTap={{ scale: 0.8 }}
          className="p-3 h-fit w-fit text-white rounded-full px-6 my-4 transition-all md:block"
          id="exbtn"
        >
          <h1 className=" flex items-center justify-center gap-4 " >Explore</h1>
        </motion.button></a>
      </div>
    </>
  );
}
