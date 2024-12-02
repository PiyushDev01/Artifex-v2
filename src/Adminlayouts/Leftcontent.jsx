import { useContext } from 'react'
import { Dashcontext } from './contex/DashContext.jsx'
import  UserContext  from '../Context/UserContex.js'
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
         className={`flex items-center duration-300 transition-all ${sidebar.curoption===title?"bg-[#8B5DFF] shadow-md text-white ":"text-slate-700"}  hover:text-white hover:bg-zinc-400 rounded-full p-2 px-6 gap-4`}>
                {icon}
                
                <h4 className=' font-semibold' >{title}</h4>
            </div>
   
       </>
    )
}

function Leftcontent() {

    const {uDetails} = useContext(UserContext);

  return (
    <>
    <div className="main">
        <div className="profile mx-4 flex items-center mt-8 gap-4">
            <img className=" rounded-full w-12 h-12"  src={uDetails.image} alt="" />
            <div className="name">
            <h3 className=" text-lg leading-5 font-semibold " >{uDetails.name} </h3>
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