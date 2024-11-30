import brush from "./assets/brush.png";
import delivery from "./assets/delivery.png";
import artist from "./assets/artist.png";
import profile from "./assets/profile.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const AboutUs = () => {
  return (
    <section className="bg-[#151418] relative z-10  pt-32 py-12">
      <nav className=" top-0 md:h-[5.5rem] h-[4.6rem] w-screen  left-0 md:bg-none bg-slate-50  fixed md:shadow-none shadow-md rounded-b-3xl md:rounded-none ">
        {" "}
      </nav>
      <div className=" blurcontainer ">
        <div className=" bg-gradient-to-r from-pink-800 via-purple-800 to-blue-800 max-w-full  w-[30rem] h-[20rem]  rounded-full blur-3xl -z-[5] -translate-x-[50%] left-[50%] absolute"></div>
      </div>
      <div className="max-w-7xl z-40 mx-auto px-4 text-center">
        {/* Section Header */}
        <h1 className="text-4xl font-semibold text-slate-50 mb-6">
          About{" "}
          <span className="text-5xl text-purple-400 font-bold ">Artifex</span>{" "}
        </h1>
        <p className="text-slate-100 text-lg md:text-2xl md:font-base max-w-5xl mx-auto mb-12">
          Welcome to Artifex! We bring your memories to life with custom,
          hand-crafted sketches to capture every emotion and detail. Whether
          it's a single-person, couple, or group portrait, our mission is to
          turn your special moments into timeless works of art.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-zinc-800/50 flex flex-col items-center backdrop:blur-lg shadow-md rounded-lg p-6">
            <img className=" w-20 m-4" src={brush} alt="" />
            <h2 className="text-xl font-semibold text-slate-50 mb-4">
              Personalized Art
            </h2>
            <p className="text-gray-400">
              Every portrait is tailored to your specifications, ensuring it
              perfectly matches your vision.
            </p>
          </div>
          {/* Feature 2 */}

          <div className=" bg-zinc-800/50  flex flex-col items-center backdrop:blur-lg shadow-md rounded-lg p-6">
            <img className=" w-20 m-4" src={artist} alt="" />
            <h2 className="text-xl font-semibold text-slate-50 mb-4">
              Hand-Crafted Excellence
            </h2>
            <p className="text-gray-400">
              Our skilled artists use traditional and digital methods to craft
              each masterpiece with care.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-zinc-800/50  flex flex-col items-center backdrop:blur-lg shadow-md rounded-lg p-6">
            <img className=" w-20 m-4" src={delivery} alt="" />
            <h2 className="text-xl font-semibold text-slate-50 mb-4">
              Fast & Reliable Delivery
            </h2>
            <p className="text-gray-400">
              Enjoy timely delivery of your portraits, packed securely to ensure
              they arrive in perfect condition.
            </p>
          </div>
        </div>
      </div>
      <section>
        {/**/}
        <div className="max-w-7xl mx-auto px-4 text-center mt-12">
          <h2 className="md:text-6xl text-4xl mb-6 font-semibold tracking-tighter md:tracking-[-5px] text-slate-50 md:mb-12">
            The Mind behind Artifex
          </h2>
          <div className="aboutcont flex flex-col-reverse justify-center gap-8 items-center md:flex-row h-fit my-12">
           <div className="intro flex flex-col md:items-start">
           <p className="text-slate-100 text-lg md:text-2xl h-full  md:font-base max-w-lg text-justify md:text-left px-2 py-6  ">
            <span className=" text-4xl font-serif " >"</span> Hi, I'm Piyush, a passionate sketch artist and the founder of Artifex. Driven by my love for art and creativity, I started Artifex with a vision to bring custom portraits to life. I believe that every moment holds a unique story and deserves to be preserved and cherished forever.<span className=" text-2xl font-serif " >"</span>
            </p>
           <div className="social flex flex-col md:flex-row items-center gap-4">
           <button>
              <a href="https://www.piyushdev.me/" target="_blank" className=" hover:text-slate-300 bg-gradient-to-r from-pink-800 via-purple-800 to-blue-800 text-white p-3 transition-all duration-500 px-6 shadow-lg hover:shadow-purple-800 rounded-full text-lg">
              Portfolio
              </a>
            </button>
              <div className=" flex gap-4 m-4">
              <a href="https://www.instagram.com/im_artifex/?igsh=dW0yZGN3NHNzNTM3" target="_blank"><FaInstagram className=" text-2xl hover:opacity-70 text-white" /></a>
              <a href="https://wa.me/+916392802689" target="_blank"><FaWhatsapp  className=" text-2xl  hover:opacity-70 text-white" /></a>
              <a href="mailto:piyushvishwakarma6706@gmail.com" target="_blank"><MdAlternateEmail className=" text-2xl hover:opacity-70 text-white" /></a>
              </div>
           </div>
           </div>
           
          
            <div className="pro  ">
              <img src={profile} alt="" className="rounded-3xl w-60 h-60 " />
              <h1 className=" text-slate-50 text-2xl tracking-tighter font-bold py-3" >Piyush Vishwakarma</h1>
              <p className=" text-slate-400 font-sans tracking-tighter  text-lg " >Artist & Developer</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
