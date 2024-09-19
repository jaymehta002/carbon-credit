import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-gray-300">
      <Head>
        <title>Privacy Policy | Terrasols Solutions Private Limited</title>
        <meta
          name="description"
          content="Privacy Policy of Terrasols Solutions Private Limited"
        />
      </Head>
      <Navbar />

      <div className="container mx-auto px-4 py-20 md:py-32">
        <h1 className="text-3xl font-bold mb-4 text-white">Privacy Policy</h1>
        <p>
          <strong className="text-white">Effective Date: 10/08/2024</strong>
        </p>
        <p className="mb-4">
          Terrasols Solutions Private Limited ({`"we," "our," "us"`}) is
          committed to protecting the privacy and security of our users personal
          information. This Privacy Policy outlines how we collect, use,
          disclose, and safeguard your information when you visit our website{" "}
          <a
            href="http://www.terrasols.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            terrasols.com
          </a>{" "}
          (the &quot;Website&quot;) or engage with our services.
        </p>

        <p className="mb-4">
          By using our Website, you agree to the collection and use of
          information in accordance with this Privacy Policy. If you do not agree
          with the terms, please do not use the Website.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2 text-white">
          1. Information We Collect
        </h2>

        <h3 className="text-xl font-bold mb-2 text-white">
          1.1. Personal Information
        </h3>
        <p className="mb-2">
          Personal information that you voluntarily provide when:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Filling out forms on the Website (e.g., contact forms, registration forms).</li>
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

        <h2 className="text-2xl font-bold mt-6 mb-2 text-white">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>To provide, operate, and maintain the Website and our services.</li>
          <li>To respond to inquiries and communicate with you regarding your requests.</li>
          <li>To send updates, newsletters, and other communications related to our services, if you have opted in.</li>
          <li>To improve the functionality, user experience, and content of our Website.</li>
          <li>To analyze Website usage and optimize our marketing efforts.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-2 text-white">
          3. How We Share Your Information
        </h2>
        <p className="mb-4">
          We will not sell, rent, or disclose your personal information to third
          parties except as described below:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Service Providers:</strong> We may share your information with
            trusted third-party service providers who assist us in operating our
            Website, conducting business, or providing services to you, provided
            they agree to keep your information confidential.
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose your information
            if required to do so by law or in response to valid requests by public
            authorities (e.g., court orders or government agencies).
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger,
            acquisition, or sale of our assets, your information may be
            transferred as part of the transaction.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-2 text-white">
          4. Data Security
        </h2>
        <p className="mb-4">
          We implement appropriate technical and organizational security measures
          to protect your personal information from unauthorized access,
          alteration, disclosure, or destruction. However, no method of
          transmission over the internet or electronic storage is 100% secure, and
          we cannot guarantee its absolute security.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2 text-white">
          5. Your Data Protection Rights
        </h2>
        <p className="mb-4">
          Depending on your location, you may have the following data protection
          rights:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Right to Access: You have the right to request copies of your personal data.</li>
          <li>Right to Rectification: You have the right to request that we correct any inaccurate or incomplete information.</li>
          <li>Right to Erasure: You have the right to request the deletion of your personal data, subject to legal obligations.</li>
          <li>Right to Restrict Processing: You have the right to request that we limit the processing of your personal data.</li>
          <li>Right to Object to Processing: You can object to us processing your data for direct marketing purposes.</li>
          <li>Right to Data Portability: You have the right to request that we transfer your data to another organization, where applicable.</li>
        </ul>
        <p className="mb-4">
          To exercise any of these rights, please contact us at{" "}
          <a
            href="mailto:info@netzerosolutions.in"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            info@netzerosolutions.in
          </a>
          . We will respond to your request in accordance with applicable data
          protection laws.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2 text-white">
          6. Cookies and Tracking Technologies
        </h2>
        <p className="mb-4">
          We may use cookies and similar tracking technologies to enhance your
          experience on our Website. Cookies are small text files stored on your
          device that allow us to recognize you and track your preferences. You
          may modify your browser settings to reject cookies, though some features
          of the Website may not function properly as a result.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2 text-white">
          7. Third-Party Links
        </h2>
        <p className="mb-4">
          Our Website may contain links to third-party websites that are not
          operated by us. We have no control over the content or privacy practices
          of these external websites, and we encourage you to review their privacy
          policies before providing any personal information.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2 text-white">
          8. Changes to This Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time to reflect changes in
          our practices or legal requirements. Any updates will be posted on this
          page, and the &idquo;Effective Date&idquo; will be updated accordingly. We encourage
          you to review this Privacy Policy periodically.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2 text-white">
          9. Contact Us
        </h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy, please
          contact us at:
        </p>
        <p className="mb-4">
          Terrasols Solutions Private Limited
          <br />
          Email:{" "}
          <a
            href="mailto:info@terrasols.com"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            info@terrasols.com
          </a>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
