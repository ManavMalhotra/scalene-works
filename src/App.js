import "./App.css";
import GridContainer from "./components/GridContainer";
import Carousel from "./components/Carousel";
import hero from "./assets/images/hero.png";
import React from "react";
// import Navbar from './Navbar';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./components/styles.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="container">
      <Navbar />

      <GridContainer>
        <div className="col-span-1"></div>
        <div className="col-span-12 bg-hero-image bg-cover bg-center">
        </div>

        <div className="col-span-1"></div>
      </GridContainer>
    </div>
  );
};

export default App;
