import React from "react";
import Carousel from "react-bootstrap/Carousel";
import UserSitting from "../images/user.png";

const UserTutorial = () => {
  return (
    <Carousel id="user-tutorial">
      <Carousel.Item>
        <img
          className="carousel-image"
          src={UserSitting}
          id="user-img"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Caption>
        <h3 className="image-title" id="first-image-caption">
          To Get Started
        </h3>
        <p className="image-instructions" id="first-image-instructions">
          Sit facing your webcam
        </p>
      </Carousel.Caption>
    </Carousel>
  );
};

export default UserTutorial;
