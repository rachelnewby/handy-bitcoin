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
    </Carousel>
  );
};

export default UserTutorial;
