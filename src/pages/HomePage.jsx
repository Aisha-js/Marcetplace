import React from "react";
import { Carousel, Container } from "react-bootstrap";
import Img1 from "../images/Img1.png";
import Img2 from "../images/Img2.png";
import Img3 from "../images/Img3.png";

const HomePage = () => {
  return (
<Container>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={Img1} alt="First slide" />
        <Carousel.Caption>
          <h1>This just in.</h1>
        </Carousel.Caption>
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
      </Carousel.Item>
    </Carousel>

    </Container>
  );
};

export default HomePage;
