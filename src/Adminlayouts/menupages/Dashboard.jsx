
import { OrderLists } from './Orders';

import { useContext } from 'react';
import { Dashcontext } from '../contex/DashContext';



function Dashboardcard({title, value, opentab}) {
  const {sidebar,setSidebar} = useContext(Dashcontext);

  return (
    <div 
   onClick={()=>{
    setSidebar({...sidebar, curoption: opentab})
   }}
    className="flex flex-col items-center hover:bg-zinc-100 transition-all rounded-xl justify-center w-full p-4 bg-white shadow-md">
      <h1 className="text-2xl font-semibold text-slate-800 ">{value}</h1>
      <p className="text-sm text-slate-500">{title}</p>
    </div>
  )
} 

function Dashboard() {
  const{totalorder,totaluser,totalpays, totalrevenue} = useContext(Dashcontext);

  const dashdtl = [{title: "Total Revenue 🤑", value: '₹'+totalrevenue, open:"Dashboard"} , {title: "Total Orders 🛒", value: totalorder, open:"Orders"}, {title: "Total Users 😉", value: totaluser, open:"Users" },{title: "Total Transaction 💲", value: totalpays, open:"Transactions"}]


  return (
    <>
    <div className="maincontainer  w-full flex flex-col items-center   ">
        <div className=' w-full my-4 '>
        <h1  className=" text-2xl font-semibold text-slate-500">Dashboard</h1>
        <div className="cardcontainer flex gap-2 my-2">
        {
          dashdtl.map((item, index) => {
            return <Dashboardcard key={index} title={item.title} value={item.value} opentab={item.open} />
          })
        }
        </div>
        </div>
        <div className=' w-full'> <h1  className=" text-2xl my-2 font-semibold text-slate-500">Recent Orders</h1>
      <OrderLists rowlimit={5} /> 

        </div>
       
    </div>
    </>
  )
}

export default Dashboard