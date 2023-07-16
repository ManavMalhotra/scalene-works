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
import Hero from "./components/Hero";
import Company from "./components/Compnay";
const App = () => {
  return (
    <div class="container">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
