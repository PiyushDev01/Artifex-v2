import sideimg from "../../assets/sideimage.webp";
import { motion } from "framer-motion";
import "./landing.css";
import { useNavigate } from "react-router";
import video from "./video.mp4";

function Hero() {

  const navigate = useNavigate();
  return (
    <>
      <section className="maincontainer w-full h-[100vh] flex justify-center items-center   ">
        <div className=" flex gap-10 md:flex-row flex-col-reverse md:w-[80%] h-full ">
          <section className=" left flex items-center justify-center  md:w-1/2 h-full ">
            <div className="md:w-1/2 text-center md:scale-125  md:px-0 md:py-0 py-12 px-8 flex justify-center items-center  md:translate-x-0 md:translate-y-8 -translate-x-6 ">
              <div className=" w-fit md:w-full h-fit flex justify-center  relative">
                <img className=" md:w-96 w-80 " src={sideimg} alt="" />
                <motion.div
                  initial={{ y: -30, x: -80 }}
                  animate={{ y: -10, x: -80 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    ease: "easeIn",
                  }}
                  className=" md:w-24 md:h-24 w-16 h-16   bg-white/30 absolute backdrop-blur-sm  "
                  id="glossy"
                ></motion.div>
                <motion.div
                  initial={{ y: 240, x: 120 }}
                  animate={{ y: 220, x: 120 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    ease: "easeIn",
                  }}
                  className=" md:w-28 md:h-28 w-28 h-28 bg-white/30 absolute backdrop-blur-sm  "
                  id="glossy"
                ></motion.div>
              </div>
            </div>
          </section>
          <section className=" relative right md:w-1/2 md:h-full md:mt-0 mt-32  flex flex-col justify-center">
            <div className="bgcircle  md:w-96 h-52 -bottom-10 right-0 md:h-96 w-52 bg-slate-200 absolute rounded-full blur-3xl -z-10  md:left-20 md:top-60  "></div>
            <div className="bgcircle  md:w-40 top-0 md:h-40 w-24 h-24 bg-violet-300 absolute rounded-full blur-3xl -z-10  md:top-40  "></div>

            <h1 className=" max-w-md md:text-6xl text-slate-800 p-5 text-3xl font-semibold">
              Bring Your{" "}
              <span
                id="spn"
                className=" bg-gradient-to-r  from-pink-600 to-indigo-500 bg-clip-text text-transparent "
              >
                Memories
              </span>{" "}
              to Life with{" "}
              <span
                id="spn"
                className=" bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent "
              >
                {" "}
                Sketches{" "}
              </span>{" "}
            </h1>
            <p className=" text-slate-700 md:text-base text-base  px-6 max-w-md ">
              From birthdays to anniversaries, our sketches make any day
              unforgettable with a personal touch.
            </p>

            <button 
            onClick={() => navigate("/order")}
            className=" bg-gradient-to-tr text-lg font-semibold hover:shadow-xl shadow-black from-indigo-500 via-purple-500 to-pink-500 text-white p-2 w-fit m-5 rounded-full px-4 my-4 transition-all md:block">
              <span className="">Order Today!</span>
            </button>
          </section>

        

        </div>
      </section>
          <section className="w-full flex flex-col justify-center items-center">
            <h1 className=" font-semibold -mb-5 text-lg text-slate-800" >
             How to Place Order
            </h1>
           <video className=" rounded-3xl shadow-2xl w-[90%] my-10 md:w-[60%] "  controls>
           <source src={video} type="video/mp4"></source>

           </video>
          </section>
    </>
  );
}

export default Hero;
