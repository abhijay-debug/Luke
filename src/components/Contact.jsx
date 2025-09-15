// StartJourney.jsx
import React from "react";
import { MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="lg:py-20 py-10  bg-white  text-center"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Your Journey
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl mb-10">
          Your next healthy choice is just a message away.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center">
            <div className="flex  justify-center gap-4 mb-2 flex-wrap">
          <a
            href="https://wa.me/"
            className="px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-full bg-teal-800 text-white border-1 border-teal-800 transition"
          >
            
          Open WhatsApp → Chat with Luke AI
          </a>
          
        </div>
      <div className="flex items-center flex-col">
        <span>| </span>
          <span className="font- text-teal-800 text-xl">OR</span>
          <span>|</span>
      </div>
          <div className="flex  justify-center gap-4 mt-2 mb-4 flex-wrap">
          <a
            href="https://wa.me/"
            className="px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-full bg-white text-whit hover:bg-white htext-teal-800 border-1 border-teal-800 transition"
          >
            
         <span className="text-teal-800"> Fill the form</span> → Connect with Luke AI
          </a>
          
        </div>
        </div>
      </div>
    </section>
  );
}
