import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase/firbase.js";

const updateShippingCharge = async (orderId, shippingCharge) => {
    try {
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

            // Iterate through each order document
            for (const orderDoc of ordersSnapshot.docs) {
                if (orderDoc.id === orderId) {
                    // Update the shipping charge for the order
                    const orderRef = doc(db, "users", uid, "orders", orderDoc.id);
                    await updateDoc(orderRef, { shipping: shippingCharge });
                    console.log(`Shipping charge updated for order ${orderId} of user ${uid}`);
                }
            }
        }
    } catch (error) {
        console.error("Error updating shipping charge: ", error);
    }
};

const updateStatus = async (orderId, status) => {
    try {
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

            // Iterate through each order document
            for (const orderDoc of ordersSnapshot.docs) {
                if (orderDoc.id === orderId) {
                    // Update the status for the order
                    const orderRef = doc(db, "users", uid, "orders", orderDoc.id);
                    await updateDoc(orderRef, { status: status });
                    console.log(`Status updated for order ${orderId} of user ${uid}`);
                }
            }
        }
    } catch (error) {
        console.error("Error updating status: ", error);
    }
};

export { updateShippingCharge,  updateStatus };
