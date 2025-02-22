import React from 'react';
import PropTypes, { string } from 'prop-types';
import { useContext } from 'react';
import { Dashcontext } from '../contex/DashContext.jsx';
import {formatDate} from '../../Pages/Orders/Orderlisting/OrderList.jsx';
import { FaCrown } from "react-icons/fa6";
import toast, { Toaster } from 'react-hot-toast';

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  // alert(text+" Copied to clipboard")
  toast.success(text+" Copied to clipboard")
};
// Row Component for Users
const UserRow = (props) => {


  return (
    <div
      onClick={() => {
        props.handleFunc(); // Handle click action
      }}
      className="flex cursor-pointer justify-between items-center rounded-lg border-b-[1px] hover:bg-slate-200 border-slate-200 h-15 py-4 mx-4 md:pl-6 px-2 text-slate-500 text-xl font-semibold"
    >
      
    {
      
        <div className="flex gap-4 items-center">
          <img src={props.Profile} className="w-10 h-10 rounded-full" />
          <p className="text-sm flex items-center gap-2 md:text-lg text-left min-w-[12rem] md:font-bold">
        {
          props.name.length > 18 ? props.name.substring(0, 15) + '...' : props.name
        }

        {props.isadmin && <FaCrown className=' animate text-yellow-500' />}
        </p>

        </div>
      
    }
      <div className="flex items-center">
       
      </div>
      <div className="flex items-center">
        <p className="hidden md:block min-w-[20rem] text-lg">
        {props.email.substring(0, 18)}...
        {/* {props.email} */}
        <button onClick={() => copyToClipboard(props.email)} className="ml-2 text-sm text-blue-500">Copy</button>
        </p>
      </div>
      <div className=" flex items-center">
        <p className=" min-w-24 hidden md:block w-20">{props.uid.substring(0, 6)}...</p>
        <button onClick={() => copyToClipboard(props.uid)} className="ml-2 text-sm text-blue-500">Copy</button>
      </div>
      <p className="text-sm md:text-lg">{props.createdOn}</p>
    </div>
  );
};

UserRow.propTypes = {
  uid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  Profile: PropTypes.string.isRequired,
  handleFunc: PropTypes.func.isRequired,
};

// Main List Component for Users
export const UserLists = ({ rowlimit }) => {
  const [loading, setLoading] = React.useState(false);
  const {adminUsers, setSidebar} = useContext(Dashcontext);
  const [search, setSearch] = React.useState('');

  const handleRowClick = () => {
    // console.log('User row clicked!');
    // setSidebar({ curoption: 'Userdetail', open: true });
  };

  // Slice data if rowlimit is provided
  const rowsToShow = rowlimit ? adminUsers.slice(0, rowlimit) : adminUsers;

  // Sort users by createdOn date
  const sortedUsers = [...rowsToShow].sort((a, b) => new Date(b.createdOn) - new Date(a.createdOn));

  return (
    <div className="maincontainer w-full flex flex-col items-center">
      <div className="flex justify-between items-center  px-4 py-2">

<input className='min-w-[40rem] p-3 rounded-full px-4 w-full outline-none focus:border-b-4 focus:shadow-lg   border-purple-500 focus:rounded-lg transition-all ' type="text"
      onChange={(e)=>setSearch(e.target.value)} value={search}
      placeholder='Search Orders' />
      </div>


      <div
        id="container1"
        className="z-10 shadow-md w-[100%] h-[80%] bg-slate-50 py-4 rounded-2xl md:rounded-[2rem] flex overflow-hidden flex-col"
      >
        {/* Rows or Loading Message */}
        <div className="flex flex-col overflow-y-auto h-fit max-h-[24rem]">
          {loading ? (
            <div className="flex items-center justify-center h-1/2">
              <p className="text-xl text-slate-500">Loading...</p>
            </div>
          ) : sortedUsers.length > 0 ? (
            sortedUsers.filter((item)=>{
              return ( search === "" ? item : item.name.toLowerCase().includes(search.toLowerCase()) ||
              item.email.toLowerCase().includes(search.toLowerCase()) ||
              item.createdOn.toLowerCase().includes(search.toLowerCase()) ||
              item.userId.toLowerCase().includes(search.toLowerCase())||
              (search.toLowerCase() === "admin" && item.admin === true)
              )
            }).map((user) => (
              <UserRow
                key={user.userId}
                uid={user.userId}
                name={user.name}
                email={user.email}
                Profile={user.photoURL}
                createdOn={formatDate(user.createdOn)}
                isadmin={user.admin}
                handleFunc={handleRowClick}
              />
            ))
          ) : (
            <p className="text-center text-xl text-slate-400">No Users Found</p>
          )}
        </div>
      </div>
   
    </div>
    
  );
};

UserLists.propTypes = {
  rowlimit: PropTypes.number,
};

const User = () => {
  return (
    <>
      <div className="w-full">
        <h1 className="text-2xl my-2 font-semibold text-slate-500">Users</h1>
        <UserLists/>
        <Toaster />
      </div>
     
    </>
  );
};

export default User;
