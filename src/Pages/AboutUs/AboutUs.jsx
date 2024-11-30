
import brush from './assets/brush.png'
import delivery from './assets/delivery.png'
import artist from './assets/artist.png'

const AboutUs = () => {
  return (
    <section className="bg-[#151418] relative -z-20 pt-32 py-12">
        <nav className=" top-0 md:h-[5.5rem] h-[4.6rem] w-screen  left-0 md:bg-none bg-slate-50  fixed md:shadow-none shadow-md rounded-b-3xl md:rounded-none " > </nav>
        <div className=" blurcontainer ">
            <div className=" bg-gradient-to-r from-pink-800 via-purple-800 to-blue-800 max-w-full  w-[30rem] h-[20rem] -z-10 rounded-full blur-3xl  -translate-x-[50%] left-[50%] absolute" ></div>
        </div>
      <div className="max-w-7xl z-10 mx-auto px-4 text-center">
        {/* Section Header */}
        <h1 className="text-3xl font-bold text-slate-50 mb-6">About <span  className='text-4xl text-purple-400 font-bold ' >Artifex</span> </h1>
        <p className="text-slate-100 text-lg md:text-2xl md:font-bold max-w-6xl mx-auto mb-12">
          Welcome to Artifex! We bring your memories to life with custom, hand-crafted sketches to capture every emotion and detail. Whether it's a single-person, couple, or group portrait, our mission is to turn your special moments into timeless works of art.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-zinc-800/50 flex flex-col items-center backdrop:blur-lg shadow-md rounded-lg p-6">
          <img  className=' w-20 m-4' src={brush} alt="" />
            <h2 className="text-xl font-semibold text-slate-50 mb-4">
              Personalized Art
            </h2>
            <p className="text-gray-400">
              Every portrait is tailored to your specifications, ensuring it perfectly matches your vision.
            </p>
          </div>
          {/* Feature 2 */}
          
          <div className= " bg-zinc-800/50  flex flex-col items-center backdrop:blur-lg shadow-md rounded-lg p-6">
          <img  className=' w-20 m-4' src={artist} alt="" />
            <h2 className="text-xl font-semibold text-slate-50 mb-4">
              Hand-Crafted Excellence
            </h2>
            <p className="text-gray-400">
              Our skilled artists use traditional and digital methods to craft each masterpiece with care.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-zinc-800/50  flex flex-col items-center backdrop:blur-lg shadow-md rounded-lg p-6">
          <img  className=' w-20 m-4' src={delivery} alt="" />
            <h2 className="text-xl font-semibold text-slate-50 mb-4">
              Fast & Reliable Delivery
            </h2>
            <p className="text-gray-400">
              Enjoy timely delivery of your portraits, packed securely to ensure they arrive in perfect condition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
