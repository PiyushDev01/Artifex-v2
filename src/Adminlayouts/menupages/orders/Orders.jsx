
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Dashcontext } from '../../contex/DashContext.jsx';
import {formatDate} from '../../../Pages/Orders/Orderlisting/OrderList.jsx';
import { Status } from '../../../Pages/Orders/Orderlisting/OrderList.jsx';






// Main List Component
export const OrderLists = ({ rowlimit }) => {
  const [loading, setLoading] =useState(false);
  const{adminOrders, setSidebar, setCurAdminOrder} = useContext(Dashcontext);

  const[search, setSearch] = useState('');

  const handleRowClick = (index, item) => {
    
    setSidebar({ curoption: "Orderdetail", open: true });
    
    setCurAdminOrder(adminOrders.find((order) => order.orderId === item.orderId));
   
  };
  // Slice data if rowlimit is provided
  
  // Sort rows by their id
  const sortedRows = adminOrders.sort((a, b) => a.orderId.localeCompare(b.orderId));
  
  

  return (
    <div className="maincontainer w-full flex flex-col items-center">


    <div className="flex w-full justify-end items-center  px-4 py-2">
     {
      !rowlimit &&
      <input className='min-w-[30rem] p-3 rounded-full px-4  outline-none focus:border-b-4 focus:shadow-lg   border-purple-500 focus:rounded-lg transition-all ' type="text"
      onChange={(e)=>setSearch(e.target.value)} value={search}
      placeholder='Search Orders' />
     }
    </div>

      <div
      
        className= {`z-10 w-[100%] shadow-md h-[80%] ${rowlimit && " max-h-[21rem]"} bg-slate-50 rounded-2xl md:rounded-[2rem] flex overflow-hidden flex-col`} 
      >

  

        {/* Table Header */}
        <div className="flex justify-between items-center text-indigo-400 border-b-[1px] border-slate-400 h-10 py-1 px-6 m-4 text-xl font-semibold">
          <p className="hidden md:block">Order ID</p>
          <p>Name</p>
          <p className="hidden pr-10 md:block">Price</p>
          <p className="mr-6">Date</p>
          <p className="mr-6">Status</p>
        </div>

        {/* Rows or Loading Message */}
        <div className= {`flex flex-col ${rowlimit ? " overflow-hidden ": "overflow-y-auto"}   pb-4 h-fit max-h-[24rem]`}>
          {loading ? (
            <div className="flex items-center justify-center h-1/2">
              <p className="text-xl text-slate-500">Loading...</p>
            </div>
          ) : sortedRows.length > 0 ? (
            sortedRows.filter((item)=>{
              item.date.toLowerCase()
            return ( search === "" ? item : item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.orderId.toLowerCase().includes(search.toLowerCase()) ||
                    item.status.toLowerCase().includes(search.toLowerCase()) ||
                    (item.payment && item.payment.toLowerCase().includes(search.toLowerCase()))||
                    item.date.toLowerCase().includes(search.toLowerCase())
                  )
            }).reverse().map((item,index) => (
              <RowItem
                key={item.id}
                id={item.orderId}
                name={item.name}
                price={item.price+item.shipping}
                date={formatDate(item.date)}
                status={(item.payment === 'PAID' || item.payment === "Cancelled" ) && item.status==='Approved' ? item.payment : item.status}
                handleFunc={()=>handleRowClick(index,item)}
                ispaid={item.payment === 'PAID'}
              />
              
            ))
          ) : (
            <p className="text-center text-xl text-slate-400">No Orders Found</p>
          )}
        </div>
      </div>
    </div>
  );
};



const OrderList = () => {
  return <>
  <div className=' w-full'> 
    <h1  className=" text-2xl my-2 font-semibold text-slate-500"> Orders</h1>
      
      <OrderLists /> 

        </div>
  </>; // Pass rowlimit as needed
};

// Row Component
const RowItem = (props) => {

  const ispaid = props.ispaid ? 'bg-green-200' : 'bg-red-200';
 
  return (
    <div
      onClick={() => {
        props.handleFunc(); // Handle click action
      }}
      className="flex cursor-pointer justify-between items-center rounded-lg border-b-[1px] hover:bg-slate-200 border-slate-200 h-15 py-4 mx-4 md:pl-6 px-2 text-slate-500 text-xl font-semibold"
    >
      <p className="hidden md:block w-16">{props.id}</p>
      <p className="text-sm md:text-lg min-w-32 md:font-bold">
        {props.name.length > 12 ? `${props.name.substring(0, 12)}...` : props.name}
      </p>
      <p className= {`font-bold text-base text-center p-1 rounded-xl min-w-12 ${ispaid}  md:block`}>₹{props.price}</p>
      <div className=' min-w-40 '>
        <p className="text-sm md:text-lg ">{props.date}</p>
      </div>
     <div className=' min-w-32' >
     <Status status={props.status} />
     </div>
    </div>
  );
};

RowItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  handleFunc: PropTypes.func.isRequired,
};

export default OrderList;
