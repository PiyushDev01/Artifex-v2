import "./order.css";
import React from "react";
import PriceCard from "./orderComp/PriceCard";
import SidePriceCard from "./orderComp/SidePriceCard";

function OrderPrice() {
  return (
    <>
      <div
        className="relative md:h-full  flex flex-col items-center justify-center pt-32   "
        id="background"
      >
        <div
          id="backBox"
          className=" -z-10 fixed md:absolute top-0 w-full h-1/2 md:h-1/2 rounded-b-[2rem] bg-gradient-to-r  from-[#6200EA] to-[#8E2DE2]"
        ></div>
        <h6 className=" text-4xl md:text-6xl font-extrabold m-4 text-center">Choose Your Order</h6>
        <p id="p" className=" px-6 text-center mb-8 text-white text-sm md:text-xl">Welcome! Thank you for choosing our services. We're glad to have you as a customer.</p>

        <div id="cards" className=" flex md:flex-row flex-col" >
        <SidePriceCard
          price="599"
          person="Double Person"
          d1="Regular progress updates on your sketch"
          d2="Track delivery status of your artwork"
          d3="Digital proofs or previews of the sketch before final delivery"
          d4="Regular progress updates on your sketch"
        />
        <PriceCard />
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
