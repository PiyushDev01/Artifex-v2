import "../landing.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Framer/fadein";

export default function Leftcontent() {
  return (
   <>

      <div
        id="leftcnt"
        className=" md:w-1/2 text-center md:translate-y-8 md:text-left md:h-full h-4/5 flex flex-col justify-center items-center md:items-start"
      >
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          id="lefttitle"
          className=" md:text-6xl text-4xl text-zinc-900 "
        >
          {" "}
          <span>Capture</span> Life's Moments{" "}
          <span>on Paper</span>{" "}
        </motion.h1>
        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" md:w-4/5 py-5 px-6 md:px-0 text-sm md:text-lg"
        >
          Preserve Your Memories in Sketches
        </motion.p>
        <motion.button
          variants={fadeIn("nothing", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          whileTap={{ scale: 0.8 }}
          className="p-3 h-fit w-fit text-white rounded-full px-6 my-4 transition-all md:block"
          id="exbtn"
        >
          <h1>Explore</h1>
        </motion.button>
      </div>
    </>
  );
}
