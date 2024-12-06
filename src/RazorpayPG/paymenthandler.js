import {formatDate} from "../Pages/Orders/Orderlisting/OrderList";
import {sendStatusEmail} from "../mailer/EmailSender.js";

const paymenthandler = async (e,setPaymentpopup, currentOrder, totalAmt, paymentUpdate, userID, setCurrentOrder) => {
  
    // Ensure Razorpay is loaded
    if (!window.Razorpay) {
      console.error("Razorpay SDK is not loaded. Please check the script in your HTML.");
      return;
    }
  
    // Fetch order details from backend
    try {
      const response = await fetch("https://artifex-backend.vercel.app/api/payment/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: totalAmt * 100, // Amount in smallest currency unit
          currency: "INR",
          receipt: currentOrder.id,
        }),
      });
  
      const orderData = await response.json();                                      
      if (!orderData.id) {
        console.error("Invalid order data returned from backend:", orderData);
        return;
      }
  
      // Razorpay options
      //razorpay api changed to live mode on vercel deployment
      const options = {
        //live api is not working yet so using test api
        key: import.meta.env.VITE_RAZORPAY_API, // Replace with your Razorpay API key
        amount: totalAmt * 100,
        currency: "INR",
        name: "Artifex",
        description: "Test Transaction",
        image: "https://artifex2.vercel.app/assets/titlelogo2-BXg4v1iZ.webp",
        order_id: orderData.id,
        handler: async (razorpayResponse) => {
          try {
            const captureResponse = await fetch("https://artifex-backend.vercel.app/api/payment/capture/validate", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(razorpayResponse),
            });
            const jsonResponse = await captureResponse.json();
            console.log("Payment verification response:", jsonResponse);
            if (jsonResponse.msg === "success") {
              console.log("Payment captured successfully!");
              // alert("Payment successful!");
              // Update the current order
              setCurrentOrder({ ...currentOrder, payment: "PAID", paymentId: jsonResponse.paymentId, paymentDate: new Date().toISOString(), total: totalAmt });
              setPaymentpopup(true);
              // TODO: Send email of payment confirmation to both admin and user 
                 
              try {
                const curtime = new Date().toISOString();
                await paymentUpdate(userID, currentOrder.id, "PAID", jsonResponse.paymentId, formatDate(curtime), totalAmt);
                
              } catch (error) {
                console.error("Error updating payment status:", error);
              } finally {
                await sendStatusEmail(currentOrder.email, currentOrder, "PAID",currentOrder.id);
              }     
            } else {
              console.error("Payment not captured:", jsonResponse.error);
            }
          } catch (error) {
            console.error("Error in payment capture:", error);
          }
        },
        prefill: {
          name: currentOrder.name,
          email: currentOrder.email,
          contact: currentOrder.phone,
        },
        notes: {
          address: "Artifex online craft warehouse",
        },
        theme: {
          color: "#7435cc",
        },
      };
  
      // Open Razorpay checkout
      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response) => {
        console.error("Payment failed:", response.error);
        alert(`Payment failed: ${response.error.description}`);
      });
      rzp.open();
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };
  
  export default paymenthandler;
  