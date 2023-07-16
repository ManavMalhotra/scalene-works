import "./Hero.css";
import heroImg from "../assets/images/hero.png";
import CompanyPartners from "./CompanyPartners";

const Hero = () => {
  return (
    <>
      <div class="Hero">
        <div class="hero-text">
          <div class="hero-t1">
            <h3> #because Scalene Works</h3>
          </div>
          <div class="hero-t2">
            <h1>Experience a New Era in Talent Solutions</h1>
          </div>
        </div>
        <div class="hero-img">
          <img src={heroImg} />
        </div>
      </div>
      <CompanyPartners />
    </>
  );
};

export default Hero;
