// AboutLuke.jsx
import React from "react";
import { BookOpen, Heart, Leaf } from "lucide-react";

export default function AboutLuke() {
  return (
    <section id="about" className="lg:py-16 py-8 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8">About Luke</h2>

        {/* Content Card */}
        <div className="bg-white shadow-md rounded-2xl p-8 md:p-12 relative">
          {/* Decorative Icons */}
          <div className="absolute -top-5 -left-5 bg-green-100 p-3 rounded-full shadow">
            <Leaf className="w-6 h-6 text-teal-800" />
          </div>
          <div className="absolute -bottom-5 -right-5 bg-yellow-100 p-3 rounded-full shadow">
            <Heart className="w-6 h-6 text-teal-800" />
          </div>

          {/* Main Text */}
          <p className="text-gray-700 text-lg leading-relaxed">
            <span className="font-semibold text-green-700">Luke Coutinho</span> pioneered a 
            holistic, integrative approach to lifestyle medicine—uniting{" "}
            <span className="font-medium">nutrition, movement, sleep, emotional and spiritual 
            health, and breath</span> into practical, everyday routines.
          </p>
          <p className="text-gray-600 text-md leading-relaxed mt-6">
            His programs and books aim to democratize lifestyle change with{" "}
            <span className="font-medium text-teal-800">love, science, and simplicity</span>,
            making wellness accessible for all.
          </p>

          {/* Icon Row */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="flex flex-col items-center">
              <BookOpen className="w-7 h-7 text-teal-800 mb-2" />
              <span className="text-sm text-gray-600">Author</span>
            </div>
            <div className="flex flex-col items-center">
              <Leaf className="w-7 h-7 text-teal-800 mb-2" />
              <span className="text-sm text-gray-600">Holistic Approach</span>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="w-7 h-7 text-teal-800 mb-2" />
              <span className="text-sm text-gray-600">Lifestyle Change</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
