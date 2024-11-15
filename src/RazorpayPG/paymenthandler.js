const paymenthandler = async (e, currentOrder, totalAmt) => {
    e.preventDefault();
  
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
      const options = {
        key: import.meta.env.VITE_RAZORPAY_API, // Replace with your Razorpay API key
        amount: totalAmt * 100,
        currency: "INR",
        name: "Artifex",
        description: "Test Transaction",
        image: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid",
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
  