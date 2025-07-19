import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Particles from "../../Reactbits/Particles/Particles";

const steps = [
  {
    icon: "🔍",
    title: "Step 1: Enter Prediction Inputs",
    description: `To begin the process, users are prompted to enter various clinical values such as blood pressure, blood glucose, albumin levels, red blood cell count, serum creatinine, sodium, potassium, hemoglobin, and more. These values are carefully selected based on their medical relevance to Chronic Kidney Disease (CKD). The interface is designed to be clean and user-friendly, guiding even non-technical users through each input with explanations or tooltips. These inputs are not just arbitrary numbers—they represent real physiological markers that the model needs in order to perform a precise prediction. Ensuring accurate and complete data here is critical for generating reliable results later in the pipeline.`,
  },
  {
    icon: "🧠",
    title: "Step 2: Machine Learning Prediction",
    description: `Once the data is submitted, it is immediately passed to a pre-trained machine learning model that has been optimized for CKD risk assessment. This model was trained on a comprehensive dataset of real patient records, learning from patterns between clinical indicators and disease stages. It uses decision-tree-based algorithms that are both interpretable and high-performing. In milliseconds, the model processes your input and generates a risk prediction. It considers not only individual values but also how different features interact—for instance, how serum creatinine correlates with blood urea nitrogen or how hemoglobin levels might indicate anemia commonly seen in CKD patients.`,
  },
  {
    icon: "📊",
    title: "Step 3: Risk Score & Recommendation",
    description: `Based on the model’s internal decision logic, it outputs a prediction class (e.g., "Low Risk", "Medium Risk", or "High Risk") along with a numerical confidence score ranging from 0 to 100%. This dual-output approach gives users both a categorical and quantitative understanding of their CKD risk. If the result is high risk, users are advised to seek immediate medical consultation. If medium or low, the system still recommends follow-ups and healthy lifestyle tips. This output isn’t just a dry statistic—it’s designed to empower users with actionable insights, helping bridge the gap between clinical data and patient awareness.`,
  },
  {
    icon: "🔐",
    title: "Step 4: Privacy & Medical Ethics",
    description: `All predictions are computed on-the-fly; no user data is stored in any database unless explicitly consented to. This ensures maximum privacy and aligns with healthcare data handling best practices. We take ethical AI seriously—our system is built to assist, not diagnose. It never replaces professional medical opinion but instead offers early warning and education. The entire tool is compliant with modern data governance standards and includes disclaimers reminding users to always consult licensed physicians for official diagnoses. Transparency, privacy, and ethical responsibility are at the heart of how this system was built.`,
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
