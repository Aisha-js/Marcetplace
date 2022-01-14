import React from "react";
import { Carousel } from "react-bootstrap";
import CarouselSecondSlide from "../components/CarouselSecondSlide";
import Img1 from "../images/Img1.png";

const HomePage = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={Img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <CarouselSecondSlide />
      </Carousel.Item>
    </Carousel>
  );
};

export default HomePage;
