import Dashboard from "./menupages/Dashboard.jsx";
import Orders from "./menupages/Orders";
import Users from "./menupages/Users";
import Transection from "./menupages/Transaction.jsx";
import Content from "./menupages/Content.jsx";
import { useContext } from 'react'
import { Dashcontext } from './contex/DashContext.jsx'

function Rightcontect() {

  const {sidebar} = useContext(Dashcontext)

  return (
    <> 
   
      <div className="main bg-slate-200 p-8 rounded-lg flex  item-center w-full h-full ">
       
        {sidebar.curoption === "Dashboard" && <Dashboard />}
        {sidebar.curoption === "Orders" && <Orders />}
        {sidebar.curoption === "Users" && <Users />}
        {sidebar.curoption === "Transactions" && <Transection />}
        {sidebar.curoption === "Content" && <Content />}
        
      </div>
      
    </>
  );
}

export default Rightcontect;
