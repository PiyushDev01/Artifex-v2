import React, { useContext, useRef, useState, useEffect } from "react";
import pagesize from "./orderform-assets/pagesize 1.png";
import orient from "./orderform-assets/orient 2.png";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import RotateLeftRoundedIcon from '@mui/icons-material/RotateLeftRounded';
import Detailcontext from "./DetailContext/Detailcontext";
import Formcontext from "./OrderFormContext/FormContex";
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '../../../utils/cropImageHelper.js';
import { motion } from "framer-motion";
import { fadeIn } from "../../../Framer/fadein.js";

const sizeOptions = ["A4", "A5", "A3"];
const orientationOptions = ["Portrait", "Landscape"];

const OptionSelector = ({ options, selectedIndex, handleClick }) => (
  <div className="flex items-center gap-1">
    {options.map((item, index) => (
      <h1
        key={index}
        className={`font-semibold text-left rounded-xl border md:border-2 cursor-pointer text-xs md:text-base py-1 px-4 ${
          selectedIndex === index
            ? "bg-purple-200 border-purple-500 outline outline-purple-500"
            : "border-gray-400"
        } outline-[1px] hover:bg-slate-200`}
        onClick={() => handleClick(item, index)}
      >
        {item}
      </h1>
    ))}
  </div>
);

