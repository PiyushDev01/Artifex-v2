import { createContext } from "react";
import { useState } from "react";


const Dashcontext = createContext();

//wrap the app with the context provider

const DashProvider = ({ children }) => {

    const [sidebar, setSidebar] = useState({ curoption: "Dashboard", open: false });

    const [adminOrders, setAdminOrders] = useState([]);
    const [adminPayments, setAdminPayments] = useState([]);
    const [adminUsers, setAdminUsers] = useState([]);
    const [totalorder, settotalorder] = useState(0);
    const [totalrevenue, setTotalrevnue] = useState(0);
    const [totaluser, setTotaluser] = useState(0);
    const [totalpays, setTotalpays] = useState(0);
   

    return <Dashcontext.Provider value={
        {
            sidebar,
            setSidebar,
            adminOrders, setAdminOrders,
            adminPayments, setAdminPayments,
            adminUsers, setAdminUsers,
            totalorder, settotalorder,
            totalrevenue, setTotalrevnue,
            totaluser, setTotaluser,
            totalpays, setTotalpays
        }

    }>{children}</Dashcontext.Provider>;
    };

export { Dashcontext, DashProvider };   