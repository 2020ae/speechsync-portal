
import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col pt-20 page-transition">
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last updated: August 2023
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <p>
              At SpeechSync, we take your privacy seriously. This Privacy Policy explains how we collect, use, and 
              protect your personal information when you use our text-to-speech service.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect the following types of information:
            </p>
            <ul>
              <li>
                <strong>Usage Data</strong> - Information about how you use our service, including the text you 
                convert to speech, the voices you select, and your interactions with our website.
              </li>
              <li>
                <strong>Technical Data</strong> - Information about your device and how you access our service, 
                including your IP address, browser type, and operating system.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide and improve our text-to-speech service</li>
              <li>Respond to your requests and support needs</li>
              <li>Analyze usage patterns to enhance user experience</li>
              <li>Protect against fraudulent or unauthorized activity</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement reasonable security measures to protect your information from unauthorized access, 
              disclosure, or destruction. However, no method of transmission over the Internet or electronic 
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              Our service may include links to third-party websites or services. We are not responsible for the 
              privacy practices of these third parties, and we encourage you to review their privacy policies.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to delete your personal information</li>
              <li>The right to object to or restrict processing of your information</li>
            </ul>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal 
              requirements. We will notify you of any material changes by posting the updated policy on our website.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about our Privacy Policy, please contact us at 
              privacy@speechsync.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
