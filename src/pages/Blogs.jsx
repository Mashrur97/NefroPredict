import React, { useState } from "react";
import { motion } from "framer-motion";

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
    fullContent: `We don’t often think of our kidneys as decision-makers, but in many ways, they are. Each day, they choose what stays in your body and what needs to leave—a quiet kind of wisdom built into your biology. They sift through every drop of blood, deciding how much water to keep, which electrolytes to balance, and when to raise a flag to other organs. They even activate hormones that tell your bones to grow and your blood pressure to stabilize. It’s easy to overlook them—until they stop working. But like the best navigators, they’ve been guiding your body in the right direction all along.`,
    date: "29-5-2020",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Blogs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl text-center font-semibold mb-8"
      >
        Blogs
      </motion.h1>

      {blogPosts.map((post, index) => (
        <motion.div
          key={index}
          className="space-y-3 border border-gray-200 p-5 rounded-2xl bg-gray-200 mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <p className="font-semibold text-xl">{post.title}</p>
          <div className="py-3 border-y border-dashed border-gray-400">
            <p className="text-gray-800">
              {expandedIndex === index
                ? post.fullContent
                : post.fullContent.slice(0, 150) + "..."}
            </p>
            <button
              onClick={() => toggleReadMore(index)}
              className="text-green-500 mt-2 font-semibold hover:underline"
            >
              {expandedIndex === index ? "Show less ▲" : "Read more ▼"}
            </button>
          </div>
          <p className="text-sm opacity-75">Added at: {post.date}</p>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center"
      >
        <button className="relative rounded-3xl px-5 py-2 overflow-hidden group bg-green-600 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Post your own blog</span>
        </button>
      </motion.div>
    </div>
  );
};

export default Blogs;
