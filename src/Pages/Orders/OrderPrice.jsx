import "./order.css";
import React from "react";
import PriceCard from "./orderComp/PriceCard";
import SidePriceCard from "./orderComp/SidePriceCard";
import backimg from "../Orders/OrderformSection/orderform-assets/Ellipse 8.png";
import carticon from "../Orders/OrderformSection/orderform-assets/icons8-cart-30.png";


function OrderPrice() {
  return (
    <>
      <div
        className="relative md:h-full bg-zinc-950  flex flex-col items-center justify-center pt-32   "
        id="background"
      >
        <img src={backimg} alt="" className=" md:absolute fixed top-[20vh]  md:scale-100  md:-top-[10rem] scale-125   brightness-150 saturate-150 " />
        <div
          id="backBox"
          className="  fixed md:absolute bottom-0 w-full h-1/2 md:h-1/3 rounded-t-[3rem] z-[1rem]  bg-gradient-to-r from-[#6200EA] to-[#8E2DE2]"
        ></div>
        {/* <div
          id="backBox"
          className=" -z-10 fixed md:absolute top-0 w-full h-1/2 md:h-1/2 rounded-b-[2rem]  bg-gradient-to-b   from-violet-500 to-transparent]"
        ></div> */}
        <h6 className=" text-4xl md:text-6xl  text-slate-100 font-bold m-4 text-center">Personalize Your Artwork Now!</h6>
        <p id="p" className=" px-6 text-center text-white text-sm md:text-xl">Welcome! Thank you for choosing our services. We're glad to have you as a customer.</p>


  
<button class="button">
  <div class="dots_border"></div>
  <img src={carticon} className=" z-20 w-6" alt="" />
  <span class="text_button">Your Orders</span>
</button>




        <div id="cards" className=" z-[2rem] flex  rounded-[3rem]   bg-white/30 backdrop-blur-sm md:flex-row flex-col" >

        <div className=" md:hidden"> 
        <PriceCard />
        </div>
        <SidePriceCard
          price="599"
          person="Double Person"
          d1="Regular progress updates on your sketch"  
          d2="Track delivery status of your artwork"
          d3="Digital proofs or previews of the sketch before final delivery"
          d4="Regular progress updates on your sketch"
        />
       <div className=" hidden md:block"> 
        <PriceCard />
        </div>
        <SidePriceCard
          price="799"
          person="More than Two"
          d1="Secure packaging for safe delivery"
          d2="Digital proofs or previews of the sketch before final delivery"
          d3="Personalized thank you notes or messages with the delivered artwork"
          d4="Personalized gift options"
        /></div>
      </div>
    </>
  );
}

export default OrderPrice;
