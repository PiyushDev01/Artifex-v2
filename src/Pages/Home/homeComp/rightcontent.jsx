import sideimg from "../../../assets/sideimage.webp"
import { motion } from "framer-motion"
import { fadeIn } from "../../../Framer/fadein";



export default function Rightcontent(){
    return<>
    <div className="md:w-1/2 text-center  md:px-0 md:py-0 py-16 px-8 flex justify-center items-center  md:translate-x-0 md:translate-y-8 -translate-x-6 ">
      <motion.div variants={fadeIn("up",0.5)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.2}} className=" w-fit md:w-full h-fit flex justify-center  relative">
        <img className=" md:w-96 w-80 " src={sideimg} alt="" />
        <motion.div initial={{y:-30, x:-80}} animate={{ y: -10,x:-80 }}
    transition={{ repeat: Infinity, repeatType: "reverse", duration: 2, ease:"easeIn" }} className=" md:w-24 md:h-24 w-16 h-16   bg-white/30 absolute backdrop-blur-sm  " id="glossy"></motion.div>
        <motion.div initial={{y:240, x:120}} animate={{ y:220, x:120 }}
         transition={{ repeat: Infinity, repeatType: "reverse", duration: 2, ease:"easeIn" }}  className=" md:w-28 md:h-28 w-28 h-28 bg-white/30 absolute backdrop-blur-sm  " id="glossy"></motion.div>
        
      </motion.div>
    </div>
    </>;
} 