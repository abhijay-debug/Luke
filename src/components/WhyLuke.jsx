// WhyNow.jsx
import React from "react";
import { Clock, UserCheck, Activity, Smartphone } from "lucide-react";

export default function WhyNow() {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-teal-800" />,
      title: "Accessibility",
      description:
        "Guidance when you need it, not just during scheduled sessions.",
    },
    {
      icon: <UserCheck className="w-8 h-8 text-teal-800" />,
      title: "Personalization",
      description:
        "Real-time dietary assessment from images; tailored feedback for activity and sleep.",
    },
    {
      icon: <Activity className="w-8 h-8 text-teal-800" />,
      title: "Behavior Change",
      description:
        "AI coaches can improve engagement and health behaviors across nutrition, activity, and mental well-being.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-teal-800" />,
      title: "On Familiar Rails",
      description:
        "WhatsApp delivery lowers friction and increases adherence.",
    },
  ];

  return (
    <section id="why-now" className="py-14 ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Why Luke AI, and Why Now
        </h2>

        {/* Intro Text */}
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12">
          For 13+ years, Luke’s work has helped people transform health through holistic
          lifestyle medicine—deep cellular nutrition, movement, quality sleep, emotional
          wellness, spiritual health, and breath.  
          <br />
          <br />
          The challenge has been access and consistency: people need timely, trustworthy
          answers in the moment of decision (plate, pantry, or gym). AI closes this gap by
          bringing Luke’s teachings to you instantly (no appointments), personally (based
          on your input), and at scale so more people can benefit every day.
        </p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