export default function Orderform1() {
  const [image, setImage] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [url, setUrl] = useState("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const inputRef = useRef(null);

  const { details, setDetails } = useContext(Detailcontext);
  const { is_F1_Invalide, setFormOneValid } = useContext(Formcontext);
  const [aspectRatio, setAspectRatio] = useState(1 / 1.414); // Default A4 ratio

  // Set default values for size and orientation
  useEffect(() => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      size: "A4",
      orientation: "Portrait",
    }));
    setFormOneValid((prevForm) => ({
      ...prevForm,
      size: false,
      orientation: false,
    }));
  }, [setDetails, setFormOneValid]);

  // Update aspect ratio based on orientation
  useEffect(() => {
    if (details.orientation === "Landscape") {
      setAspectRatio(1.414 / 1); // Landscape ratio
    } else {
      setAspectRatio(1 / 1.414); // Portrait ratio
    }
  }, [details.orientation]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const onCropComplete = (_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleCrop = async () => {
    try {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels);
      const croppedImageURL = URL.createObjectURL(croppedImage);
      setUrl(croppedImageURL);
      setDetails((prevDetails) => ({ ...prevDetails, cropped: croppedImageURL, croppedImage: croppedImage }));
    } catch (e) {
      console.error(e);
    }
  };

  const handleSizeClick = (item, index) => {
    setDetails((prevDetails) => ({ ...prevDetails, size: item }));
    setFormOneValid((prevForm) => ({ ...prevForm, size: false }));
  };

  const handleOrientationClick = (item, index) => {
    if(image){
      setUrl("");
      setImage(null);
      setDetails((prevDetails) => ({ ...prevDetails, cropped: null }));
      setDetails((prevDetails) => ({ ...prevDetails, orientation: item }));
    }else{
      setDetails((prevDetails) => ({ ...prevDetails, orientation: item }));
      setFormOneValid((prevForm) => ({ ...prevForm, orientation: false }));
    }
  };

  return (
    <motion.div 
    
    variants={fadeIn("", 0.1)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.2 }}
    
    id="formcontainer" className="flex flex-col md:flex-row w-full h-full rounded-md">
      <div id="leftform" className="flex flex-col p-2 md:w-1/2 w-full h-full gap-3 md:gap-2">
        <div className="flex gap-2 items-center">
          {/* <img src={pagesize} className="w-6 h-6 mr-2" alt="Page Size" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path opacity=".4" d="m21.66 10.438-.98 4.18c-.84 3.61-2.5 5.07-5.62 4.77-.5-.04-1.04-.13-1.62-.27l-1.68-.4c-4.17-.99-5.46-3.05-4.48-7.23l.98-4.19c.2-.85.44-1.59.74-2.2 1.17-2.42 3.16-3.07 6.5-2.28l1.67.39c4.19.98 5.47 3.05 4.49 7.23Z" fill="#ba68c8"></path><path d="M15.06 19.392c-.62.42-1.4.77-2.35 1.08l-1.58.52c-3.97 1.28-6.06.21-7.35-3.76l-1.28-3.95c-1.28-3.97-.22-6.07 3.75-7.35l1.58-.52c.41-.13.8-.24 1.17-.31-.3.61-.54 1.35-.74 2.2l-.98 4.19c-.98 4.18.31 6.24 4.48 7.23l1.68.4c.58.14 1.12.23 1.62.27Z" fill="#ba68c8"></path></svg>

          <h1 className="text-zinc-700 text-left text-xl font-semibold py-2">Size</h1>
        </div>
        <OptionSelector 
          options={sizeOptions} 
          selectedIndex={sizeOptions.indexOf(details.size)} 
          handleClick={handleSizeClick} 
        />
        
        <div className="flex gap-2 items-center md:mt-6">
          {/* <img src={orient} className="w-6 h-6 mr-2" alt="Orientation" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path opacity=".4" d="M16.75 22h-4.5C8.5 22 7 20.5 7 16.75v-4.5C7 8.5 8.5 7 12.25 7h4.5C20.5 7 22 8.5 22 12.25v4.5C22 20.5 20.5 22 16.75 22Z" fill="#ba68c8"></path><path d="M2.75 10.5c.41 0 .75-.34.75-.75 0-2.96 2.06-5.44 4.83-6.09l-.27.45c-.21.36-.1.82.26 1.03.36.21.82.1 1.03-.26l1.05-1.75c.14-.23.14-.52.01-.75A.781.781 0 0 0 9.75 2C5.48 2 2 5.48 2 9.75c0 .41.34.75.75.75Z" fill="#ba68c8"></path></svg>

          <h1 className="text-zinc-700 text-left text-xl font-semibold py-2">Orientation</h1>
        </div>
        <OptionSelector 
          options={orientationOptions} 
          selectedIndex={orientationOptions.indexOf(details.orientation)} 
          handleClick={handleOrientationClick} 
        />

        <label htmlFor="additionalNotes" className="text-zinc-700 md:flex text-left items-center gap-2 hidden text-xl font-semibold pt-4 py-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path opacity=".4" d="M20 8.25V18c0 3-1.79 4-4 4H8c-2.21 0-4-1-4-4V8.25c0-3.25 1.79-4 4-4 0 .62.25 1.18.66 1.59.41.41.97.66 1.59.66h3.5C14.99 6.5 16 5.49 16 4.25c2.21 0 4 .75 4 4Z" fill="#ba68c8"></path><path d="M16 4.25c0 1.24-1.01 2.25-2.25 2.25h-3.5c-.62 0-1.18-.25-1.59-.66C8.25 5.43 8 4.87 8 4.25 8 3.01 9.01 2 10.25 2h3.5c.62 0 1.18.25 1.59.66.41.41.66.97.66 1.59ZM12 13.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM16 17.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z" fill="#ba68c8"></path></svg>
          
          <h1>Additional Notes</h1> 
        </label>
        <textarea
          id="additionalNotes"
          className="border border-gray-400 md:block hidden hover:border-mypurple p-2 w-full md:w-[80%] h-22 rounded-xl resize-none"
          value={details.notes || ""}
          onChange={(e) => setDetails({ ...details, notes: e.target.value })}
          placeholder="Enter any additional notes here..."
        />
      </div>

      {details.cropped ? (
        <div className="flex items-center md:w-[50%] md:flex-row justify-center flex-col">
          <img className="rounded-lg shadow-2xl md:w-[40%] my-8 w-[80%]" src={details.cropped} alt="" />
          <button
            onClick={() => {
              setUrl("");
              setImage(null);
              setDetails((prevDetails) => ({ ...prevDetails, cropped: null }));
            }}
          >
           <div className=" flex flex-col items-center justify-center m-4 " >
           <RotateLeftRoundedIcon className="scale-125 bg-mypurple rounded-full  shadow-lg text-white" />
            <h1 className="text-slate-500 m-1 text-sm font-semibold">Reset</h1>
           </div>
          </button>
        </div>
      ) : (
        <div id="rightform" className="flex flex-col md:w-1/2 h-full">
          <h1 className="text-zinc-700 text-left text-xl font-semibold py-2">Upload Image</h1>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
            ref={inputRef}
          />
          <div
            id="upload"
            onClick={() => !image && inputRef.current.click()}
            className={`cursor-pointer flex flex-col items-center justify-center min-h-44 h-fit w-full pt-4 my-4 md:w-[80%] border-[2px] ${
              is_F1_Invalide.file ? "border-[#ff5050]" : "border-gray-400"
            } border-dashed bg-slate-50 rounded-lg`}
          >
            {image ? (
              <>
                <div style={{ position: "relative", width: 350, height: 500 }}>
                  <Cropper
                    image={image}
                    crop={crop}
                    zoom={zoom}
                    aspect={aspectRatio} // Correct aspect ratio based on orientation
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                  />
                </div>
                <button
                  className="bg-mypurple text-white py-2 px-4 rounded-full shadow-lg my-2"
                  onClick={handleCrop}
                >
                  Done
                </button>
              </>
            ) : (
              <>
                <div className="flex items-center justify-center shadow-lg w-[4rem] h-[4rem] rounded-full bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]">
                  <DriveFolderUploadIcon className="scale-150 text-white" />
                </div>
                <h1 className="text-slate-700 text-center m-2 text-xs max-w-56">
                  Drag and drop your image here or <span className="text-[#4A00E0] font-semibold">browse</span> to choose a file
                </h1>
              </>
            )}
          </div>

          <div id="guide">
            <ul className="pb-4 px-4 md:px-2 text-left text-xs text-slate-500" style={{ listStyle: "disc" }}>
              <li className="w-full">Upload a high-quality image.</li>
              <li className="w-full">Face should be clearly visible.</li>
              <li className="w-full">Do not upload a blurry image.</li>
              <li className="w-full">Max file size 50 MB.</li>
            </ul>
          </div>
          
        </div>
      )}
      <label htmlFor="additionalNotes" className="text-zinc-700 text-left md:hidden text-xl font-semibold pt-4 py-1">
          Additional Notes
        </label>
        <textarea
          id="additionalNotes"
          className="border border-gray-400 md:hidden hover:border-mypurple p-2 w-full md:w-[80%] h-22 rounded-xl resize-none"
          value={details.notes || ""}
          onChange={(e) => setDetails({ ...details, notes: e.target.value })}
          placeholder="Enter any additional notes here..."
        />
    </motion.div>
  );
}
