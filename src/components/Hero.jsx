import React from 'react';
import { Instagram } from 'lucide-react';
export default function Hero() {
  return (
    <div className='lg:px-20'>
         <section className="hero-gradient text-teal-900 lg:py-16 py-4 md:py-20 text-center px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 leading-snug">
          Luke AI — Holistic Wellness on WhatsApp
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6">
          Grounded in Luke Coutinho’s integrative philosophy; available 24×7 for food, fitness, sleep, 
          and lifestyle guidance—anytime, anywhere.
        </p>

        {/* CTA */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <a
            href="https://wa.me/"
            className="px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-full bg-white text-teal-800 hover:bg-teal-800 hover:text-white transition"
          >
            Start on WhatsApp
          </a>
          <a
            href="https://wa.me/"
            className="px-6 sm:px-8 flex gap-2 py-3 sm:py-4 font-semibold rounded-full bg-white text-red-400 hover:bg-teal-800 hover:text-white transition"
          >
             Follow on Instagram
          </a>
        </div>

        {/* Highlights */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 py-6 flex-wrap text-sm md:text-base font-medium">
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full"></span>
            Instant, anytime guidance
          </span>
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full"></span>
            Trusted holistic philosophy
          </span>
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full"></span>
            13+ years of proven results
          </span>
        </div>
      </div>
    </section>
    </div>
  );
}
