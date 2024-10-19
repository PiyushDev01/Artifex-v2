
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";





const firebaseConfig = {
  apiKey: "AIzaSyBz5cErPebBeA33noZsbGVD8_CbvsUPWEE",
  authDomain: "artifex-6c972.firebaseapp.com",
  projectId: "artifex-6c972",
  storageBucket: "artifex-6c972.appspot.com",
  messagingSenderId: "449704828852",
  appId: "1:449704828852:web:6d0a02163901ab6e6a1ce1",
  databaseURL: "https://artifex-6c972-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db , app as default};
