import React, { useState, useEffect } from "react";
import BitcoinLogo from "../images/Bitcoin.png";
import "./bitcoinLivePrice.css";

const BitcoinLivePrice = () => {
  const [currentPrice, setCurrentPrice] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch("http://localhost:4000/")
        .then((response) => response.json())
        .then((data) => {
          setCurrentPrice(data.currentPrice.price);
        });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="bitcoin-price-container">
      <img id="bitcoin-logo" src={BitcoinLogo} />
      <p id="current-price">Live Price: {currentPrice}</p>
    </div>
  );
};

export default BitcoinLivePrice;
