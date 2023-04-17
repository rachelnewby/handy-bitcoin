import React, { useState } from "react";
import BitcoinLogo from "../images/Bitcoin.png";

const BitcoinLivePrice = () => {
  const [currentPrice, setCurrentPrice] = useState();

  setInterval(() => {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((data) => {
        setCurrentPrice(data.currentPrice);
      });
  }, 3000);

  return (
    <div id="bitcoin-price-container">
      <img id="bitcoin-logo" src={BitcoinLogo} />
      <h2>{currentPrice}</h2>
    </div>
  );
};

export default BitcoinLivePrice;
