import { Helmet } from "react-helmet-async";
import Faculty from "../Component/Faculty";
import HealthTips from "../Component/HealthTips";
import HeroSection from "../Component/HeroSection";
import PopularServices from "../Component/PopularServices";
import Testimonial from "../Component/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - MedConsultPro</title>
      </Helmet>
      <div>
        <HeroSection></HeroSection>
        <PopularServices></PopularServices>
        <HealthTips></HealthTips>
        <Faculty></Faculty>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
