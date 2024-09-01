import { useContext, useState } from "react";
import Detailcontext from "./DetailContext/Detailcontext";
import Formcontext from "./OrderFormContext/FormContex";




const saveas = ["Home", "Office", "Others"];

function Orderform2() {

const {details, setDetails } = useContext(Detailcontext);
const {is_F2_Invalide, setFormTWOValid}= useContext(Formcontext);
const [clickedIndex, setClickedIndex] = useState(null);





  return (
    <>
      <div
        id="formcontainer"
        className="   flex-col md:flex-row w-full h-full rounded-md flex"
      >
        <div
          id="leftform"
          className="flex flex-col p-2 md:w-1/2 w-full h-full gap-2 "
        >
          {/* Contact details */}
          <h1 className=" text-zinc-700 text-left text-xl font-semibold py-2">
            Contact Details
          </h1>
          <input
            id="Name"
            type="text"
            placeholder="Full Name"
            required
            value={details.name}
            onChange={(e) => {
              setDetails({ ...details, name: e.target.value })
              setFormTWOValid({...is_F2_Invalide, name: false})
              
            }} 
            className={` md:my-1 border border-1 rounded-xl md:text-lg ${is_F2_Invalide.name ? ' bg-red-100 outline-red-600 border-red-600 outline-[1px]':''}  p-2 hover:border-mypurple md:w-[80%] `}
          />
          <input
            id="Phone"
            type="number"
            placeholder="Phone Number"
            maxLength="10"  onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
            value={details.phone}
            onChange={(e) => {
              setDetails({ ...details, phone: e.target.value })
              setFormTWOValid({...is_F2_Invalide, phone: false})
            }} 
            className={`  md:my-1 border rounded-xl md:text-lg ${is_F2_Invalide.phone
                     ? ' bg-red-100 outline-red-600 border-red-600 outline-[1px]':''}  p-2 hover:border-mypurple md:w-[80%] `}
          />
          <h1 className=" mx-2 text-xs md:text-sm text-slate-400 text-left">
            we’ll call this number to coordinate delivery
          </h1>
          <h1 className=" text-zinc-700 text-left text-xl font-semibold py-2">
            Save as
          </h1>
          <div className=" flex gap-2">
            {saveas.map((item, index) => {
              return (
                <h1
                  key={index}
                  className={`font-semibold text-left rounded-xl border md:border-2 cursor-pointer   text-xs md:text-base py-1 px-4 ${
                    is_F2_Invalide.saveas ? "bg-[#ffb3b3] border-[#ff5050]" :clickedIndex === index || details.saveas === item
                    ? " bg-purple-200 border-purple-500 outline outline-purple-500 "
                    : "border-gray-400"
                  }  outline-[1px] hover:bg-slate-200 `}
                    onClick={() => {
        
                        setDetails({ ...details, saveas: item }); 
                        setClickedIndex(index);
                        setFormTWOValid({...is_F2_Invalide, saveas: false})
                        
                      }}
                >
                  {item}{" "}
                </h1>
              );
            })}
          </div>
        </div>

        {/* this is right side of the form */}
        <div id="rightform" className=" flex flex-col p-2 md:w-1/2 w-full h-full gap-2 ">
        <h1 className=" text-zinc-700 text-left text-xl font-semibold py-2">
            Address
          </h1>
          <input
            id="Name"
            type="text"
            value={details.flat}
            onChange={(e) => {
              setDetails({ ...details, flat: e.target.value })
              setFormTWOValid({...is_F2_Invalide, flat: false})
            }}            placeholder="Flat, housing no, building, appartment."
            className={`  md:my-1 border rounded-xl md:text-lg ${is_F2_Invalide.flat
                     ? ' bg-red-100 outline-red-600 border-red-600 outline-[1px]':''} p-2 hover:border-mypurple md:w-[80%] `}
          />
          <input
            id="Name"
            type="text"
            placeholder="area, street, sector"
            value={details.street}
            onChange={(e) => {
              setDetails({ ...details, street: e.target.value })
              setFormTWOValid({...is_F2_Invalide, street: false})
            }}            className={`  md:my-1 border rounded-xl md:text-lg ${is_F2_Invalide.street
                     ? ' bg-red-100 outline-red-600 border-red-600 outline-[1px]':''} p-2 hover:border-mypurple md:w-[80%] `}
          />
          <input
            id="Name"
            type="number"
            placeholder="Pincode"
             maxLength="6"  onInput={(e) => e.target.value = e.target.value.slice(0, 6)}
            value={details.pin}
            onChange={(e) => {
              setDetails({ ...details, pin: e.target.value })
              setFormTWOValid({...is_F2_Invalide, pin: false})
            }}            className={`  md:my-1 border rounded-xl md:text-lg ${is_F2_Invalide.pin
                     ? ' bg-red-100 outline-red-600 border-red-600 outline-[1px]':''} p-2 hover:border-mypurple md:w-[80%] `}
          />
          <div className=" flex w-full md:w-[80%] gap-2 ">
          <input
            id="Name"
            type="text"
            placeholder="District"
            value={details.district}
            onChange={(e) => {
              setDetails({ ...details, district: e.target.value })
              setFormTWOValid({...is_F2_Invalide, district: false})
            }}
            className={`  md:my-1 border rounded-xl ${is_F2_Invalide.district
                     ? ' bg-red-100 outline-red-600 border-red-600 outline-[1px]':''} md:text-lg p-2 hover:border-mypurple w-[50%] `}
          /><input
          id="Name"
          type="text"
          placeholder="State"
            value={details.state}
            onChange={(e) => {
              setDetails({ ...details, state: e.target.value })
              setFormTWOValid({...is_F2_Invalide, state: false})
            }}
          className={`  md:my-1 border rounded-xl ${is_F2_Invalide.state
                     ? ' bg-red-100 outline-red-600 border-red-600 outline-[1px]':''} md:text-lg p-2 hover:border-mypurple w-[50%] `}
        />
          </div>
        
        </div>
      </div>
    </>
  );
}

export default Orderform2;
