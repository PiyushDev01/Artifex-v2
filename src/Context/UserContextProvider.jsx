import UserContext from "./UserContex";

import { onAuthStateChanged, getAuth } from "firebase/auth";

import { useEffect, useState, useContext } from "react";
import Detailcontext from "../Pages/Orders/OrderformSection/DetailContext/Detailcontext";

import app  from "../Firebase/firbase";

const auth = getAuth(app);
let isUserlogged = false;


const UserContextProvider = (props)=>{

  

    const [user, setuser] = useState(null);
    const [price, setprice] = useState({price:"Not Selected", person: null});
    const [uDetails, setuDetails] = useState({ name: null, image: null });
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          isUserlogged = true;
          setuser(user);
          // setDetails({...Details, userID: user.uid});
          // console.log('user:', user.uid);
          setuDetails({
            ...uDetails,
            name: user.displayName,
            image: user.photoURL,
          });
        }
      });
    }, []);


    return(
        <UserContext.Provider value={{uDetails, isUserlogged, price, setprice , user }}>
            {props.children}
        </UserContext.Provider>
    );
}
export default UserContextProvider