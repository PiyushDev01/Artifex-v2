import Detailcontext from "./Detailcontext";
import { useState , useContext } from "react";







const DetailProvider = ({ children }) => {
    
   
    const [details, setDetails] = useState({
        size: null,
        orientation: null,
        cropped:null,
        notes: null,
        file: null,
        name: null,
        phone: null,
        saveas: null,
        flat: null,
        street: null,
        pin: null,
        district: null,
        state: null,
        price: null,
        person: null,
        email:null,
        // userID: null,
    });

    const [currentOrder, setCurrentOrder] = useState(null);

    
    


    return (
        <Detailcontext.Provider value={{
            // Add your context values here
            details,
            setDetails,
            currentOrder,
            setCurrentOrder
        }}>
            {children}
        </Detailcontext.Provider>
    );

};

export default DetailProvider;