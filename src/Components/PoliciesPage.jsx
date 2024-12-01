

const PoliciesPage = () => {
  return (
    <div className="max-w-4xl mx-auto pt-32 px-4 py-8">
      {/* Page Header */}
      <h1 className="text-3xl font-bold mb-6 text-center">Policies</h1>

      {/* Terms and Conditions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Terms and Conditions</h2>
        <p className="text-gray-700 mb-2">
          Welcome to Artifex! By accessing or using our website and services, you agree to comply with and be bound by these terms. Our services are subject to the following conditions:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>You must provide accurate details while placing orders.</li>
          <li>Unauthorized use of our website is prohibited.</li>
          <li>Orders are subject to acceptance and availability.</li>
          <li>All payments are made in Indian Rupees (INR).</li>
        </ul>
      </section>

      {/* Privacy Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
        <p className="text-gray-700 mb-2">
          Your privacy is important to us. Artifex collects, stores, and uses your data only to process your orders and improve our services. We ensure:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Your data is never shared without consent.</li>
          <li>Secure storage of sensitive information.</li>
          <li>Compliance with applicable data protection laws.</li>
        </ul>
      </section>

      {/* Refund and Cancellation Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Refund & Cancellation Policy</h2>
        <p className="text-gray-700 mb-2">
          At Artifex, we aim to deliver satisfaction. However, if you wish to cancel or request a refund, please note the following:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Refunds are processed within <strong>5-7 working days</strong> after approval.</li>
          <li>Cancellations are only accepted if requested before the artwork creation process begins.</li>
          <li>Physical product damage claims must be reported within 48 hours of delivery.</li>
        </ul>
      </section>

      {/* Shipping Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Shipping Policy</h2>
        <p className="text-gray-700 mb-2">
          We aim to deliver your custom portraits promptly. Our shipping policy includes:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Shipping timelines range from <strong>3 to 7 business days</strong> depending on the location.</li>
          <li>Tracking information will be shared upon dispatch.</li>
          <li>We deliver our products through our trusted logistics partner, <strong>DELHIVERY</strong> .</li>

          <li>We are not responsible for delays caused by courier services or unforeseen events.</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pricing in INR</h2>
        <p className="text-gray-700">
          All prices for products and services listed on the Artifex website are in Indian Rupees (INR). Taxes, if applicable, are included unless explicitly stated otherwise.
        </p>
      </section>

      {/* Contact Us */}
      <section className="mb-8">
        <h2 id="contact" className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-2">If you have any questions, feel free to reach out:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Email: <a href="mailto:piyush@imartifex.live" className="text-blue-600 underline">piyush@imartifex.live</a></li>
          <li>Phone: +91 6392802689</li>
          <li>Address: Knowledge Park 2, Greater Noida, Uttar Pardesh 201310</li>
        </ul>
      </section>

      {/* Products/Services */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Products and Services</h2>
        <p className="text-gray-700">
          Artifex specializes in creating custom portraits. Choose from the following options:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Single-person portraits</li>
          <li>Double-person portraits</li>
          <li>Multiple-person portraits</li>
        </ul>
        <p className="text-gray-700">
          Each portrait is crafted with care to meet your requirements. Please review the product details before placing your order.
        </p>
        <p>
        Note: The sketch will take approximately 4-5 days to complete.
        </p>
      </section>
    </div>
  );
};

export default PoliciesPage;
