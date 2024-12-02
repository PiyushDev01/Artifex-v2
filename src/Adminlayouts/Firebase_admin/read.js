import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firbase.js";

const getAllOrders = async () => {
  try {
    const allOrders = []; // Array to store all orders

    // Reference to the "users" collection
    const usersRef = collection(db, "users");

    // Get all the documents (users) in the "users" collection
    const usersSnapshot = await getDocs(usersRef);

    // Iterate through each user document
    for (const userDoc of usersSnapshot.docs) {
      const uid = userDoc.id; // Get the user ID

      // Reference to the "orders" subcollection for the current user
      const ordersRef = collection(db, "users", uid, "orders");

      // Get all the documents (orders) in the user's "orders" subcollection
      const ordersSnapshot = await getDocs(ordersRef);

      // Iterate through each order document and add it to the array
      ordersSnapshot.forEach((orderDoc) => {
        allOrders.push({ userId: uid, orderId: orderDoc.id, ...orderDoc.data() });
      });
    }
  
    return allOrders; // Return the array of all orders
  } catch (error) {
    console.error("Error fetching all orders: ", error);
    return [];
  }
};



const getAllUsers = async () => {
  try {
    const usersArray = []; // Array to store all users with their details

    // Reference to the "users" collection
    const usersRef = collection(db, "users");

    // Get all the documents (users) in the "users" collection
    const usersSnapshot = await getDocs(usersRef);

     // Iterate through each user document
     usersSnapshot.forEach((doc) => {
      const userData = doc.data();
      usersArray.push({
        userId: doc.id,
        ...userData,
      });
    });

    return usersArray; // Return the array of users
  } catch (error) {
    console.error("Error fetching users: ", error);
    return [];
  }
};


export { getAllOrders, getAllUsers };
