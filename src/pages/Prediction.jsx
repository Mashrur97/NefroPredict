import { useState } from "react";
import MagnetLines from "../../Reactbits/MagnetLines/MagnetLines";
import toast, { Toaster } from "react-hot-toast";

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
    console.log(prediction);
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

      <div className="relative min-h-screen flex items-center justify-center bg-black text-white px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <MagnetLines
            rows={22}
            columns={22}
            containerSize="300vmin"
            lineColor="blue"
            lineWidth="0.5vmin"
            lineHeight="5vmin"
            baseAngle={0}
          />
        </div>

        <div className="relative z-10 w-full max-w-4xl bg-gray-900 bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-6">
            CKD Prediction
          </h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {renderButtonGroup("Age", "age", [
              "20-29",
              "30-39",
              "40-49",
              "50-59",
              "60+",
            ])}
            {renderButtonGroup("Blood Pressure", "bp", [
              "Low",
              "Normal",
              "High",
            ])}
            {renderButtonGroup("Specific Gravity", "sg", [
              "1.005",
              "1.010",
              "1.015",
              "1.020",
              "1.025",
            ])}
            {renderButtonGroup("Albumin", "al", ["0", "1", "2", "3", "4", "5"])}
            {renderButtonGroup("Sugar", "su", ["0", "1", "2", "3", "4", "5"])}
            {renderButtonGroup("Red Blood Cells", "rbc", [
              "Normal",
              "Abnormal",
            ])}
            {renderButtonGroup("Pus Cell", "pc", ["Normal", "Abnormal"])}
            {renderButtonGroup("Hemoglobin", "hemo", ["Low", "Normal", "High"])}
            {renderButtonGroup("Packed Cell Volume", "pcv", [
              "Low",
              "Normal",
              "High",
            ])}
            {renderButtonGroup("Serum Creatinine", "sc", [
              "Low",
              "Normal",
              "High",
            ])}
            {renderButtonGroup("Blood Urea", "bu", ["Low", "Normal", "High"])}
            {renderButtonGroup("Sodium", "sod", ["Low", "Normal", "High"])}
            {renderButtonGroup("Potassium", "pot", ["Low", "Normal", "High"])}

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
