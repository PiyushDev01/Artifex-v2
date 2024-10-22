import React, { useContext, useRef, useState, useEffect } from "react";
import pagesize from "./orderform-assets/pagesize 1.png";
import orient from "./orderform-assets/orient 2.png";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import RotateLeftRoundedIcon from '@mui/icons-material/RotateLeftRounded';
import Detailcontext from "./DetailContext/Detailcontext";
import Formcontext from "./OrderFormContext/FormContex";
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '../../../utils/cropImageHelper.js';

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
    setDetails((prevDetails) => ({ ...prevDetails, orientation: item }));
    setFormOneValid((prevForm) => ({ ...prevForm, orientation: false }));
  };

  return (
    <div id="formcontainer" className="flex flex-col md:flex-row w-full h-full rounded-md">
      <div id="leftform" className="flex flex-col p-2 md:w-1/2 w-full h-full gap-2">
        <div className="flex items-center">
          <img src={pagesize} className="w-6 h-6 mr-2" alt="Page Size" />
          <h1 className="text-zinc-700 text-left text-xl font-semibold py-2">Size</h1>
        </div>
        <OptionSelector 
          options={sizeOptions} 
          selectedIndex={sizeOptions.indexOf(details.size)} 
          handleClick={handleSizeClick} 
        />
        
        <div className="flex items-center md:mt-6">
          <img src={orient} className="w-6 h-6 mr-2" alt="Orientation" />
          <h1 className="text-zinc-700 text-left text-xl font-semibold py-2">Orientation</h1>
        </div>
        <OptionSelector 
          options={orientationOptions} 
          selectedIndex={orientationOptions.indexOf(details.orientation)} 
          handleClick={handleOrientationClick} 
        />

        <label htmlFor="additionalNotes" className="text-zinc-700 text-left text-xl font-semibold pt-4 py-1">
          Additional Notes
        </label>
        <textarea
          id="additionalNotes"
          className="border border-gray-400 hover:border-mypurple p-2 w-full md:w-[80%] h-22 rounded-xl resize-none"
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
            <RotateLeftRoundedIcon className="scale-125 bg-mypurple rounded-full m-4 md:m-8 shadow-lg text-white" />
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
                  Crop
                </button>
              </>
            ) : (
              <>
                <div onClick={() => inputRef.current.click()} className="flex items-center justify-center shadow-lg w-[4rem] h-[4rem] rounded-full bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]">
                  <DriveFolderUploadIcon className="scale-150 text-white" />
                </div>
                <h1 className="text-slate-700 m-2 text-xs max-w-56">
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
    </div>
  );
}
