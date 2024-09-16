import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-gray-300">
      <Head>
        <title>Privacy Policy | NetZero Solutions Private Limited</title>
        <meta
          name="description"
          content="Privacy Policy of NetZero Solutions Private Limited"
        />
      </Head>
      <Navbar/>

      <div className="container mx-auto px-4 py-20 md:py-32">
        <h1 className="text-3xl font-bold mb-4 text-white">Privacy Policy</h1>
        <p>
          <strong className="text-white">Effective Date: 10/08/2024</strong>
        </p>
        <p className="mb-4">
          NetZero Solutions Private Limited ({`"we," "our," "us"`}) is committed
          to protecting the privacy and security of our users&#39; personal
          information. This Privacy Policy outlines how we collect, use,
          disclose, and safeguard your information when you visit our website{" "}
          <a
            href="http://www.NetZero.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            netzerosolutions.in
          </a>{" "}
          (the &quot;Website&quot;) or engage with our services.
        </p>

        <p className="mb-4">
          By using our Website, you agree to the collection and use of
          information in accordance with this Privacy Policy. If you do not
          agree with the terms, please do not use the Website.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2 text-white">
          1. Information We Collect
        </h2>

        <h3 className="text-xl font-bold mb-2 text-white">1.1. Personal Information</h3>
        <p className="mb-2">
          We may collect personal information that you voluntarily provide when:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Filling out forms on the Website (e.g., contact forms, registration
            forms).
          </li>
          <li>Subscribing to our newsletter or requesting services.</li>
          <li>Communicating with us via email or other methods.</li>
        </ul>
        <p className="mb-2">This information may include:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company name</li>
          <li>Address</li>
          <li>Any other personal information you choose to provide.</li>
        </ul>

        <h3 className="text-xl font-bold mb-2 text-white">
          1.2. Non-Personal Information
        </h3>
        <p className="mb-2">
          Non-personal information may be automatically collected when you visit
          our Website. This includes:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>IP address</li>
          <li>Browser type</li>
          <li>Operating system</li>
          <li>Pages viewed on the Website</li>
          <li>Date and time of visit</li>
          <li>Referring website address (if applicable)</li>
        </ul>

        {/* ... Rest of the content ... */}

        <h2 className="text-2xl font-bold mt-6 mb-2 text-white">9. Contact Us</h2>
        <p className="mb-2">
          If you have any questions about this Privacy Policy or how we handle
          your personal information, please contact us at:
        </p>
        <address className="not-italic mb-4">
          <strong className="text-white">NetZero Solutions Private Limited</strong>
          <br />
          Email:{" "}
          <a
            href="mailto:info@netzerosolutions.in"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            info@netzerosolutions.in
          </a>
          <br />
          Address: 49, Divine, G Noida, 201306
          <br />
          Phone: +91 8789374657
        </address>

        <p>
          By using our Website, you consent to our Privacy Policy. Thank you for
          trusting NetZero Solutions Private Limited with your information.
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default PrivacyPolicy;