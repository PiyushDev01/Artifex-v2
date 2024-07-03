import React from 'react';
    
import "./landing.css"
import Rightcontent from './homeComp/rightcontent';
import Leftcontent from "./homeComp/leftcontent";
import vectorbg from "../../assets/Vector1.webp"
import blur1 from "../../assets/Ellipse 5.webp"
import blur2 from "../../assets/Ellipse 6.webp"

export default function Landingpg(){
    return <>
    {/* <img className=' w-full absolute -z-10 top-3/4 md:top-[55%] h-96 md:h-3/4' src={vectorbg} alt="" /> */}
    {/* <div className=' w-[85%] absolute -z-10 top-[80%] md:top-[75%] rounded-3xl h-80 md:h-60' id='backdesign' style={{left:"50%", transform:"translate(-50%)"}} > */}
{/*         
    </div> */}
    <div  style={{height:"768px"}}><img className=' w-full absolute -z-20 top-0' src={blur1} alt="" />
    <img className=' w-full absolute -z-20 md:top-0 top-40' src={blur2} alt="" />
    <div className=" pt-40 md:pt-0  w-full  px-4 md:px-40 flex md:flex-row flex-col h-[768px]  " id='home'>
    <Leftcontent/>
    <Rightcontent/>
    </div>
    </div>
    <center><h1 className=' md:mt-0 mt-[12rem] text-xl p-4 md:text-3xl  text-slate-700'>Hey! We're busy working on the website. Thanks for understanding!</h1></center>

    
    </>;
}