import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import UserSitting from "../images/user.png";
import OpenTrade from "../images/openTrade.png";

const UserTutorial = () => {
  return (
    <Carousel id="user-tutorial" variant="dark">
      <Carousel.Item interval={1000}>
        <img
          className="carousel-image"
          src={UserSitting}
          id="user-img"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3 className="image-title" id="first-image-caption">
            Step 1
          </h3>
          <p className="image-instructions" id="first-image-instructions">
            Sit facing your webcam
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="carousel-image"
          src={OpenTrade}
          id="open-trade-img"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="image-title" id="second-image-caption">
            Step 2
          </h3>
          <p className="image-instructions" id="second-image-instructions">
            Raise your hand with an open palm to place a trade
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default UserTutorial;
