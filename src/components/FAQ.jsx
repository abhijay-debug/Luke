import React from 'react';

const faqs = [
  { q: "Is it medical advice?", a: "No. Luke AI offers general wellness education. It does not replace your doctor." },
  { q: "Why WhatsApp?", a: "Lower friction = better habits. Coaching improves access and adherence." },
  { q: "Is my data safe?", a: "Yes. Interactions are private; no resale of chat content." },
  { q: "Will I still get human touch?", a: "Yes—Luke AI is your daily layer; you can add webinars/consults when needed." },
];

export default function FAQ() {
  return (
    <section id="faq" className="lg:py-1 py-10 lg:mb-10 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">FAQs</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((f, i) => (
          <div key={i} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="font-semibold text-lg text-teal-700 mb-2">{f.q}</h3>
            <p className="text-sm">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

