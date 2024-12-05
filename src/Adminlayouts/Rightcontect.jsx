import Dashboard from "./menupages/Dashboard.jsx";
import Orders from "./menupages/orders/Orders.jsx";
import Users from "./menupages/Users";
import Transection from "./menupages/Transaction.jsx";
import Content from "./menupages/Content.jsx";
import { useContext } from 'react'
import { Dashcontext } from './contex/DashContext.jsx'
import OrderDetailsAdm from "./menupages/orders/OrderDetailsAdm.jsx";
import UserDetails from "./menupages/UserDetails.jsx";

function Rightcontect() {

  const {sidebar} = useContext(Dashcontext)

  return (
    <> 
   
      <div className="main bg-slate-200 p-8 rounded-lg flex min-h-[80vh] item-center w-full ">
       
        {sidebar.curoption === "Dashboard" && <Dashboard />}
        {sidebar.curoption === "Orders" && <Orders />}
        {sidebar.curoption === "Users" && <Users />}
        {sidebar.curoption === "Transactions" && <Transection />}
        {sidebar.curoption === "Content" && <Content />}
        {sidebar.curoption === "Orderdetail" && <OrderDetailsAdm />}
        {sidebar.curoption === "Userdetail" && <UserDetails />}
        
      </div>
      
    </>
  );
}

export default Rightcontect;
