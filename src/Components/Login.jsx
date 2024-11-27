import "./nav.css";
import { motion } from "framer-motion"
import googleIcon from "../assets/google.svg";
import facebookIcon from "../assets/facebook.svg";
import logo from "../assets/titlelogo2.webp";
import mail from "../assets/mail.png"
import LoginGoogle from "../Firebase/googleAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const pending=()=>{
  toast.warning('This feature is under development please try another option',{
    position: "top-center",
    draggable: true,
    theme: "dark",
  });
}

function Login({handlelgn}) {


  return (
    <>
    <div
      className={`hidden md:flex flex-col bg-gray-600 justify-center items-center z-10 w-full h-screen absolute top-0 left-0 `}
      id="lgfadebg"
    onClick={handlelgn}
      
    ></div>
    
    <div className={`hidden md:flex flex-col justify-center items-center w-screen h-screen absolute top-0 left-0  `} >
      <motion.div
       
        className=" md:z-20 w-fit p-10 md:py-20 rounded-3xl h-fit bg-gray-200  flex flex-col items-center "
        id="lgbox"
        
      >
        <h1
          id="lgh1"
          className=" text-zinc-900 text-2xl md:text-3xl flex items-center gap-3 mb-4 md:mb-8"
        >
          Sign in to{" "}
          <img
            src={logo}
            className=" w-10 drop-shadow-xl "
          />
        </h1>
        <div onClick={LoginGoogle} className="cursor-pointer border-gray-300 border-2 hover:bg-gray-300 transition-all rounded-full w-74 md:w-96 px-8 md:px-10 py-3 md:py-3 my-4 flex h-fit items-center gap-3">
          <img src={googleIcon} className=" w-10 drop-shadow-xl " />
          <h2 className="text-lg md:text-2xl text-gray-800 ">sign in with Google</h2>
        </div>
      <div onClick={pending} className="cursor-pointer border-gray-300 border-2 hover:bg-gray-300 transition-all rounded-full w-74 md:w-96 px-6 md:px-10 py-3 md:py-3 my-4 flex h-fit items-center gap-3">
          <img src={facebookIcon} className=" w-10 drop-shadow-xl " />
          <h2 className="text-lg md:text-2xl text-gray-800 ">sign in with Facebook</h2>
        </div>
        

        <h1 className=" text-lg">or</h1>
        
        <div onClick={pending} className="cursor-pointer border-gray-300 border-2 hover:bg-gray-300 transition-all rounded-full w-74 md:w-96 px-8 md:px-10 py-3 md:py-3 my-4 flex h-fit items-center gap-3">
          <img src={mail} className=" w-10 drop-shadow-xl "  />
          <h2 className="text-lg md:text-2xl text-gray-800 ">sign in with Email</h2>
        </div>
      </motion.div>
      <ToastContainer />
      </div>
      </>
  );
}

export default Login;
