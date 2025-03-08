
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col pt-20 page-transition">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">About SpeechSync</h1>
            <p className="text-muted-foreground">
              Learn more about our mission and the technology behind our text-to-speech platform.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h2>Our Mission</h2>
            <p>
              At SpeechSync, our mission is to make high-quality text-to-speech technology accessible to everyone. 
              We believe that voice synthesis has the power to transform how we consume content, making information 
              more accessible and engaging.
            </p>
            
            <h2>The Technology</h2>
            <p>
              Our text-to-speech engine is built on advanced deep learning models that have been trained on thousands 
              of hours of natural speech. This allows us to generate voices that sound remarkably human, with natural 
              intonation, rhythm, and emphasis.
            </p>
            <p>
              Unlike traditional text-to-speech systems that sound robotic and unnatural, our technology captures 
              the nuances of human speech, making it suitable for a wide range of applications, from content creation 
              to accessibility tools.
            </p>
            
            <h2>Use Cases</h2>
            <ul>
              <li>
                <strong>Content Creation</strong> - Create voiceovers for videos, podcasts, and other content without 
                the need for professional recording equipment or voice talent.
              </li>
              <li>
                <strong>Accessibility</strong> - Make written content accessible to people with visual impairments or 
                reading difficulties.
              </li>
              <li>
                <strong>Language Learning</strong> - Hear how words and phrases are pronounced by native speakers to 
                improve pronunciation and listening comprehension.
              </li>
              <li>
                <strong>Storytelling</strong> - Bring stories to life with expressive voice narration, creating a more 
                immersive experience for listeners.
              </li>
            </ul>
            
            <h2>Our Team</h2>
            <p>
              SpeechSync was founded by a team of AI researchers and engineers with a passion for natural language 
              processing and speech synthesis. With decades of combined experience in the field, our team is dedicated 
              to pushing the boundaries of what's possible with text-to-speech technology.
            </p>
            
            <div className="not-prose mt-12">
              <Link to="/contact" className="text-primary hover:underline inline-flex items-center">
                Get in touch with our team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
