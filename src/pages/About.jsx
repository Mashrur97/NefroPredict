import React from "react";
import SplashCursor from "../../Reactbits/SplashCursor/SplashCursor"
import Marquee from "react-fast-marquee"
const About = () => {
  return (
    <section className="py-16 bg-black text-white min-h-screen pt-40">
      <SplashCursor/>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-10">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-800/30 border border-blue-500/30 rounded-xl p-6 shadow-md hover:shadow-blue-500/20 transition duration-300">
            <img
              src="trm.png"
              alt="Aiko Tanaka"
              className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500 mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-200">Tanvir Rahman Majumdar</h3>
            <p className="text-white/80 text-sm">
              Handled all the preprocessing — from cleaning messy health data to transforming it into structured, ML-ready form. Laid the foundation for accurate predictions.
            </p>
          </div>

          <div className="bg-blue-800/30 border border-blue-500/30 rounded-xl p-6 shadow-md hover:shadow-blue-500/20 transition duration-300">
            <img
              src="alm.png"
              alt="Ren Sakamoto"
              className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500 mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-200">Al Af Muktadir</h3>
            <p className="text-white/80 text-sm">
              Developed the backend infrastructure, integrated the ML models, and ensured the system could handle user input securely and efficiently.
            </p>
          </div>

          <div className="bg-blue-800/30 border border-blue-500/30 rounded-xl p-6 shadow-md hover:shadow-blue-500/20 transition duration-300">
            <img
              src="mrf.png"
              alt="Haruto Mori"
              className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500 mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-200">Mashrur Fardin</h3>
            <p className="text-white/80 text-sm">
              Designed and built the entire user interface. Focused on creating a clean, responsive, and accessible experience for users interacting with the CKD prediction system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
