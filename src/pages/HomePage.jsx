import React from "react";
import { Carousel, Container } from "react-bootstrap";
import CaruselFirstSlide from "../components/CaruselFirstSlide";
import Imgg from "../images/Imgg.png";

const HomePage = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item interval={1000}>
          <CaruselFirstSlide />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={Imgg} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default HomePage;
