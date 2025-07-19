import DoctorSearch from "../Components/DoctorSearch";
import Hero from "../Components/Hero";
import Hows from "../pages/Hows";
import Counter from "./components/Counter";
const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Hows></Hows>
      <Counter></Counter>
      <DoctorSearch></DoctorSearch>
    </div>
  );
};

export default Home;
