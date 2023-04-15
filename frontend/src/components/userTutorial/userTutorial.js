import React from "react";
import Carousel from "react-bootstrap/Carousel";

const UserTutorial = () => {
  return (
    <div>
      <Carousel id="user-tutorial">
        <Carousel.Item interval={1000}>
          <img
            className="user-tutorial-img"
            id="img-1-user-sitting"
            src="../images/user.png"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default UserTutorial;
