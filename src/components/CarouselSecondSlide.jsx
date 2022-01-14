import React from "react";
import Img2 from "../images/Img2.png";
import Img3 from "../images/Img3.png";

const CarouselSecondSlide = () => {
  return (
    <div>
      <div>
        <img src={Img2} alt="Second slide" />
      </div>
      <div>
        <img src={Img3} alt="Second slide" />
      </div>
    </div>
  );
};

export default CarouselSecondSlide;
