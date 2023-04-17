import React, { useState } from "react";
import BitcoinLogo from "../images/Bitcoin.png";

const BitcoinLivePrice = () => {
  const [currentPrice, setCurrentPrice] = useState();

  return (
    <div id="bitcoin-price-container">
      <img id="bitcoin-logo" src={BitcoinLogo} />
    </div>
  );
};

export default BitcoinLivePrice;
