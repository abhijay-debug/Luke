// WellnessContext.jsx
import React from "react";
import { Clock, Brain, TrendingUp, Users, Heart, Briefcase, BookOpen } from "lucide-react";

export default function WellnessContext() {
  return (
    <section id="ai-for-wellness" className="lg:py-20 ">
      <div className="max-w-6xl mx-auto px-6">
        {/* WHY AI FOR WELLNESS */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Why AI for Wellness 
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Point 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <Clock className="w-10 h-10 text-teal-800 mb-4" />
            <h3 className="text-xl font-semibold mb-2">24×7 Availability</h3>
            <p className="text-gray-600">
              Improves response timeliness and reduces drop-offs by being there
              anytime you need guidance.
            </p>
          </div>

          {/* Point 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <Brain className="w-10 h-10 text-teal-800 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personalization at Scale</h3>
            <p className="text-gray-600">
              Image analysis for meals, tailored workouts, and sleep prompts
              elevate precision and adherence.
            </p>
          </div>

          {/* Point 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <TrendingUp className="w-10 h-10 text-teal-800 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rising Standard</h3>
            <p className="text-gray-600">
              AI coaches are becoming mainstream in health journeys—integrated
              into wearables and coaching apps.
            </p>
          </div>
        </div>

        {/* Closing line */}
        <p className="text-center mt-8 text-gray-700 max-w-3xl mx-auto italic">
          Luke AI blends this capability with a trusted holistic lens.
        </p>

        {/* WHO IT’S FOR */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 lg:mt-14 mt-10 mb-12">
          Who it’s for
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Audience 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <Heart className="w-10 h-10 text-teal-800 mb-4" />
            <h3 className="text-lg font-semibold">Wellness Seekers</h3>
            <p className="text-gray-600">
              Anyone wanting sustainable weight, energy, gut, skin, or cycle
              improvements.
            </p>
          </div>

          {/* Audience 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <BookOpen className="w-10 h-10 text-teal-800 mb-4" />
            <h3 className="text-lg font-semibold">Clarity Seekers</h3>
            <p className="text-gray-600">
              People overwhelmed by contradictory advice who want one trusted
              compass.
            </p>
          </div>

          {/* Audience 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <Briefcase className="w-10 h-10 text-teal-800 mb-4" />
            <h3 className="text-lg font-semibold">Busy Lives</h3>
            <p className="text-gray-600">
              Professionals, parents, students—anyone who needs coaching that
              fits their lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
