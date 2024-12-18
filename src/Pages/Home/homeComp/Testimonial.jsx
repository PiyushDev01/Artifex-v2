import { RiDoubleQuotesL } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const feedbacks = {
    feedback1: {
        name: "shalinivishu038",
feedback: "How can you play so beautifully with just a single pencil...hats off..🔥🔥🔥🔥 Amazing art skills❤️"
    },
    feedback2: {
        name: "alive_mannequin",
        feedback: "Absolutely stunning sketches! I ordered a custom portrait 😍.The detail and creativity blew us away. Highly recommend!"
    },
    feedback3: {
        name: "Rajeev",
        feedback: "I couldn’t believe how life like the sketch turned out. It perfectly captured the emotions in the photo. A wonderful gift idea!"
    },
    
}

function Testimonial() {
  return (
    <>
    <section className="maincontainer relative w-full min-h-[100vh] h-fit flex justify-center p-4  " >
        <div className="bgcircle w-96 rounded-full -z-10 top-32 blur-[8rem] h-52 bg-pink-400 absolute "></div>
            <div className=" flex flex-col items-center gap-4 md:p-8 md:w-[80%] ">
                <p id="leftp" className=" text-slate-700" >Testimonials</p>
                <h2 className="md:text-6xl text-3xl mb-6 font-semibold tracking-tighter md:tracking-[-5px] text-slate-700 md:mb-12">
            Public Cheers For Us
          </h2>
            <div className=" w-full flex flex-wrap justify-center" >
                {
                    Object.values(feedbacks).map((feedback, index) => {
                        return(
                            <FeedbackCard key={index} name={feedback.name} feedback={feedback.feedback} />
                        )
                    })
                }
            </div>

            </div>
    </section>
    </>
  )
}

export default Testimonial

function FeedbackCard(props){
    return(
        <>
        <div className=" flex flex-col justify-between   md:w-[20rem] p-8 bg-slate-200/25 md:m-4 rounded-lg shadow-lg">
            <h1 className=" md:text-lg  font-sans pb-2 text-slate-700" >
            <RiDoubleQuotesL />
            {props.feedback} <br />
            </h1>
            <span className=" md:text-2xl text-slate-800 flex items-center gap-2 font-bold  " > <FaInstagram /> {props.name}</span> 
        </div>
        </>
    )
}