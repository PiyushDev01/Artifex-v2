 
import Leftcontent from './Leftcontent';
import Rightcontect from './Rightcontect';
import {getAllOrders, getAllUsers} from './Firebase_admin/read.js';
import { Dashcontext } from './contex/DashContext.jsx';
import { useContext, useEffect } from 'react';

function AdminDash() {
  const { settotalorder, setAdminOrders, setAdminUsers, setTotaluser } = useContext(Dashcontext);

  useEffect(() => {
    const fetchData = async () => {
      const orders = await getAllOrders();
      const users = await getAllUsers();
      setAdminOrders(orders);
      settotalorder(orders.length);
      setAdminUsers(users);
      console.log(users);
      setTotaluser(users.length);
    };
    fetchData();
  }, []);



  return (
   <div className="containerz  h-[100vh] flex items-center justify-center bg-slate-50">
    <div className="leftaside   h-[100%] pt-[6rem] px-4 w-[20%] hidden md:flex justify-center">
        <Leftcontent />
    </div>
    <h1 className=' md:hidden'>OPEN ON DESKTOP MODE</h1>
    <div className="rightaside h-[100%] pt-[6rem] hidden px-4 w-full md:flex items-center justify-center ">
      <Rightcontect />
    </div>
   </div>
  )
}

export default AdminDash