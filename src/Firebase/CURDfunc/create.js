import app from '../firbase.js';
import {db} from '../firbase.js';
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL, getStorage } from "firebase/storage";


const submitOrder = async (details, image) => {
  try {
    const orderRef = await addDoc(collection(db, "orders"), {
      name: details.name,
      phone: details.phone,
      saveas: details.saveas,
      flat: details.flat,
      street: details.street,
      district: details.district,
      state: details.state,
      pin: details.pin,
      size: details.size,
      orientation: details.orientation,
      person: details.person,
     
      notes: details.notes,
      price: details.price,
      shipping: null,
      status: "pending",
      date: new Date(),
      payment: "pending",
      paymentId: null,
      statusMessage: "Order Placed",
    
    });
    const storage = getStorage(app);
    const storageRef = ref(storage, `orders/${orderRef.id}`);
    await uploadBytesResumable(storageRef, image);
    const downloadURL = await getDownloadURL(storageRef);
    await setDoc(doc(db, "orders", orderRef.id), { downloadURL }, { merge: true });
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export {submitOrder};