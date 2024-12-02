import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Dashcontext } from '../contex/DashContext.jsx';
import {formatDate} from '../../Pages/Orders/Orderlisting/OrderList.jsx';


// Dummy data for Users
const dummyUserData = [

  { uid: "b2RMfaNJHmUZHOf2X46wcexbl6X3", name: 'Jane Smith', email: 'jane.smith@example.com', createdOn: 'FEB 14, 2024' },
  { uid: "c3RMfaNJHmUZHOf2X46wcexbl6X4", name: 'Mike Johnson', email: 'mike.johnson@example.com', createdOn: 'MAR 3, 2024' },
  { uid: "d4RMfaNJHmUZHOf2X46wcexbl6X5", name: 'Anna Williams', email: 'anna.williams@example.com', createdOn: 'APR 22, 2024' },
  { uid: "e5RMfaNJHmUZHOf2X46wcexbl6X6", name: 'Sarah Connor', email: 'sarah.connor@example.com', createdOn: 'MAY 30, 2024' },
  { uid: "f6RMfaNfJHmUZHOf2X46wcexbl6X7", name: 'Robert Brown', email: 'robert.brown@example.com', createdOn: 'JUN 18, 2024' },
  { uid: "f6RMfaNJHmUfZHOf2X46wcexbl6X7", name: 'Robert Brown', email: 'robert.brown@example.com', createdOn: 'JUN 18, 2024' },
  { uid: "f6RMfaNJsHmUZHOf2X46wcexbl6X7", name: 'Robert Brown', email: 'robert.brown@example.com', createdOn: 'JUN 18, 2024' },
];

export const totalUsers = 12;

// Row Component for Users
const UserRow = (props) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
  };

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
          <p className="text-sm md:text-lg text-left min-w-[12rem] md:font-bold">
        {/* {
          props.name.length > 15 ? props.name.substring(0, 15) + '...' : props.name
        } */}

        {props.name}
        </p>

        </div>
      
    }
      <div className="flex items-center">
       
      </div>
      <div className="flex items-center">
        <p className="hidden md:block min-w-[20rem] text-lg">
        {/* {props.email.substring(0, 18)}... */}
        {props.email}
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
  const {adminUsers} = useContext(Dashcontext);

  const handleRowClick = () => {
    console.log('User row clicked!');
  };

  // Slice data if rowlimit is provided
  const rowsToShow = rowlimit ? adminUsers.slice(0, rowlimit) : adminUsers;

  return (
    <div className="maincontainer w-full flex flex-col items-center">
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
          ) : adminUsers.length > 0 ? (
            adminUsers.map((user) => (
              <UserRow
                key={user.userId}
                uid={user.userId}
                name={user.name}
                email={user.email}
                Profile={user.photoURL}
                createdOn={formatDate(user.createdOn)}
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
      </div>
    </>
  );
};

export default User;
