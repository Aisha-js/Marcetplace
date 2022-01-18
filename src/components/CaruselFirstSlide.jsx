import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../images/Img1.png";

const CaruselFirstSlide = () => {
  return (
    <div id="text">
      <img src={Img1} alt="img" />
      <div className="text2">
        Интернет-магазин <br /> спортивной одежды
      </div>
      <Link to="/products">
        <button className="button btn-outline-dark">Купить сейчас</button>
      </Link>
    </div>
  );
};

export default CaruselFirstSlide;
