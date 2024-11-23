import Stepper from "./Stepper";
import { useContext, useState } from "react";
import Formcontext from "./OrderFormContext/FormContex";
import Orderform2 from "./Orderform2";
import Orderform1 from "./Orderform1";
import Orderform3 from "./Orderform3";
import Detailcontext from "./DetailContext/Detailcontext";
import { useNavigate } from "react-router-dom";
import {submitOrder}  from "../../../Firebase/CURDfunc/create.js";
import  UserContext  from "../../../Context/UserContex.js";


function OrderForm() {
  const { currentStep, steps, move, setFormOneValid, is_F1_Invalide, is_F2_Invalide, setFormTWOValid, setSubmitted, submitted ,setUploading} = useContext(Formcontext);
  const {user} = useContext(UserContext);
  const [checked, setChecked] = useState(false);



  const {details, setDetails} = useContext(Detailcontext)

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setUploading(true);
    try {
      console.log(user.uid);
      setSubmitted(true);
      await submitOrder(user.uid, details, setDetails , details.croppedImage, user);
      console.log("Order Submitted");
    } catch (e) {
      console.error(e);
    } finally {
      
      setUploading(false);
    }
  }

  // TODO: change the back and next button in mobile view to be at the bottom of the form

  return (
    <>
      <div
        id="Ordercontainer"
        className=" pt-16 w-full min-h-[100vh] rounded-lg bg-gray-100 transition-all flex flex-col justify-center items-center "
      >
        {/* stepper */}
        { !submitted && <Stepper />}
 
        {/* Form Section */}
        <div
          id="Formcontainer"
          className={` transition-all ${submitted && currentStep > 2 ?"md:max-w-[40%]":"md:max-w-[80%]"}  w-[95%] h-fit bg-slate-50 shadow-2xl min-h-[24rem] flex justify-center items-center rounded-2xl p-2 md:p-5`}
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

        <div id="buttondiv" className={`${submitted && "hidden"} md:w-[80%] w-[90%] justify-between m-10 flex-col-reverse md:flex-row gap-4 flex `}>
          <button
            onClick={() => {
              
              if (currentStep === 1) {
                navigate("/order"); // Make sure you have a forward slash for the route
              } else {
                move(-1);
              }
             
            }}
            className="bg-zinc-300  text-slate-800 border-2  px-4 py-2 text-lg  md:rounded-full  rounded-lg"
            // disabled={currentStep === 1}
          >
            Back
          </button>

          <div className="flex gap-4 md:flex-row flex-col items-center ">
           {
              currentStep === 3 && (
                <div className=" flex gap-2 items-center m-2 ">
           <input type="checkbox" 
            onChange={()=>setChecked(!checked)}
            className=" w-4 h-4 "
           />
           <h1 className="text-slate-700 text-lg">All Details are correct</h1>
           </div>)

           }

          <button
            onClick={() => {
              if (currentStep === 1) {
                if (details.size == null || details.orientation == null || details.cropped == null) {
                  setFormOneValid({
                  ...is_F1_Invalide,
                  size: details.size == null ? true : false,
                  orientation: details.orientation == null ? true : false,
                  file: details.cropped == null ? true : false,
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
              }else {
                if (checked) {
                  handleSubmit();
                } else {
                  alert("Please confirm the details");
                
                }
              }
            }}
            className="bg-[#6200EA] text-white px-4 py-2 text-lg md:rounded-full w-full md:w-fit  rounded-lg"
            // disabled={currentStep === steps.length}
          >
            {currentStep === steps.length ? "Submit" : "Next"}
          </button>

        </div>
        </div>
          
      </div>
    </>
  );
}

export default OrderForm;
