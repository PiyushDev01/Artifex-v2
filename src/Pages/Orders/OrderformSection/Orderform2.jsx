import { useContext, useEffect, useState } from "react";
import Detailcontext from "./DetailContext/Detailcontext";
import Formcontext from "./OrderFormContext/FormContex";
import "../order.css"
import axios from "axios";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Framer/fadein.js";
import loader from '../../../assets/loader.json'
import Lottie  from 'lottie-react';

const saveas = ["Home", "Office", "Others"];

function Orderform2() {
  const { details, setDetails } = useContext(Detailcontext);
  const { is_F2_Invalide, setFormTWOValid } = useContext(Formcontext);
  const [clickedIndex, setClickedIndex] = useState(null);

  const [isServiceable, setIsServiceable] = useState(true); 
  const [estimate, setEstimate] = useState(null); 
  const [pinchecking, setchecking] = useState("Check");
  const [error, setError] = useState(null);

  useEffect(() => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      saveas: saveas[0],
    }));
    setFormTWOValid((prevForm) => ({
      ...prevForm,
      saveas: false,
    }));
  }, [setDetails, setFormTWOValid]);
  

  const checkPincode = async () => {
    setchecking("Checking...");
    const params = { filter_codes: details.pin };
    try {
      const response = await axios.get('https://artifex-backend.vercel.app/api/pin-codes', { params });
      const data = response.data;
      if (data.delivery_codes && data.delivery_codes.length > 0) {
        const postalData = data.delivery_codes[0].postal_code;
        setEstimate(data);
        setError(null);
        setIsServiceable(postalData.pre_paid === 'Y'); // Update serviceability based on the response
        const { district } = postalData;
  
        // Use functional form to ensure we have the latest `details`
        setDetails((prevDetails) => ({
          ...prevDetails,
          district: district,
        }));

        
        // Extract state from the 'inc' field
        const match = postalData.inc.match(/\(([^)]+)\)/);
        if (match) {
          setDetails((prevDetails) => ({
            ...prevDetails,
            state: match[1],
          }));
        }
      } else {
        setIsServiceable(false);
        setError("Service not available for this area.");
        console.log(error)
      }
    } catch (err) {
      setError("Error fetching estimate. Please try again.");
      console.error(err);
    } finally {
      setchecking("Check");
    }
  };
  

  // Helper function to handle input change and form validation
  const handleInputChange = (field, value) => {
    setDetails({ ...details, [field]: value });
    setFormTWOValid({ ...is_F2_Invalide, [field]: false });
  };

  const handleMaxLength = (e, maxLength) => {
    if (e.target.value.length > maxLength) {
      e.target.value = e.target.value.slice(0, maxLength);
    }
  };

  return (
    <div id="formcontainer" className="flex-col md:flex-row w-full h-full rounded-md flex">
      {/* Left Form */}
      <motion.div
      variants={fadeIn("", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      id="leftform" className="flex flex-col p-2 md:w-1/2 w-full h-full gap-2">
        {/* Contact Details */}
        <h1 className="text-zinc-700 text-left text-xl font-semibold py-2">Contact Details</h1>
        
        <input
          id="Name"
          type="text"
          placeholder="Full Name"
          required

          value={details.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          className={`md:my-1 border rounded-xl md:text-lg p-2 hover:border-mypurple md:w-[80%] ${
            is_F2_Invalide.name ? "bg-red-100 outline-red-600 border-red-600 outline-[1px]" : ""
          }`}
        />
        
        <input
          id="Phone"
          type="number"


          placeholder="Phone Number"
          value={details.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          onInput={(e) => handleMaxLength(e, 10)}
          style={{ WebkitAppearance: 'none', MozAppearance: 'textfield' }}
          className={`md:my-1 border rounded-xl md:text-lg p-2 hover:border-mypurple md:w-[80%] ${
            is_F2_Invalide.phone ? "bg-red-100 outline-red-600 border-red-600 outline-[1px]" : ""
          }`}
        />
        
        <h1 
        
        className="mx-2 text-xs md:text-sm text-slate-400 text-left">
          We’ll call this number to coordinate delivery
        </h1>
        
        <h1 className="text-zinc-700 text-left text-xl font-semibold py-2">Save as</h1>
        
        <div 
      
        className="flex gap-2">
          {saveas.map((item, index) => (
            <h1
              key={index}
              className={`font-semibold text-left rounded-xl border cursor-pointer py-1 px-4 md:text-base text-xs ${
                is_F2_Invalide.saveas ? "bg-[#ffb3b3] border-[#ff5050]" : clickedIndex === index || details.saveas === item
                  ? "bg-purple-200 border-purple-500 outline outline-purple-500"
                  : "border-gray-400"
              } outline-[1px] hover:bg-slate-200`}
              onClick={() => {
                setDetails({ ...details, saveas: item });
                setClickedIndex(index);
                setFormTWOValid({ ...is_F2_Invalide, saveas: false });
              }}
            >
              {item}
            </h1>
          ))}
        </div>
      </motion.div>

      {/* Right Form */}
      <motion.div 
      variants={fadeIn("", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }} 

      id="rightform" className="flex flex-col p-2 md:w-1/2 w-full h-full gap-2">
        <h1 className="text-zinc-700 text-left text-xl font-semibold py-2">Address</h1>
        
        <input
          type="text"
          value={details.flat}
          onChange={(e) => handleInputChange("flat", e.target.value)}
          placeholder="Flat, housing no, building, apartment."
          className={`md:my-1 border rounded-xl md:text-lg p-2 hover:border-mypurple md:w-[80%] ${
            is_F2_Invalide.flat ? "bg-red-100 outline-red-600 border-red-600 outline-[1px]" : ""
          }`}
        />
        
        <input
          type="text"
          placeholder="Area, street, sector"
          value={details.street}
          onChange={(e) => handleInputChange("street", e.target.value)}
          className={`md:my-1 border rounded-xl md:text-lg p-2 hover:border-mypurple md:w-[80%] ${
            is_F2_Invalide.street ? "bg-red-100 outline-red-600 border-red-600 outline-[1px]" : ""
          }`}
        />

        <div className="flex w-full md:w-[80%] gap-4" >
           <input
          type="number"
          placeholder="Pincode"
          value={details.pin}
          onChange={(e) => {
            setDetails({ ...details, pin: e.target.value, district: null, state: null });
          }}
          onInput={(e) => handleMaxLength(e, 6)}
          className={` transition-all md:my-1 border rounded-xl md:text-lg p-2 hover:border-mypurple md:w-[40%] ${
            is_F2_Invalide.pin || !isServiceable ? "bg-red-100 outline-red-600 border-red-600 outline-[1px]" : ""
          }`}
        />
        <button onClick={checkPincode} className=" transition-all bg-mypurple my-1 px-4 text-white rounded-2xl"> 
          {pinchecking === "Checking..." ? (
            <Lottie animationData={loader} style={{width: '45px', height: '30px'}} className=" scale-[200%] brightness-200 " />
          ) : (
            pinchecking
          )}
           </button>
        </div>
       {
        error &&   <h1 className="text-red-500 text-sm">{error}</h1>
       }
        
        <div className="flex w-full md:w-[80%] gap-2">
          <input
            type="text"
            placeholder="District"
            disabled  
            value={details.district || ""}
            onChange={(e) => handleInputChange("district", e.target.value)}
            className={`md:my-1 border rounded-xl w-[50%] md:text-lg p-2 hover:border-mypurple ${
              is_F2_Invalide.district ? "bg-red-100 outline-red-600 border-red-600 outline-[1px]" : ""
            }`}
          />
          <input
            type="text"
            placeholder="State"
            disabled
            value={details.state || ""}
            onChange={(e) => handleInputChange("state", e.target.value)}
            className={`md:my-1 border rounded-xl w-[50%] md:text-lg p-2 hover:border-mypurple ${
              is_F2_Invalide.state ? "bg-red-100 outline-red-600 border-red-600 outline-[1px]" : ""
            }`}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Orderform2;
