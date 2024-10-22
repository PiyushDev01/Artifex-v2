import  app  from '../firbase.js';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const handleUpload = async () => {  
    if (!image) {
      alert("Please choose a file first!");
      return;
    }
    
    try {
      const croppedImageBlob = await getCroppedImg(image, croppedAreaPixels);
      const storage = getStorage(app);
      const storageRef = ref(storage, `images/uploaded_${Date.now()}.jpg`);
      const uploadTask = uploadBytesResumable(storageRef, croppedImageBlob);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // setProgress(progress);
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.error("Upload failed:", error);
          alert("Upload failed. Please try again.");
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
         
          setDetails({ ...details, file: downloadURL });
          console.log("File available at", downloadURL);
        }
      );
    } catch (error) {
      console.error("Error uploading cropped image:", error);
      alert("Error uploading image. Please try again.");
    }

  };

export  {handleUpload};