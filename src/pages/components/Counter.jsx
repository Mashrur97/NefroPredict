import React from "react";
import CountUp from "react-countup";
import { Database, Settings2, BarChart3 } from "lucide-react";

const Counter = () => {
  return (
    <div className="bg-black px-5">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-blue-400 drop-shadow-[0_0_10px_#60a5fa]">
        Project Highlights
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-[#0f172a] rounded-2xl p-8 text-white   shadow-md hover:shadow-blue-800/40 transition duration-300">
          <div className="mb-4">
            <Database className="w-10 h-10 text-blue-400" />
          </div>
          <p className="opacity-70 text-sm mb-1">Dataset Size</p>
          <h1 className="text-3xl font-bold text-blue-300">
            <CountUp
              enableScrollSpy
              scrollSpyDelay={200}
              end={6529}
              duration={8}
            />
          </h1>
        </div>

        <div className="bg-[#0f172a] rounded-2xl p-8 text-white   shadow-md hover:shadow-blue-800/40 transition duration-300">
          <div className="mb-4">
            <Settings2 className="w-10 h-10 text-green-400" />
          </div>
          <p className="opacity-70 text-sm mb-1">Features Selected</p>
          <h1 className="text-3xl font-bold text-green-300">
            <CountUp
              end={18}
              duration={10}
              enableScrollSpy
              scrollSpyDelay={200}
            />
          </h1>
        </div>

        <div className="bg-[#0f172a] rounded-2xl p-8 text-white   shadow-md hover:shadow-blue-800/40 transition duration-300">
          <div className="mb-4">
            <BarChart3 className="w-10 h-10 text-pink-400" />
          </div>
          <p className="opacity-70 text-sm mb-1">Total Predictions</p>
          <h1 className="text-3xl font-bold text-pink-300">
            <CountUp
              end={20}
              duration={10}
              enableScrollSpy
              scrollSpyDelay={200}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Counter;
