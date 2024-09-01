import Detailcontext from "./Detailcontext";
import { useState } from "react";




const DetailProvider = ({ children }) => {

    
    
    const [details, setDetails] = useState({
        
        size: "",
        orientation: "",
        signature: true,
        file: "",
        name: "",
        phone: "",
        saveas: "",
        flat: "",
        street: "",
        pin: "",
        district: "",
        state: "",

    });

    
    


    return (
        <Detailcontext.Provider value={{
            // Add your context values here
            details,
            setDetails,
        }}>
            {children}
        </Detailcontext.Provider>
    );

};

export default DetailProvider;