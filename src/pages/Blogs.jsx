import React, { useState } from "react";
import Squares from "../../Reactbits/Squares/Squares";

const blogPosts = [
  {
    title: "🌿 The Unsung Heroes: What Kidneys Really Do",
    fullContent: `Most people don’t think much about their kidneys—until something goes wrong. But these small, bean-shaped organs are silently responsible for maintaining your body’s internal balance. They filter waste and toxins from the blood, regulate fluid and electrolyte levels, and help control blood pressure. Without functioning kidneys, your body would be unable to maintain homeostasis, and toxic buildup would occur within days. They may be small, but their impact is immense.`,
    date: "12-3-2021",
  },
  {
    title: "🧪 Signs Your Kidneys Might Be in Trouble",
    fullContent: `Kidney issues can develop slowly and silently. Common early signs include fatigue, frequent urination, swelling in the feet and ankles, and difficulty concentrating. Because these symptoms are often mistaken for other conditions—or ignored entirely—many people don’t realize they have kidney problems until the damage is advanced. That’s why awareness, routine blood and urine tests, and a proactive approach to health are essential.`,
    date: "1-5-2019",
  },
  {
    title: "🍽️ Eat for Your Kidneys: Foods That Help",
    fullContent: `A kidney-friendly diet doesn’t have to be bland. Incorporate foods like berries, apples, cauliflower, and red bell peppers, which are low in potassium and phosphorus but high in antioxidants. Avoid heavily processed foods and limit salt intake. Staying hydrated with water (not sugary drinks) also supports healthy kidney function. What’s good for your kidneys is often good for your heart and overall health too.`,
    date: "2-9-2024",
  },
  {
    title: "🏃‍♂️ Kidney Health and Lifestyle: It’s All Connected",
    fullContent: `Did you know that regular exercise, not smoking, and managing stress all contribute to kidney health? Your kidneys are affected by lifestyle diseases like diabetes and hypertension, which means caring for your whole body protects them, too. Even small changes—like taking a walk after dinner or switching to whole grains—can have a cumulative positive effect.`,
    date: "21-4-2025",
  },
  {
    title: "🧭 Kidneys: The Body’s Natural Navigators",
    fullContent: `We don’t often think of our kidneys as decision-makers, but in many ways, they are. Each day, they choose what stays in your body and what needs to leave—a quiet kind of wisdom built into your biology. They sift through every drop of blood, deciding how much water to keep, which electrolytes to balance, and when to raise a flag to other organs. They even activate hormones that tell your bones to grow and your blood pressure to stabilize.`,
    date: "29-5-2020",
  },
];

const Blogs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="relative w-full bg-black text-white min-h-screen overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.2}
          squareSize={40}
          direction="diagonal"
          borderColor="#1e3a8a"
          hoverFillColor="#1e1e1e"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl text-center font-bold mb-8 text-blue-400">
          Blogs
        </h1>

        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="space-y-3 p-5 rounded-2xl bg-blue-950 text-white shadow-md shadow-blue-900/30 mb-6"
          >
            <p className="font-semibold text-xl text-blue-300">{post.title}</p>
            <div className="py-3 border-y border-dashed border-blue-700">
              <p className="text-blue-100">
                {expandedIndex === index
                  ? post.fullContent
                  : post.fullContent.slice(0, 180) + "..."}
              </p>
              <button
                onClick={() => toggleReadMore(index)}
                className="text-blue-400 mt-2 font-semibold hover:underline"
              >
                {expandedIndex === index ? "Show less ▲" : "Read more ▼"}
              </button>
            </div>
            <p className="text-sm text-blue-500">Added at: {post.date}</p>
          </div>
        ))}

        <div className="text-center mt-10">
          <button className="relative rounded-3xl px-5 py-2 overflow-hidden group bg-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Post your own blog</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
