import app from '../firbase.js';
import {db} from '../firbase.js';
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL, getStorage } from "firebase/storage";
import { arrayUnion } from "firebase/firestore";


 // List of admin emails is hardcoded for simplicity

const addUserWithId = async (user) => {
  if (!user || !user.uid) {
    console.error("Invalid user data. UID is required.");
    return;
  }
const adminlist = ["piyushvishwakarma6706@gmail.com", "piyushvishwakarma6707@gmail.com"];
  try {
    const isadmin = adminlist.includes(user.email);
    // Set user data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      name: user.displayName || "Anonymous", // Handle if displayName is missing
      email: user.email || "No email provided", // Handle if email is missing
      photoURL: user.photoURL || "",
      admin: isadmin, // Optional, empty string if missing
      orders: arrayUnion() || [], // Use arrayUnion to ensure existing orders are not removed
    }, { merge: true });

    console.log("User document successfully written!");
  } catch (e) {
    console.error("Error writing document: ", e);
  }
};




const submitOrder = async (userid, details, image) => {
  
  // Order ID generation logic
  const generateOrderId = () => {
    const timestamp = Math.floor(Date.now() / 10000); //take only starting 9 digits Current timestamp in milliseconds
    // const randomPart = Math.floor(1000 + Math.random() * 9000); // Random 4-digit number
    return `ORD${timestamp}`; // Combine for a unique order ID
  };

  const { size, orientation, cropped, notes, name, phone, saveas, flat, street, pin, district, state , price, person } = details;

  const orderId = generateOrderId(); // Generate the order ID

  const Orderdetails = {
    size,
    orientation,
    cropped,
    notes,
    name,
    phone,
    saveas,
    flat,
    street,
    pin,
    district,
    state,
    price,
    person,
    date: new Date().toISOString(),
    status: "Submitted",
    payment: null,
    paymentId: null,
    paymentDate: null,
    total: null,
    shipping: null,
    statusMessage: "Your order has been successfully submitted. Thank you for your interest!",
  };

  try {
    // Add order document to Firestore under user's "orders" subcollection
    const orderRef = doc(db, "users", userid, "orders", orderId);
    await setDoc(orderRef, {
      ...Orderdetails,
      downloadURL: "" // Placeholder for the image download URL
    });

    // Upload the image to Firebase Storage and get the download URL
    const storage = getStorage();
    const storageRef = ref(storage, `orders/${orderId}`); // Use the generated orderId for the storage reference
    await uploadBytesResumable(storageRef, image); // Upload the image
    const downloadURL = await getDownloadURL(storageRef); // Get the download URL

    // Merge the download URL into the order document in Firestore
    await setDoc(orderRef, { downloadURL }, { merge: true });

    // Optionally link this order to the user's document in the 'users' collection
    await setDoc(doc(db, "users", userid), {
      orders: arrayUnion(orderId) // Use arrayUnion to add the new order ID to the user's "orders" array
    }, { merge: true });

    return true; // Return true on successful submission
  } catch (e) {
    console.error("Error submitting order: ", e);
    return false;
  }
};


export {submitOrder, addUserWithId};