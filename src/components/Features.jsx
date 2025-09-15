// Features.jsx
import React from "react";
import { Camera, Refrigerator, Lightbulb, Dumbbell, MessageCircle } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Camera className="w-10 h-10 text-teal-800" />,
      title: "Snap-a-Meal → Instant nutrition rating",
      description:
        "Take a photo; Luke AI scores balance (protein, fiber, quality fats), calls out hidden sugars/refined carbs, and suggests simple swaps in real time.",
    },
    {
      icon: <Refrigerator className="w-10 h-10 text-teal-800" />,
      title: "Fridge Scan → Smart meal plans",
      description:
        "Share a fridge photo; get recipes and a 2–3 day plan using what you have. Practical, Indian-friendly, and seasonally mindful.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-teal-800" />,
      title: "Daily tips from Luke",
      description:
        "A gentle feed of bite-sized habits—hydration, fiber, breathwork, sunlight, and mind-body routines—so small wins compound into real change.",
    },
    {
      icon: <Dumbbell className="w-10 h-10 text-teal-800" />,
      title: "Snap-based workout & form cues",
      description:
        "Upload a quick clip or photo; get posture cues and safer progressions (home or gym) so movement is effective and injury-aware.",
    },
    {
      icon: <MessageCircle className="w-10 h-10 text-teal-800" />,
      title: "24×7 wellness Q&A (Luke’s voice)",
      description:
        "Ask anything—late-night snack, period cramps, travel eating, sleep routines—and get answers rooted in Luke’s integrative care approach.",
    },
  ];

  return (
    <section id="features" className="py-14 ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          What Luke AI Can Do <span className="text-teal-800"></span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Discover how Luke AI helps you make smarter, healthier decisions in the moments that matter most.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-left flex flex-col"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex mt-12 justify-center gap-4 mb-6 flex-wrap">
          <a
            href="https://wa.me/"
            className="px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-full bg-teal-800 text-white hover:bg-white border-1 border-teal-800 hover:text-teal-800 transition"
          >
            
      Open WhatsApp → Say “Hi” to Luke AI
          </a>
         
        </div>
      </div>
    </section>
  );
}
