
function Features() {
  return (
    <>
    <section className=" w-full h-[20vh] gap-8 flex flex-row justify-center items-center mb-4 " >
        <div className=" left gap-4 h-full w-[30%] flex flex-col justify-center items-center">
            <h1 className=" md:text-lg text-sm  text-center font-semibold text-slate-500" >Logistics
            </h1>
            <img className="w-52" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Delhivery_Logo_%282019%29.png/1200px-Delhivery_Logo_%282019%29.png?20190506185741" alt="" />
        </div>
        <div className=" right gap-2  h-full w-[30%] flex flex-col justify-center items-center">
            <h1 className=" md:text-lg text-sm text-center font-semibold text-slate-500" >Secure Payments
            </h1>
            <img className="w-52" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Razorpay_logo.png/1200px-Razorpay_logo.png?20201121143022" alt="" />
        </div>
    </section>
    </>
  )
}

export default Features