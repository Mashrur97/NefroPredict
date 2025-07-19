import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Marquee from "react-fast-marquee"
const Predict = () => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState(null);

  const handleClick = (field, value) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted values:", inputs);

    const prediction = "Prediction: CKD Detected";
    setResult(prediction);
    toast.success(prediction);
  };

  const renderButtonGroup = (label, field, options) => (
    <div key={field}>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            type="button"
            key={opt}
            onClick={() => handleClick(field, opt)}
            className={`px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white ${
              inputs[field] === opt
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300"
            } hover:border-blue-500 transition`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-black">
        <Marquee speed={80} gradient={true} gradientColor="black" autoFill={true}>
          <p className="text-white/60 italic p-5">
            ⚠️ This tool does not provide medical advice and is intended for
            informational use only.
          </p>
        </Marquee>
      </div>
      <div className="bg-black">
      <h2 className="text-3xl font-bold text-center pb-5 text-white">CKD Prediction</h2>
      </div>
      <div className="relative min-h-screen flex items-center justify-center bg-black text-white px-4 overflow-hidden">
        <div className="relative z-10 w-full  bg-gray-900 bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="">
            <div className="lg:flex justify-around ">
            <div className="space-y-5">
            {renderButtonGroup("Pus Cells in Urine", "pus_cells", ["Normal", "Abnormal"])}
            {renderButtonGroup("Age of the Patient", "age", ["<30", "30-50", "51-70", "70+"])}
            {renderButtonGroup("Body Mass Index (BMI)", "bmi", ["Underweight", "Normal", "Overweight", "Obese"])}
            {renderButtonGroup("Sodium Level (mEq/L)", "sodium", ["Low", "Normal", "High"])}
            {renderButtonGroup("eGFR", "egfr", ["<15", "15-29", "30-59", "60-89", "90+"])}
            {renderButtonGroup("Urine Protein-to-Creatinine Ratio", "urine_protein", ["Normal", "Elevated", "Severely Elevated"])}
            {renderButtonGroup("Duration of Diabetes (years)", "diabetes_duration", ["0", "1-5", "6-10", "10+"])}
            {renderButtonGroup("CRP Level", "crp", ["Normal", "Elevated"])}
            {renderButtonGroup("Sugar in Urine", "urine_sugar", ["0", "1", "2", "3", "4", "5"])}
            </div>
            <div className="space-y-5">
            {renderButtonGroup("Cystatin C Level", "cystatin_c", ["Low", "Normal", "High"])}
            {renderButtonGroup("IL-6 Level", "il6", ["Normal", "Elevated"])}
            {renderButtonGroup("WBC Count (cells/cumm)", "wbc", ["Low", "Normal", "High"])}
            {renderButtonGroup("Cholesterol Level", "cholesterol", ["Low", "Normal", "High"])}
            {renderButtonGroup("Serum Phosphate Level", "phosphate", ["Low", "Normal", "High"])}
            {renderButtonGroup("Serum Albumin Level", "albumin", ["Low", "Normal"])}
            {renderButtonGroup("Family History of CKD", "family_history", ["Yes", "No"])}
            {renderButtonGroup("Bacteria in Urine", "bacteria", ["Present", "Absent"])}
            {renderButtonGroup("Appetite", "appetite", ["Good", "Poor"])}
            </div>
            </div><br />
            <div className="md:col-span-2">
              <button
                type="submit"
                className="relative w-full rounded-3xl px-5 py-3 overflow-hidden group bg-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Predict</span>
              </button>
            </div>
          </form>

          {result && (
            <div className="mt-6 text-center text-lg font-semibold text-green-400">
              {result}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Predict;
