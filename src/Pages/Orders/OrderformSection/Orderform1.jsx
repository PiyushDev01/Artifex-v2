import React, { useContext, useRef, useState } from "react";
import pagesize from "./orderform-assets/pagesize 1.png";
import orient from "./orderform-assets/orient 2.png";
import { Switch } from "@mui/material";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import RotateLeftRoundedIcon from '@mui/icons-material/RotateLeftRounded';
import Detailcontext from "./DetailContext/Detailcontext";
import Formcontext from "./OrderFormContext/FormContex";
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '../../../utils/cropImageHelper.js';
import  app  from '../../../Firebase/firbase.js';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


// note that the size and orientation options are hardcoded here for now

const sizeOptions = ["A4", "A5", "A3"];
const orientationOptions = ["Portrait", "Landscape"];

function Orderform1() {
  

  const [image, setImage] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [url, setUrl] = useState("");
  const [isUploading, setIsUploading] = useState("Upload Image");

  const [progress, setProgress] = useState(0);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1)
  const inputref = useRef(null);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Create a URL for the selected image
    }
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels); // Save the cropped area
  };

  const handleUpload = async () => {  
    if (!image) {
      alert("Please choose a file first!");
      return;
    }
    setIsUploading("Uploading...");
    try {
      const croppedImageBlob = await getCroppedImg(image, croppedAreaPixels);
      const storage = getStorage(app);
      const storageRef = ref(storage, `images/uploaded_${Date.now()}.jpg`);
      const uploadTask = uploadBytesResumable(storageRef, croppedImageBlob);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.error("Upload failed:", error);
          alert("Upload failed. Please try again.");
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setUrl(downloadURL);
          setDetails({ ...details, file: downloadURL });
          console.log("File available at", downloadURL);
        }
      );
    } catch (error) {
      console.error("Error uploading cropped image:", error);
      alert("Error uploading image. Please try again.");
    }
    setIsUploading("Uploaded");
  };


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
       
        

      
          <label htmlFor="additionalNotes" className="text-zinc-700 text-left text-xl font-semibold pt-4 py-1">
            Additional Notes
          </label>
          <textarea
            id="additionalNotes"
            className="border border-gray-400 hover:border-mypurple p-2 w-full md:w-[80%] h-22 rounded-xl  resize-none"
            value={details.notes || ""}
            onChange={(e) => setDetails({ ...details, notes: e.target.value })}
            placeholder="Enter any additional notes here..."
          />
        


      </div>
      {
        // Right side of the form
        details.file ? (
        <div className=" flex items-center md:w-[50%] md:flex-row justify-center flex-col ">
        <img className=" rounded-lg shadow-2xl md:w-[40%] my-8 w-[80%] " src={details.file} alt="" />
        <button onClick={ ()=>{ 
          setDetails({ ...details, file: null });
          setUrl("");
          setImage(null);
         } } ><RotateLeftRoundedIcon className=" scale-125 bg-mypurple rounded-full m-4 md:m-8 shadow-lg  text-white" /></button>
        </div>
      
      ):(
          <>
          {/* Right side of the form */}
      <div id="rightform" className=" flex flex-col  md:w-1/2 h-full">
        <h1 className="text-zinc-700 text-left text-xl font-semibold py-2">Upload Image</h1>
        
        {/* Upload area */}

        <input 
         type="file"
         accept="image/*"
         style={{ display: "none" }}
         onChange={handleImageChange}
         ref={inputref}
        />
        <div
          id="upload" 
          className={`cursor-pointer flex flex-col items-center justify-center h-fit w-full pt-4 my-4  md:w-[80%] border-[2px] ${
                is_F1_Invalide.file ? "border-[#ff5050]":"border-gray-400"
              } border-dashed bg-slate-50 rounded-lg`}
        >
          {
            image ? (
              <>
              <div style={{ position: 'relative', width: 350, height: 500 }}>
                <Cropper
                  image={image}
                  crop={crop}
                  zoom={zoom}
                  aspect={1 / 1.414}  // A4 ratio
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                />
              </div>
              <br />
              <button className=" bg-mypurple text-white py-2 px-4 rounded-full shadow-lg" onClick={handleUpload}>{isUploading}</button>
              <br />
              
            </>
            ) : (
              <>
          <div
            id="uploadcircle" onClick={() => inputref.current.click()} 
            className="flex items-center justify-center shadow-lg w-[4rem] h-[4rem] rounded-full bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]"
          >
            <DriveFolderUploadIcon className="scale-150 text-white" />
          </div>
          <h1 className="text-slate-700 m-2 text-xs max-w-56">
            Drag and drop your image here or <h1 className="text-[#4A00E0] font-semibold">browse</h1> to choose a file
          </h1>
          </>
            )
          }
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
          </>
        )
      }
    </div>
  );
}

export default Orderform1;
