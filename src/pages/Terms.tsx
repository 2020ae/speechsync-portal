
import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col pt-20 page-transition">
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
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
              These Terms of Service ("Terms") govern your access to and use of SpeechSync's website and 
              text-to-speech services. By using our services, you agree to be bound by these Terms.
            </p>

            <h2>Use of Service</h2>
            <p>
              SpeechSync provides a text-to-speech conversion service that allows users to convert written text 
              into synthesized speech. You may use our service only for lawful purposes and in accordance with 
              these Terms.
            </p>
            <p>
              You agree not to use our service:
            </p>
            <ul>
              <li>In any way that violates any applicable law or regulation</li>
              <li>To engage in any activity that is harmful, fraudulent, or deceptive</li>
              <li>To transmit or upload any material that contains viruses, malware, or other harmful code</li>
              <li>To infringe upon or violate the intellectual property rights of others</li>
            </ul>

            <h2>User Content</h2>
            <p>
              By submitting text for conversion to speech, you represent and warrant that you have the necessary 
              rights to that content and that it does not violate any applicable laws or regulations.
            </p>
            <p>
              While we do not claim ownership of your content, you grant us a worldwide, non-exclusive, 
              royalty-free license to use, store, and process your content solely for the purpose of providing 
              and improving our service.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              Our service, including all software, features, and content (excluding user content), is owned by 
              SpeechSync and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              You may not copy, modify, distribute, sell, or lease any part of our service without our express 
              written permission.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, SpeechSync shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages arising out of or in connection with your use of our service.
            </p>
            <p>
              Our liability for any claims arising under these Terms shall be limited to the amount you paid us 
              for the use of our service in the 12 months preceding the claim.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We may modify these Terms from time to time. We will notify you of any material changes by posting 
              the updated Terms on our website. Your continued use of our service after such changes constitutes 
              your acceptance of the new Terms.
            </p>

            <h2>Termination</h2>
            <p>
              We may terminate or suspend your access to our service at any time, without prior notice, for any 
              reason, including if we believe that you have violated these Terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of California, 
              without regard to its conflict of law provisions.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at legal@speechsync.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
