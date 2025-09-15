import React from 'react';

const benefits = [
  "🍽️ Food clarity (no more plate confusion)",
  "🏃 Consistent movement (simple routines you actually do)",
  "😴 Better sleep (wind-down practices; morning energy)",
  "🧘 Lower stress (breath, boundaries, tiny resets)",
  "🔥 Momentum (daily nudges = fewer “fall-offs”)",
];

export default function Benefits() {
  return (
    <section id="feel" className="py-20  px-6">
      <h2 className="text-3xl font-bold text-teal-800 text-center mb-8">What You’ll Feel in 2–4 Weeks</h2>
      <ul className="max-w-3xl mx-auto space-y-3 text-lg">
        {benefits.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </section>
  );
}

