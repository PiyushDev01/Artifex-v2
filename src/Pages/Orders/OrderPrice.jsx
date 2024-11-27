import "./order.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../Framer/fadein.js";
import PriceCard from "./orderComp/PriceCard";
import SidePriceCard from "./orderComp/SidePriceCard";
import backimg from "../Orders/OrderformSection/orderform-assets/Ellipse 8.png";
import carticon from "../Orders/OrderformSection/orderform-assets/icons8-cart-30.png";
import { useNavigate } from "react-router";
import { useContext } from "react";
import UserContext from "../../Context/UserContex";




function OrderPrice() {

  const navigate = useNavigate();
  const {isUserlogged }= useContext(UserContext);

  const toastifyerror = () => { 
    toast.error('Please Login to continue',{
      position: "top-center",
      draggable: true,
    });
  }



  return (
    <>
      <div
        className="relative md:h-full bg-zinc-950 w-fit md:w-full  flex flex-col items-center justify-center pt-32   "
        id="background"
      >
        <nav className=" top-0 md:h-[5.5rem] h-[4.6rem] w-screen  left-0 md:bg-none bg-slate-50  fixed md:shadow-none shadow-md rounded-b-3xl md:rounded-none " > </nav>

        <div id="backimg" className=" md:absolute fixed top-[20vh]  md:scale-100 w-[95%]  md:-top-[10rem]  overflow-hidden h-[100vh] " >
        <img src={backimg} alt="" className=" brightness-150 saturate-150 scale-125  " />

        </div>
        <div
          id="backBox"
          className="  fixed md:absolute bottom-0 w-[100%] h-1/2 md:h-1/3 rounded-t-[3rem] z-[1rem]  bg-gradient-to-r from-[#6200EA] to-[#8E2DE2]"
        ></div>
        {/* <div
          id="backBox"
          className=" -z-10 fixed md:absolute top-0 w-full h-1/2 md:h-1/2 rounded-b-[2rem]  bg-gradient-to-b   from-violet-500 to-transparent]"
        ></div> */}
        <motion.h6 
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        style={{fontFamily:"manrope"}} className=" text-4xl md:text-6xl bg-gradient-to-t from-slate-700 via-slate-100 to-white  text-slate-100 font-bold m-4 text-center">Personalize Your <span id="span"> Artwork</span>  Now!</motion.h6>
        <p id="p" className={` px-6 text-center ${isUserlogged ? "": "mb-8"}  text-white text-sm md:text-xl`}>Welcome! Thank you for choosing our services. We&apos;re glad to have you as a customer.</p>



<button onClick={()=>{
   navigate("/Your-Orders")
  }}  className={`button ${isUserlogged ? "": "hidden"} ` }>
  <div className="dots_border"></div>
  <img src={carticon} className=" z-20 w-6" alt="" />
  <span className="text_button ">Your Orders</span>
</button>




        <div id="cards" className=" z-[2rem] flex  rounded-[3rem] w-fit max-w-[95%] items-center mb-8  bg-white/30 backdrop-blur-sm md:flex-row flex-col" >

        <div className=" md:hidden"> 
        <PriceCard />
        </div>
        <SidePriceCard
          price={599}
          person="Double Person"
          d1="Receive progress updates to stay informed on your artwork."  
          d2="Track the delivery status of your sketch easily."
          d3="Get a digital preview for feedback before final delivery."

        />
       <div className=" hidden md:block"> 
        <PriceCard />
        </div>
        <SidePriceCard
          price={799}
          person="More than Two"
          d1="Enjoy secure packaging for the safe delivery of your artwork."
          d2="Receive a digital preview for review before delivery."
          d3="Personalized thank-you notes and custom gift options included."
          
        /></div>
      </div>
    </>
  );
}

export default OrderPrice;
