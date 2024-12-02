import { useContext } from 'react'
import { Dashcontext } from './contex/DashContext.jsx'
import { MdDashboard } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { BiSolidBookContent } from "react-icons/bi";




const menu= [[<MdDashboard />, "Dashboard"], [<FaCartShopping />, "Orders"], [<FaUsers />, "Users"], [<MdOutlinePayments />, "Transactions"], [<BiSolidBookContent />, "Content"]]

function MenuOpt(icon, title) {

    const { sidebar, setSidebar } = useContext(Dashcontext);
    return(
       <>
      
         <div
         onClick={()=>{
            setSidebar({...sidebar, curoption: title})}
        }
         className={`flex items-center transition-all ${sidebar.curoption===title?"bg-[#8B5DFF] shadow-md text-white ":"text-slate-700"}  hover:text-white hover:bg-[#565558b1] rounded-full p-2 px-6 gap-4`}>
                {icon}
                
                <h4 className=' font-semibold' >{title}</h4>
            </div>
   
       </>
    )
}

function Leftcontent() {
  return (
    <>
    <div className="main">
        <div className="profilemy-4 flex items-center mt-4 gap-4">
            <img className=" rounded-full w-14 h-14"  src="https://www.piyushdev.me/assets/profile1-BI3Qqfr8.png" alt="" />
            <div className="name">
            <h3 className=" text-xl font-semibold " > Piyush Vishwakarma</h3>
            <h4>Founder</h4>
            </div>
        </div>

        <div className="menu flex p-6 justify-center my-4 ">
            <ul className="text-black cursor-pointer ">
                {
                    menu.map((item, index) => {
                        return(
                            <li key={index} className="my-4">
                                {MenuOpt(item[0], item[1])}
                            </li>
                        )
                    })
                }
            </ul>
        </div>

    </div>
    </>
  )
}

export default Leftcontent