import React from "react";
import Stepper from "./Stepper";
import { useContext } from "react";
import Formcontext from "./OrderFormContext/FormContex";
import Orderform2 from "./Orderform2";
import Orderform1 from "./Orderform1";
import Orderform3 from "./Orderform3";
import Detailcontext from "./DetailContext/Detailcontext";
import { useNavigate } from "react-router-dom";


function OrderForm() {
  const { currentStep, steps, move, setFormOneValid, is_F1_Invalide, is_F2_Invalide, setFormTWOValid } = useContext(Formcontext);



  const {details} = useContext(Detailcontext)

  const navigate = useNavigate();

  return (
    <>
      <div
        id="Ordercontainer"
        className=" pt-16 w-full rounded-lg bg-gray-100 transition-all flex flex-col justify-center items-center "
      >
        {/* stepper */}
        <Stepper />

        {/* Form Section */}
        <div
          id="Formcontainer"
          className=" md:w-[80%] w-[95%] h-fit bg-slate-50 shadow-2xl min-h-[24rem] rounded-lg p-2 md:p-5"
        >
          {/* Routing for forms */}
          {currentStep === 1 ? (
            <Orderform1 />
          ) : currentStep === 2 ? (
            <Orderform2 />
          ) : (
            <Orderform3 />
          )}
        </div>

        {/* Buttons */}

        <div id="buttondiv" className=" w-[80%] justify-between m-10 flex ">
          <button
            onClick={() => {
              
              if (currentStep === 1) {
                navigate("/order"); // Make sure you have a forward slash for the route
              } else {
                move(-1);
              }
             
            }}
            className="bg-slate-50  text-slate-500 border-2 border-slate-500 px-4 py-2 rounded-md"
            // disabled={currentStep === 1}
          >
            Back
          </button>
          <button
            onClick={() => {
              if (currentStep === 1) {
                if (details.size == null || details.orientation == null || details.file == null) {
                  setFormOneValid({
                  ...is_F1_Invalide,
                  size: details.size == null ? true : false,
                  orientation: details.orientation == null ? true : false,
                  file: details.file == null ? true : false,
                  });
                  //alert("Please select size and orientation");
                }
                
                  else {
                  move(1);
                }
              } 
              else if (currentStep === 2) {
                if (
                  details.name == null ||
                  details.phone == null ||
                  details.saveas == null ||
                  details.flat == null ||
                  details.street == null ||
                  details.district == null ||
                  details.state == null ||
                  details.pin == null
                ) {
                  setFormTWOValid({
                  ...is_F2_Invalide,
                  name: details.name == null ? true : false,
                  phone: details.phone == null ? true : false,
                  saveas: details.saveas == null ? true : false,
                  flat: details.flat == null ? true : false,
                  street: details.street == null ? true : false,
                  district: details.district == null ? true : false,
                  state: details.state == null ? true : false,
                  pin: details.pin == null ? true : false,
                  });
                  //alert("Please fill all the details");
                } else {
                  move(1);
                }
              }
            }}
            className="bg-[#6200EA] text-white px-4 py-2 rounded-md"
            disabled={currentStep === steps.length}
          >
            {currentStep === steps.length ? "Pay Now" : "Next"}
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderForm;
