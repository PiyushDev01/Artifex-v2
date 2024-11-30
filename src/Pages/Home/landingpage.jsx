import "./landing.css";
import Rightcontent from "./homeComp/rightcontent";
import Leftcontent from "./homeComp/leftcontent";
import vectorbg from "../../assets/Vector1.webp";
import blur1 from "../../assets/Ellipse 5.webp";
import blur2 from "../../assets/Ellipse 6.webp";

export default function Landingpg() {
  return (
    <>
      
      <div className=" h-[120vh] md:h-[100vh] w-full ">
        <img
          className=" w-[100%] md:h-full absolute overflow-hidden -z-20 top-0"
          src={blur1}
          alt=""
        />
        <img
          className=" w-full absolute md:h-full -z-20 md:top-0 top-40"
          src={blur2}
          alt=""
        />
        <div
          className=" pt-24 md:pt-0 h-[100vh] w-full px-4 md:px-40 flex md:flex-row flex-col md:h-[768px]   "
          id="home"
        >
          <Leftcontent />
          <Rightcontent />
        </div>
      </div>
      {/* <center>
        <h1 className=" md:mt-0 mt-[12rem] text-xl py-8 md:text-3xl  text-slate-700">
          We're currently working on the website. Thank you for your
          understanding!
        </h1>
      </center> */}
      
    </>
  );
}
