import React from "react";

function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At ToolsyHub, your privacy is important to us. This Privacy Policy
        explains what data we collect and how we use it.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Files uploaded for processing (temporarily)</li>
        <li>Usage data such as pages visited</li>
        <li>Basic analytics and cookies</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">File Handling</h2>
      <p className="mb-4">
        Uploaded files are processed temporarily and automatically deleted.
        We do not permanently store any user files.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Analytics</h2>
      <p className="mb-4">
        We use Google Analytics to understand how users interact with our tools.
        Google Analytics may collect anonymized usage data and cookies.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
      <p>
        If you have any questions, contact us at:
        <br />
        <strong>support@toolsyhub.com</strong>
      </p>
    </div>
  );
}

export default PrivacyPolicy;
