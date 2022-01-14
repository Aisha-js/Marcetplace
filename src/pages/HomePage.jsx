import React from "react";
import { Carousel } from "react-bootstrap";
import CarouselSecondSlide from "../components/CarouselSecondSlide";
import Img1 from "../images/Img1.png";

const HomePage = () => {
  return (
<Container>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={Img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={Img2} alt="Second slide" />
        <img className="d-block w-100" src={Img3} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="" alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>

        <CarouselSecondSlide />

      </Carousel.Item>
    </Carousel>

    </Container>
  );
};

export default HomePage;
