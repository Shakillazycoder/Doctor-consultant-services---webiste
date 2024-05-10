import HealthTips from "../Component/HealthTips";
import HeroSection from "../Component/HeroSection";
import PopularServices from "../Component/PopularServices";

const Home = () => {
  return (
    <div>
      <div>
        <HeroSection></HeroSection>
        <PopularServices></PopularServices>
        <HealthTips></HealthTips>
        
      </div>
    </div>
  );
};

export default Home;
