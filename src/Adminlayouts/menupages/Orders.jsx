import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Dashcontext } from '../contex/DashContext.jsx';
import {formatDate} from '../../Pages/Orders/Orderlisting/OrderList.jsx';
import { Status } from '../../Pages/Orders/Orderlisting/OrderList.jsx';






// Main List Component
export const OrderLists = ({ rowlimit }) => {
  const [loading, setLoading] = React.useState(false);
  const{adminOrders} = useContext(Dashcontext);


  const handleRowClick = () => {
    console.log('Row clicked!');
  };

  // Slice data if rowlimit is provided
  const rowsToShow = rowlimit ? adminOrders.slice(0, rowlimit) : adminOrders;

  // Sort rows by their id
  const sortedRows = rowsToShow.sort((a, b) => a.orderId.localeCompare(b.orderId));

  return (
    <div className="maincontainer w-full flex flex-col items-center">
      <div
      
        className="z-10 w-[100%] shadow-md h-[80%] bg-slate-50 rounded-2xl md:rounded-[2rem] flex overflow-hidden flex-col"
      >
        {/* Table Header */}
        <div className="flex justify-between items-center text-indigo-400 border-b-[1px] border-slate-400 h-10 py-1 px-6 m-4 text-xl font-semibold">
          <p className="hidden md:block">Order ID</p>
          <p>Name</p>
          <p className="hidden md:block">Price</p>
          <p className="mr-6">Date</p>
          <p className="mr-6">Status</p>
        </div>

        {/* Rows or Loading Message */}
        <div className="flex flex-col overflow-y-auto pb-4 h-fit max-h-[24rem]">
          {loading ? (
            <div className="flex items-center justify-center h-1/2">
              <p className="text-xl text-slate-500">Loading...</p>
            </div>
          ) : sortedRows.length > 0 ? (
            sortedRows.reverse().map((item) => (
              <RowItem
                key={item.id}
                id={item.orderId}
                name={item.name}
                price={item.price+item.shipping}
                date={formatDate(item.date)}
                status={item.payment === 'PAID' && item.status==='Approved' ? item.payment : item.status}
                handleFunc={handleRowClick}
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
  <div className=' w-full'> <h1  className=" text-2xl my-2 font-semibold text-slate-500">Orders</h1>
      <OrderLists /> 

        </div>
  </>; // Pass rowlimit as needed
};

// Row Component
const RowItem = (props) => {

 
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
      <p className=" font-extrabold  md:block">₹{props.price}</p>
      <p className="text-sm md:text-lg">{props.date}</p>
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
