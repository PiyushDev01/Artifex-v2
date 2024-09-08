import UserContext from "./UserContex";

import { onAuthStateChanged, getAuth } from "firebase/auth";

import { useEffect, useState } from "react";

import { app } from "../Firebase/firbase";

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
          setuDetails({
            ...uDetails,
            name: user.displayName,
            image: user.photoURL,
          });
        }
      });
    }, []);


    return(
        <UserContext.Provider value={{uDetails, isUserlogged, price, setprice}}>
            {props.children}
        </UserContext.Provider>
    );
}
export default UserContextProvider