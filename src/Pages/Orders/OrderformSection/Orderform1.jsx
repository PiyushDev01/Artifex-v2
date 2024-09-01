import React, { useContext, useState } from "react";
import pagesize from "./orderform-assets/pagesize 1.png";
import orient from "./orderform-assets/orient 2.png";
import { Switch } from "@mui/material";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import Detailcontext from "./DetailContext/Detailcontext";
import Formcontext from "./OrderFormContext/FormContex";

const sizeOptions = ["A4", "A5", "A3"];
const orientationOptions = ["Portrait", "Landscape"];

function Orderform1() {
  const { details, setDetails } = useContext(Detailcontext);
  const { is_F1_Invalide, setFormOneValid } = useContext(Formcontext);
  const [clickedSizeIndex, setClickedSizeIndex] = useState(null);
  const [clickedOrientationIndex, setClickedOrientationIndex] = useState(null);

  const handleSizeClick = (item, index) => {
    setDetails({ ...details, size: item });
    setClickedSizeIndex(index);
    setFormOneValid({ ...is_F1_Invalide, size: false });
  };

  const handleOrientationClick = (item, index) => {
    setDetails({ ...details, orientation: item });
    setClickedOrientationIndex(index);
    setFormOneValid({ ...is_F1_Invalide, orientation: false });
  };

  return (
    <div id="formcontainer" className="flex flex-col md:flex-row w-full h-full rounded-md">
      <div id="leftform" className="flex flex-col p-2 md:w-1/2 w-full h-full gap-2">
        {/* Size details */}
        <div className="flex items-center">
          <img src={pagesize} className="w-6 h-6 mr-2" alt="Page Size" />
          <h1 className="text-zinc-700 text-left text-xl font-semibold py-2">Size</h1>
        </div>
        <div id="sizedetails" className="flex items-center gap-1">
          {sizeOptions.map((item, index) => (
            <h1
              key={index}
              className={`font-semibold text-left rounded-xl border md:border-2 cursor-pointer   text-xs md:text-base py-1 px-4 ${
                is_F1_Invalide.size ? "bg-[#ffb3b3] border-[#ff5050]" :clickedSizeIndex === index || details.size === item
                ? " bg-purple-200 border-purple-500 outline outline-purple-500 "
                : "border-gray-400"
              }  outline-[1px] hover:bg-slate-200 `}
              onClick={() => handleSizeClick(item, index)}
            >
              {item}
            </h1>
          ))}
        </div>
        {/* Orientation details */}
        <div className="flex items-center md:mt-6">
          <img src={orient} className="w-6 h-6 mr-2" alt="Orientation" />
          <h1 className="text-zinc-700 text-left text-xl font-semibold py-2">Orientation</h1>
        </div>
        <div id="orientationDetails" className="flex items-center gap-1">
          {orientationOptions.map((item, index) => (
            <h1
              key={index}
              className={`font-semibold text-left rounded-xl border md:border-2 cursor-pointer   text-xs md:text-base py-1 px-4 ${
                is_F1_Invalide.orientation ? "bg-[#ffb3b3] border-[#ff5050]" :clickedOrientationIndex === index || details.orientation === item
                ? " bg-purple-200 border-purple-500 outline outline-purple-500 "
                : "border-gray-400"
              }  outline-[1px] hover:bg-slate-200 `}
              onClick={() => handleOrientationClick(item, index)}
            >
              {item}
            </h1>
          ))}
        </div>
        {/* Artist signature */}
        <div id="signature" className="flex items-center -translate-x-4 ">
          <Switch
            className="my-4 scale-75 "
            checked={details.signature}
            onChange={() => setDetails({ ...details, signature: !details.signature })}
            color="secondary"
            inputProps={{ "aria-label": "controlled" }}
          />
          <h1 className="text-left text-base font-semibold py-2 text-slate-700">Artist's Signature</h1>
        </div>
      </div>
      {/* Right side of the form */}
      <div id="rightform" className="md:w-1/2 h-full">
        <h1 className="text-zinc-700 text-left text-xl font-semibold py-2">Upload Image</h1>
        {/* Upload area */}
        <div
          id="upload"
          className="cursor-pointer flex flex-col items-center justify-center h-[10rem] w-full my-4 md:w-[80%] border-[2px] border-slate-400 border-dashed bg-slate-50 rounded-lg"
        >
          <div
            id="uploadcircle"
            className="flex items-center justify-center shadow-lg w-[4rem] h-[4rem] rounded-full bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]"
          >
            <DriveFolderUploadIcon className="scale-150 text-white" />
          </div>
          <h1 className="text-slate-700 m-2 text-xs max-w-56">
            Drag and drop your image here or <h1 className="text-[#4A00E0] font-semibold">browse</h1> to choose a file
          </h1>
        </div>
        {/* Guide area */}
        <div id="guide">
          <ul className="pb-4 px-4  md:px-2 text-left text-xs text-slate-500" style={{ listStyle: "disc" }}>
            <li className=" w-full">Upload a high-quality image.</li>
            <li className=" w-full">Face should be clearly visible.</li>
            <li className=" w-full">Do not upload a blurry image.</li>
            <li className=" w-full">Max file size 50 MB.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Orderform1;
