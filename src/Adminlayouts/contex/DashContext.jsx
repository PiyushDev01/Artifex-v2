import { createContext } from "react";
import { useState } from "react";


const Dashcontext = createContext();

//wrap the app with the context provider

const DashProvider = ({ children }) => {

    // Sidebar State
    const [sidebar, setSidebar] = useState({ curoption: "Dashboard", open: false });
    const [refresh, setRefresh] = useState(false);


    // Admin Dashboard Data
    const [adminOrders, setAdminOrders] = useState([]);
    const [adminPayments, setAdminPayments] = useState([]);
    const [adminUsers, setAdminUsers] = useState([]);
    const [totalorder, settotalorder] = useState(0);
    const [totalrevenue, setTotalrevnue] = useState(0);
    const [totaluser, setTotaluser] = useState(0);
    const [totalpays, setTotalpays] = useState(0);


    // Order Details

    const [curAdminOrder, setCurAdminOrder] = useState(null);
    const [curAdminPayment, setCurAdminPayment] = useState({});
   

    return <Dashcontext.Provider value={
        {
            // Sidebar State
            sidebar,
            setSidebar,
            refresh,
            setRefresh,

            // Admin Dashboard Data
            adminOrders, setAdminOrders,
            adminPayments, setAdminPayments,
            adminUsers, setAdminUsers,
            totalorder, settotalorder,
            totalrevenue, setTotalrevnue,
            totaluser, setTotaluser,
            totalpays, setTotalpays,

            // Order Details
            curAdminOrder, setCurAdminOrder,
            curAdminPayment, setCurAdminPayment
        }

    }>{children}</Dashcontext.Provider>;
    };

export { Dashcontext, DashProvider };   