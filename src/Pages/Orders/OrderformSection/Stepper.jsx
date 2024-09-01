import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { useContext } from "react";
import Formcontext from "./OrderFormContext/FormContex";

function Stepper() {
  const { step, currentStep, steps } = useContext(Formcontext);

  return (
    <div className="flex items-center flex-col gap-6 my-10 w-1/2">
      {/* <h1 className=" text-2xl font-bold font-sans">Place Order</h1> */}
      <div
        id="steppercontainer"
        className="flex md:w-[90%] min-w-[18rem]  md:max-w-[28rem] md:min-w-[20rem]   relative justify-between"
      >
        <div
          id="processline"
          className="-translate-x-[50%] -translate-y-[50%] left-[50%] md:top-4 top-4 absolute bg-slate-800 w-[80%]  h-[2px]"
        >
          {/* process line */}
          <div
            id="innerprocess"
            className="bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] -z-10 h-[6px] rounded-l-2xl -translate-y-[40%] "
            style={{ width: step, transition: "width 0.5s" }}
          ></div>
        </div>
        {/* render steps dynamically */}
        {steps.map((step, index) => (
          <div className="flex flex-col w-fit items-center z-10" key={index}>
            <div
              id="stepno"
              className={`${
                currentStep > index + 1 ? " bg-gradient-to-br from-[#8E2DE2] to-[#4A00E0]" : "bg-white"
              } w-8 md:w-8 md:h-8 h-8 rounded-full  ${
                currentStep == index + 1
                  ? "border-purple-500 border-4"
                  : "border-slate-400 "
              } flex  justify-center text-white font-bold  items-center `}
            >
              {" "}
              <CheckIcon
                className={`${
                  currentStep > index + 1 ? " text-slate-50" : currentStep === index + 1 ? " text-purple-500 animate-pulse" : " text-slate-400"
                  
                } transition-all `}
              />{" "}
            </div>
            <div id="pdisc" className=" text-sm md:text-lg p-2 text-slate-700 ">
              {step.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stepper;
