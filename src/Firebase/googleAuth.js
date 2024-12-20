import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import  app  from './firbase'
import { addUserWithId } from './CURDfunc/create.js'

const auth = getAuth(app)
const provider = new GoogleAuthProvider();



async function LoginGoogle(handletoggle) {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    // console.log("User info:", user);
    addUserWithId(user);
    // window.location.reload();
   
   
  } catch (error) {
    console.error("Error during sign-in:", error);
  } finally {
    // console.log("Sign-in completed.");
    handletoggle();
  }
 
};

export default LoginGoogle