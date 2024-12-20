import sideimg from "../../../assets/sideimage.webp"
import { motion } from "framer-motion"
import { fadeIn } from "../../../Framer/fadein";
import CardSwiper from './Swipers/CardSwiper';




export default function Rightcontent(){
    return<>
    <div className="md:w-1/2 text-center md:px-0 md:py-0 pb-16  flex justify-center items-center  md:translate-x-0 md:translate-y-8  ">
    <CardSwiper/>
    </div>
    </>;
} 