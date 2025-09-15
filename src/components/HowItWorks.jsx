// HowItWorks.jsx
import React from "react";
import { MessageCircle, Upload, Sparkles, RefreshCw, Video } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8 text-teal-800" />,
      title: "Start a Chat",
      description: "Open WhatsApp and begin your conversation with Luke AI.",
    },
    {
      icon: <Upload className="w-8 h-8 text-teal-800" />,
      title: "Ask or Upload",
      description: "Share a meal, fridge photo, or workout routine to get tailored advice.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-teal-800" />,
      title: "Instant Guidance",
      description: "Receive actionable tips along with a daily micro-habit to build consistency.",
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-teal-800" />,
      title: "Refine & Repeat",
      description: "Re-ask, refine, and repeat—Luke AI supports you all week long.",
    },
  ];

  return (
    <section id="works" className="lg:py-10 py- ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          How It Works <span className="text-teal-800">(Simple, Transparent)</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          A seamless way to get personalized, holistic support right inside WhatsApp.
        </p>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Optional Add-ons */}
        {/* <div className="bg-white rounded-2xl shadow-md p-6 inline-flex items-center gap-4">
          <Video className="w-6 h-6 text-red-500" />
          <p className="text-gray-700">
            <span className="font-semibold">Optional add-ons:</span> periodic live webinars & Q/A with Luke’s team.
          </p>
        </div> */}
      </div>
    </section>
  );
}
