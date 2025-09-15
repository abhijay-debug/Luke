

// WhyTrust.jsx
import React from "react";
import { BookOpen, Heart, Brain } from "lucide-react";

export default function Trust() {
  const reasons = [
    {
      icon: <BookOpen className="w-8 h-8 text-teal-800" />,
      title: "Built on Luke’s Body of Work",
      description:
        "Multi-pillar manifesto and science pages outline his six-pillar method. Books like The Calm Prescription and Small Wins Every Day codify practical, habit-first change.",
    },
    {
      icon: <Heart className="w-8 h-8 text-teal-800" />,
      title: "Holistic, Not Faddish",
      description:
        "Programs emphasize root-cause lifestyle change, not quick fixes. The focus is sustainable well-being, not passing trends.",
    },
    {
      icon: <Brain className="w-8 h-8 text-teal-800" />,
      title: "Evidence-Aligned",
      description:
        "AI coaching and chatbots show promising outcomes in behavior change. Accessibility and on-demand support in healthcare settings (including WhatsApp) strengthen effectiveness.",
    },
  ];

  return (
    <section id="why" className="py-10 ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Why <span className="text-teal-800">Trust Luke AI</span>?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Luke AI is grounded in science, habits, and holistic well-being—helping you create meaningful, lasting change.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-left flex flex-col items-start"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
