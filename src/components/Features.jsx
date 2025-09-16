// Features.jsx
import React from "react";
import { Camera, Refrigerator, Lightbulb, Dumbbell, MessageCircle } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          What Luke AI Can Do <span className="text-teal-800"></span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Discover how Luke AI helps you make smarter, healthier decisions in the moments that matter most.
        </p>

        {/* Features Flex Wrap */}
        <div className="w-full flex flex-wrap gap-8 items-stretch justify-center">
          
          {/* Feature 1 */}
          <div className="bg-white w-full sm:w-[45%] lg:w-[30%] flex flex-col items-center rounded-2xl shadow-md hover:shadow-xl transition p-6 text-left">
            <img
              src="/images/snap.jpg"
              alt="Snap-a-Meal"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <div className="mb-4">
              <Camera className="w-10 h-10 text-teal-800" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
              Snap-a-Meal → Instant nutrition rating
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Take a photo; Luke AI scores balance (protein, fiber, quality fats), calls out hidden sugars/refined carbs, and suggests simple swaps in real time.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white w-full sm:w-[45%] lg:w-[30%] flex flex-col items-center rounded-2xl shadow-md hover:shadow-xl transition p-6 text-left">
            <img
              src="/images/fridge.jpg"
              alt="Fridge Scan"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <div className="mb-4">
              <Refrigerator className="w-10 h-10 text-teal-800" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
              Fridge Scan → Smart meal plans
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Share a fridge photo; get recipes and a 2–3 day plan using what you have. Practical, Indian-friendly, and seasonally mindful.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white w-full sm:w-[45%] lg:w-[30%] flex flex-col items-center rounded-2xl shadow-md hover:shadow-xl transition p-6 text-left">
            <img
              src="/images/four.jpg"
              alt="Daily tips"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <div className="mb-4">
              <Lightbulb className="w-10 h-10 text-teal-800" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
              Daily tips from Luke
            </h3>
            <p className="text-gray-600 text-center text-sm">
              A gentle feed of bite-sized habits—hydration, fiber, breathwork, sunlight, and mind-body routines—so small wins compound into real change.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white w-full sm:w-[45%] lg:w-[30%] flex flex-col items-center rounded-2xl shadow-md hover:shadow-xl transition p-6 text-left">
            <img
              src="/images/snapwork.jpg"
              alt="Workout cues"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <div className="mb-4">
              <Dumbbell className="w-10 h-10 text-teal-800" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
              Snap-based workout & form cues
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Upload a quick clip or photo; get posture cues and safer progressions (home or gym) so movement is effective and injury-aware.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white w-full sm:w-[45%] lg:w-[30%] flex flex-col items-center rounded-2xl shadow-md hover:shadow-xl transition p-6 text-left">
            <img
              src="/images/voicew.jpg"
              alt="Q&A"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <div className="mb-4">
              <MessageCircle className="w-10 h-10 text-teal-800" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
              24×7 wellness Q&A (Luke’s voice)
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Ask anything—late-night snack, period cramps, travel eating, sleep routines—and get answers rooted in Luke’s integrative care approach.
            </p>
          </div>
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
