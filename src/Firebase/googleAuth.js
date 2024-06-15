import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from './firbase'

const auth = getAuth(app)
const provider = new GoogleAuthProvider();



function LoginGoogle() {
  signInWithPopup(auth, provider).then((userCredential)=>{
     const user = userCredential.user;

    window.location.reload();
  }).catch((err)=>{
    alert(err);
  })
}

export default LoginGoogle