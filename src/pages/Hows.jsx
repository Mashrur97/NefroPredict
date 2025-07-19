import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Particles from "../../Reactbits/Particles/Particles";

const steps = [
  {
    icon: "🔍",
    title: "Step 1: Enter Prediction Inputs",
    description: `Users input key clinical values like blood pressure, glucose, albumin, creatinine, and more. These features help the model make accurate predictions. The form is simple, with tooltips for guidance.`,
  },
  {
    icon: "🧠",
    title: "Step 2: Machine Learning Prediction",
    description: `After submission, your data is analyzed by a trained ML model using decision-tree algorithms. It instantly predicts CKD risk based on patterns from real patient data.`,
  },
  {
    icon: "📊",
    title: "Step 3: Risk Score & Recommendation",
    description: `You’ll receive a CKD risk category (Low/Medium/High) with a confidence score. The app also suggests lifestyle tips or next steps based on the result.`,
  },
  {
    icon: "🔐",
    title: "Step 4: Privacy & Medical Ethics",
    description: `Your data is never stored. Predictions happen in real-time, maintaining privacy. We follow ethical AI principles and recommend consulting doctors for any medical action.`,
  },
];

const StepCard = ({ icon, title, description, disclaimer }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { twice: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-10 rounded-xl p-6 sm:p-8 bg-[#0f172a] shadow-lg"
    >
      <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-4 text-center">
        {icon} {title}
      </h2>
      <p className="text-white/80 text-base sm:text-lg leading-relaxed whitespace-pre-line">
        {description}
      </p>
      {disclaimer && (
        <p className="text-sm text-blue-500 italic mt-4">{disclaimer}</p>
      )}
    </motion.div>
  );
};

const Hows = () => {
  return (
    <div className="relative bg-black text-white w-full min-h-screen px-4 sm:px-6 md:px-10 py-20">
      <div className="absolute inset-0 -z-10">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={250}
          particleSpread={6}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
        />
      </div>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-16 text-blue-400 drop-shadow-[0_0_10px_#60a5fa]">
          How It Works
        </h1>

        {steps.map((step, idx) => (
          <StepCard key={idx} {...step} />
        ))}
      </div>
    </div>
  );
};

export default Hows;
