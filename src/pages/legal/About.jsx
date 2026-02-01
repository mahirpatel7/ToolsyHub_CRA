import React from "react";

function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">About ToolsyHub</h1>

      <p className="mb-4">
        ToolsyHub is a free online platform offering useful tools such as PDF
        converters, calculators, and productivity utilities.
      </p>

      <p className="mb-4">
        Our goal is to provide fast, simple, and free tools without requiring
        user registration.
      </p>

      <p className="mb-4">
        We focus on privacy, ease of use, and accessibility for everyone.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
      <p>
        Email us at:
        <br />
        <strong>support@toolsyhub.com</strong>
      </p>
    </div>
  );
}

export default About;
