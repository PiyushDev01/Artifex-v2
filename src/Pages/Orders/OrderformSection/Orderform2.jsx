import { useContext, useEffect, useState } from "react";
import Detailcontext from "./DetailContext/Detailcontext";
import Formcontext from "./OrderFormContext/FormContex";
import "../order.css";
import axios from "axios";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Framer/fadein.js";
import loader from "../../../assets/loader.json";
import Lottie from "lottie-react";

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
      const response = await axios.get(
        "https://artifex-backend.vercel.app/api/pin-codes",
        { params }
      );
      const data = response.data;
      if (data.delivery_codes && data.delivery_codes.length > 0) {
        const postalData = data.delivery_codes[0].postal_code;
        setEstimate(data);
        setError(null);
        setIsServiceable(postalData.pre_paid === "Y"); // Update serviceability based on the response
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
        console.log(error);
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

  const handlephoneInputChange = (field, value) => {
    const sanitizedValue = value.replace(/^0+/, ""); // Remove leading zeros
    setDetails({ ...details, [field]: sanitizedValue });
    setFormTWOValid({ ...is_F2_Invalide, [field]: false });
  };

  const handleMaxLength = (e, defaultMaxLength) => {
    let value = e.target.value;
  
    // Check if the number starts with 0
    if (value.startsWith("0")) {
      // Allow a length greater than the default to account for leading zeros
      if (value.length > defaultMaxLength + 1) {
        e.target.value = value.slice(0, defaultMaxLength + 1);
      }
    } else {
      // Enforce the default maximum length
      if (value.length > defaultMaxLength) {
        e.target.value = value.slice(0, defaultMaxLength);
      }
    }
  };
  

  const validatePhoneNumber = (value) => {
    const regex = /^[1-9]\d{9}$/; // Ensures 10 digits, not starting with 0
    if (!regex.test(value)) {
      setFormTWOValid((prevState) => ({
        ...prevState,
        phone: true, // Mark as invalid
      }));
      // Optionally display a message or toast
      toast.error("Phone number must be 10 digits and not start with 0", {
        position: "bottom-center",
        duration: 3000,
        draggable: true,
      });
    } else {
      setFormTWOValid((prevState) => ({
        ...prevState,
        phone: false, // Mark as valid
      }));
    }
  };
  





  return (
    <div
      id="formcontainer"
      className="flex-col md:flex-row w-full h-full rounded-md flex"
    >
      {/* Left Form */}
      <motion.div
        variants={fadeIn("", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        id="leftform"
        className="flex flex-col p-2 md:w-1/2 w-full h-full gap-2"
      >
        {/* Contact Details */}
        <h1 className="text-zinc-700 flex items-center gap-2 text-left text-xl font-semibold py-2">
        <svg className=" scale-75 md:scale-100 " xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path opacity=".4" d="m11.79 14.21-3.27 3.27c-.36-.32-.71-.65-1.05-.99a28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.36.35.71.69 1.06.99Z" fill="#ba68c8"></path><path d="M21.97 18.33a2.54 2.54 0 0 1-.25 1.09c-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.01 0-.02.01-.03.01-.59.24-1.23.37-1.92.37-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98c-.39-.29-.78-.58-1.15-.89l3.27-3.27c.28.21.53.37.74.48.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78Z" fill="#ba68c8"></path></svg>

         
         
          <h1>Contact Details</h1>
        </h1>

        <input
          id="Name"
          type="text"
          placeholder="Full Name"
          required
          value={details.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          className={`md:my-1 border rounded-xl md:text-lg p-2 hover:border-mypurple md:w-[80%] ${
            is_F2_Invalide.name
              ? "bg-red-100 outline-red-600 border-red-600 outline-[1px]"
              : ""
          }`}
        />

        <input
          id="Phone"
          type="number"
          placeholder="Phone Number"
          value={details.phone}
          onChange={(e) => handlephoneInputChange("phone", e.target.value)}
          onInput={(e) => handleMaxLength(e, 10)}
          onBlur={(e) => validatePhoneNumber(e.target.value)}
          style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
          className={`md:my-1 border rounded-xl md:text-lg p-2 hover:border-mypurple md:w-[80%] ${
            is_F2_Invalide.phone
              ? "bg-red-100 outline-red-600 border-red-600 outline-[1px]"
              : ""
          }`}
        />

        <h1 className="mx-2 text-xs md:text-sm text-slate-400 text-left">
          We’ll call this number to coordinate delivery
        </h1>

        <h1 className="text-zinc-700 text-left text-xl font-semibold py-2">
          Save as
        </h1>

        <div className="flex gap-2">
          {saveas.map((item, index) => (
            <h1
              key={index}
              className={`font-semibold text-left rounded-xl border cursor-pointer py-1 px-4 md:text-base text-xs ${
                is_F2_Invalide.saveas
                  ? "bg-[#ffb3b3] border-[#ff5050]"
                  : clickedIndex === index || details.saveas === item
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
        id="rightform"
        className="flex flex-col p-2 md:w-1/2 w-full h-full gap-2"
      >
        <h1 className="text-zinc-700 flex items-center gap-2 text-left text-xl font-semibold py-2">
        <svg className=" scale-75 md:scale-100 " xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path opacity=".4" d="M20.621 8.45c-1.05-4.62-5.08-6.7-8.62-6.7h-.01c-3.53 0-7.57 2.07-8.62 6.69-1.17 5.16 1.99 9.53 4.85 12.28a5.436 5.436 0 0 0 3.78 1.53c1.36 0 2.72-.51 3.77-1.53 2.86-2.75 6.02-7.11 4.85-12.27Z" fill="#ba68c8"></path><path d="M12.002 13.46a3.15 3.15 0 1 0 0-6.3 3.15 3.15 0 0 0 0 6.3Z" fill="#ba68c8"></path></svg>
          <h1>Address</h1>
            
        </h1>

        <input
          type="text"
          value={details.flat}
          onChange={(e) => handleInputChange("flat", e.target.value)}
          placeholder="Flat, housing no, building, apartment."
          className={`md:my-1 border rounded-xl md:text-lg p-2 hover:border-mypurple md:w-[80%] ${
            is_F2_Invalide.flat
              ? "bg-red-100 outline-red-600 border-red-600 outline-[1px]"
              : ""
          }`}
        />

        <input
          type="text"
          placeholder="Area, street, sector"
          value={details.street}
          onChange={(e) => handleInputChange("street", e.target.value)}
          className={`md:my-1 border rounded-xl md:text-lg p-2 hover:border-mypurple md:w-[80%] ${
            is_F2_Invalide.street
              ? "bg-red-100 outline-red-600 border-red-600 outline-[1px]"
              : ""
          }`}
        />

        <div className="flex w-full md:w-[80%] gap-4">
          <input
            type="number"
            placeholder="Pincode"
            value={details.pin}
            onChange={(e) => {
              setDetails({
                ...details,
                pin: e.target.value,
                district: null,
                state: null,
              });
            }}
            onInput={(e) => handleMaxLength(e, 6)}
            className={` transition-all md:my-1 border rounded-xl md:text-lg p-2 hover:border-mypurple md:w-[40%] ${
              is_F2_Invalide.pin || !isServiceable
                ? "bg-red-100 outline-red-600 border-red-600 outline-[1px]"
                : ""
            }`}
          />
          <button
            onClick={checkPincode}
            className=" transition-all bg-mypurple my-1 px-4 text-white rounded-2xl"
          >
            {pinchecking === "Checking..." ? (
              <Lottie
                animationData={loader}
                style={{ width: "45px", height: "30px" }}
                className=" scale-[200%] brightness-200 "
              />
            ) : (
              pinchecking
            )}
          </button>
        </div>
        {error && <h1 className="text-red-500 text-sm">{error}</h1>}

        <div className="flex w-full md:w-[80%] gap-2">
          <input
            type="text"
            placeholder="District"
            disabled
            value={details.district || ""}
            onChange={(e) => handleInputChange("district", e.target.value)}
            className={`md:my-1 border rounded-xl w-[50%] md:text-lg p-2 hover:border-mypurple ${
              is_F2_Invalide.district
                ? "bg-red-100 outline-red-600 border-red-600 outline-[1px]"
                : ""
            }`}
          />
          <input
            type="text"
            placeholder="State"
            disabled
            value={details.state || ""}
            onChange={(e) => handleInputChange("state", e.target.value)}
            className={`md:my-1 border rounded-xl w-[50%] md:text-lg p-2 hover:border-mypurple ${
              is_F2_Invalide.state
                ? "bg-red-100 outline-red-600 border-red-600 outline-[1px]"
                : ""
            }`}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Orderform2;
