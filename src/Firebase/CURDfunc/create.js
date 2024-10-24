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
    });

    console.log("User document successfully written!");
  } catch (e) {
    console.error("Error writing document: ", e);
  }
};


const submitOrder = async (userid, details, image) => {

  try {
    // Add order document
    const orderRef = await addDoc(collection(db, "orders"), {
      name: details.name,
      phone: details.phone,
      userID: userid, // Ensure the user ID is provided
      saveas: details.saveas,
      flat: details.flat,
      street: details.street,
      district: details.district,
      state: details.state,
      pin: details.pin,
      size: details.size,
      orientation: details.orientation,
      person: details.person,
      notes: details.notes || "", // Make sure notes aren't undefined
      price: details.price,
      shipping: null,
      status: "pending",
      date: new Date(),
      payment: "pending",
      paymentId: null,
      statusMessage: "Order Placed",
    });

    // Upload the image to Firebase Storage and get the download URL
    const storage = getStorage(app);
    const storageRef = ref(storage, `orders/${orderRef.id}`);
    await uploadBytesResumable(storageRef, image);
    const downloadURL = await getDownloadURL(storageRef);

    // Merge the download URL back into the order document
    await setDoc(doc(db, "orders", orderRef.id), { downloadURL }, { merge: true });

    // Optionally link this order to the user in the 'users' collection
    await setDoc(doc(db, "users", userid), {
      orders: arrayUnion(orderRef.id) // Use arrayUnion to add the new order ID
    }, { merge: true });
    

    return true;
  } catch (e) {
    console.error("Error submitting order: ", e);
    return false;
  }
};


export {submitOrder, addUserWithId};