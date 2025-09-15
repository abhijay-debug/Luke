
import React from "react";// FeelSection.jsx
import { CheckCircle } from "lucide-react";

export default function FeelSection() {
  const benefits = [
    { emoji: "🍽️", text: "Food clarity (no more plate confusion)" },
    { emoji: "🏃", text: "Consistent movement (simple routines you actually do)" },
    { emoji: "😴", text: "Better sleep (wind-down practices; morning energy)" },
    { emoji: "🧘", text: "Lower stress (breath, boundaries, and tiny resets)" },
    { emoji: "🔥", text: "Momentum (daily nudges = fewer “fall-offs”)" },
  ];

  return (
    <section id="feel" className="lg:py-10  ">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          What You’ll Feel in <span className="text-teal-800">2–4 Weeks</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          These match the core lifestyle levers that move the needle across metabolic and hormonal health.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition"
            >
             <div className="flex items-center gap-4 ">
                 <div className="text-2xl shrink-0 w-4 h-4 rounded-full bg-teal-800"></div>
              <p className="text-gray-700 text-left">{item.text}</p>
             </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
