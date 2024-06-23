import Nav from "./Components/nav";
import Landingpg from "./Pages/Home/landingpage";
import OrderPrice from "./Pages/Orders/OrderPrice";

import { onAuthStateChanged, getAuth } from "firebase/auth";

import { useEffect, useState } from "react";

import { app } from "./Firebase/firbase";

const auth = getAuth(app);

export let isUserlogged = false;

function App() {
  const [user, setuser] = useState(null);
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

  return (
    <>
      <div className=" relative">
        <Nav profile={uDetails.image}></Nav>
        <Landingpg></Landingpg>
      </div>
      <OrderPrice />
    </>
  );
}

export default App;
