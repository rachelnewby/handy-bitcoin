import React from "react";
import Carousel from "react-bootstrap/Carousel";
import UserSitting from "../images/user.png";

const UserTutorial = () => {
  return (
    <Carousel id="user-tutorial">
      <Carousel.Item>
        <img
          className="first-image"
          src={UserSitting}
          id="user-img"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel>
  );
};

export default UserTutorial;
