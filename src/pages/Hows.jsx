import React from "react";
import Particles from "../../Reactbits/Particles/Particles";
const Hows = () => {
  return (
    
<div style={{ width: "100%", height: "100%", position: "relative",  backgroundColor: "#000000" }}>
  <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
    <Particles
      particleColors={["#ffffff", "#ffffff"]}
      particleCount={200}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={100}
      moveParticlesOnHover={true}
      alphaParticles={false}
      disableRotation={false}
    />
  </div>

  <div style={{ position: "relative", zIndex: 1, color: "white", padding: "2rem" }}>
          <div className="max-w-4xl mx-auto p-6 text-white">
  <h1 className="text-3xl font-bold mb-6 text-blue-400 drop-shadow-[0_0_10px_#60a5fa]">
    How It Works
  </h1>

  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-2 text-cyan-400 drop-shadow-[0_0_6px_#22d3ee]">
      🔍 Step 1: <span className="text-blue-300">Input Clinical Data</span>
    </h2>
    <p className="text-white/80">
      Users enter basic health metrics like blood pressure, glucose, serum creatinine, and other relevant values. These inputs are critical for assessing CKD risk.
    </p>
  </section>

  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-2 text-cyan-400 drop-shadow-[0_0_6px_#22d3ee]">
      🧠 Step 2: <span className="text-blue-300">ML Model Prediction</span>
    </h2>
    <p className="text-white/80">
      Our trained ML model analyzes the data in real-time. It finds patterns and relationships that indicate the presence of CKD, even in early stages.
    </p>
  </section>

  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-2 text-cyan-400 drop-shadow-[0_0_6px_#22d3ee]">
      📊 Step 3: <span className="text-blue-300">Risk Score & Feedback</span>
    </h2>
    <p className="text-white/80">
      The system outputs a CKD risk level (Low, Medium, High) with a confidence score. Users get guidance based on the result, including whether to seek medical advice.
    </p>
  </section>

  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-2 text-cyan-400 drop-shadow-[0_0_6px_#22d3ee]">
      🔐 Step 4: <span className="text-blue-300">Data Privacy & Ethics</span>
    </h2>
    <p className="text-white/80">
      Your data is private. We don't store or share any personal input unless explicitly permitted. This tool is meant to support—not replace—professional medical care.
    </p>
  </section>

  <section className="mt-10 text-sm text-white/60 italic">
    <p>
      ⚠️ This tool is not intended to replace professional medical advice.
      Always consult a certified healthcare provider for diagnosis and
      treatment.
    </p>
  </section>
</div>

  </div>
</div>

  );
};

export default Hows;
