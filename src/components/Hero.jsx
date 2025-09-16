import React from 'react';
import { Instagram } from 'lucide-react';

export default function Hero() {
  return (
   <div className='lg:px-20'>
     <section className="hero-gradient text-teal-900 lg:py-16 py-8 md:py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-start gap-10">
        
        {/* Left Content */}
        <div className="text-center lg:text-left">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center lg:text-6xl font-bold mt-4 mb-4 leading-snug">
            Luke AI — Holistic Wellness on WhatsApp
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto lg:mx-0 mb-6">
            Grounded in Luke Coutinho’s integrative philosophy; available 24×7 for food, fitness, sleep, 
            and lifestyle guidance—anytime, anywhere.
          </p>

          {/* CTA */}
          <div className="flex justify-center lg:justify-start gap-4 mb-6 flex-wrap">
            <a
              href="https://wa.me/"
              className="px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-full bg-white text-teal-800 hover:bg-teal-800 hover:text-white transition"
            >
              Start on WhatsApp
            </a>
            <a
              href="https://www.instagram.com/luke_coutinho?igsh=MWM2bTM2bWc3MW9tYQ=="
              className="px-6 sm:px-8 flex items-center gap-2 py-3 sm:py-4 font-semibold rounded-full bg-teal-800 text-white hover:bg-white hover:text-teal-800 transition"
            >
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </a>
          </div>

          {/* Highlights */}
          <div className="flex flex-col sm:flex-row lg:justify-center justify-center gap-4 sm:gap-6 py-6 flex-wrap text-sm md:text-base font-medium">
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full"></span>
              Instant, anytime guidance
            </span>
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full"></span>
              Trusted holistic philosophy
            </span>
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full"></span>
              13+ years of proven results
            </span>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center lg:mt-9 lg:justify-start">
          <img
            src="/images/one.jpg"
            alt="Luke AI Wellness"
            className="rounded-xl shadow-lg w-full max-w object-cover"
          />
        </div>
      </div>
    </section>
   </div>
  );
}
