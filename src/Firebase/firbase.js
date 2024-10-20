
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";





const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: "artifex-6c972",
  storageBucket: "artifex-6c972.appspot.com",
  messagingSenderId: "449704828852",
  appId: "1:449704828852:web:6d0a02163901ab6e6a1ce1",
  databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db , app as default};
