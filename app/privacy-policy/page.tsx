import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-sans text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-8 border-b pb-4">Privacy Policy</h1>

      <p className="mb-6 text-lg">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          1. Information We Collect
        </h2>
        <p className="leading-relaxed">
          We collect information that you provide directly to us, such as when
          you create an account, subscribe to our newsletter, or contact us for
          support. This may include your name, email address, and any other
          information you choose to provide.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          2. How We Use Your Information
        </h2>
        <p className="leading-relaxed">We use the information we collect to:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>Provide, maintain, and improve our services.</li>
          <li>Send you technical notices, updates, and security alerts.</li>
          <li>Respond to your comments, questions, and requests.</li>
          <li>
            Communicate with you about products, services, and promotions.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          3. Data Security For LabbyTV
        </h2>
        <p className="leading-relaxed">
          We take reasonable measures to help protect information about you from
          loss, theft, misuse, and unauthorized access, disclosure, alteration,
          and destruction.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          4. Contact Us
        </h2>
        <p className="leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us
          at:
          <br />
          <span className="font-semibold mt-2 block">support@labbytv.com</span>
        </p>
      </section>

      <div className="mt-12 text-sm text-gray-500 border-t pt-6">
        &copy; {new Date().getFullYear()} LabbyTV. All rights reserved.
      </div>
    </div>
  );
}
