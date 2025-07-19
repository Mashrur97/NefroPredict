import { Link } from "react-router";
import BlurText from "../../Reactbits/BlurText/BlurText";
import DecryptedText from "../../Reactbits/DecryptedText/DecryptedText";
import ModelViewer from "../../Reactbits/ModelViewer/ModelViewer";
const Hero = () => {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('k2.png')",
      }}
    >
      <div className="hero-overlay bg-opacity-60 absolute inset-0"></div>
      {/* <ModelViewer url="Kidneys.glb" width={400} height={400} /> */}
      <div className="relative z-10 flex items-center justify-start w-full h-full px-8">
        <div className="max-w-md text-white">
          {/* <BlurText
            text="Welcome to "
            delay={150}
            animateBy="words"
            direction="top"
            className="text-5xl font-bold"
          />
          <div className="flex">
            <BlurText
              text="Nefro"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-5xl font-bold"
            />
            <BlurText
              text="Predict"
              delay={200}
              animateBy="words"
              direction="top"
              className="text-blue-400 text-5xl font-bold mb-5"
            />
          </div> */}
          <h2 className="text-5xl font-bold">Welcome to <br /> Nefro<span className="text-blue-400">Predict</span></h2><br />

          <DecryptedText
            text="NefroPredict is an AI-powered early detection tool for Chronic Kidney Disease. Using machine learning models trained on real clinical data, it helps identify CKD risk factors quickly and intuitively before it’s too late."
            animateOn="view"
            revealDirection="center"
          />
          <br />
          <Link to="/predict">
            <button className="relative mt-8 rounded-3xl px-5 py-2 overflow-hidden group bg-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Try now</span>
            </button>
          </Link>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Hero;
