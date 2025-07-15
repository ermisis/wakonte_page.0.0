// import { Navbar, Hero, CardSection, AppSection, TrafficSection, MemberSection } from "./components";
// import styles from "../style";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CardSection from "../components/CardSection";
import AppSection from "../components/AppSection";
import TrafficSection from "../components/TrafficSection";
import MemberSection from "../components/MemberSection";


const MainPage = () => (
  <div className="w-xs sm:w-xl">
    <Navbar />
    <Hero />
    <CardSection />
    <AppSection />
    <TrafficSection />
    <MemberSection />
  </div>
)

export default MainPage;





{/* <div className="bg-light lx:w-full sm:w-[2200px] w-[1700px]">
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <CardSection />
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <AppSection />
      </div>
    </div>
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <TrafficSection />
      </div>
    </div>
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <MemberSection />
      </div>
    </div>
  </div> */}
  