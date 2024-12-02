
import {db} from '../firbase.js';
import { collection, doc, getDocs, getDoc } from "firebase/firestore";


const getOrders = async (uid) => {
    try {
        const ordersArray = []; // Array to store all orders
    
        // Reference to the "orders" subcollection for the specific user
        const ordersRef = collection(db, "users", uid, "orders");
    
        // Get all the documents (orders) in the user's orders subcollection
        const querySnapshot = await getDocs(ordersRef);
    
        // Iterate through each document and add the order data to the array
        querySnapshot.forEach((doc) => {
          ordersArray.push({ id: doc.id, ...doc.data() }); // Push the order data and ID into the array
        });
        

        return ordersArray; // Return the array of orders
      } catch (error) {
        console.error("Error fetching orders: ", error);
        return [];
      }
};


const checkAdmin = async (uid) => {
    try {
        const userRef = doc(db, "users", uid);
        const userDoc = await getDoc(userRef);
        return userDoc.data().admin;
      } catch (error) {
        console.error("Error checking admin status: ", error);
        return false;
      }
}

export { getOrders , checkAdmin};   