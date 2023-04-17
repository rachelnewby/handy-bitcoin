const express = require("express");
const app = express();
const BinanceClient = require("./lib/binanceClient");

const binanceClient = new BinanceClient();

app.get("/", async (req, res) => {
  try {
    const currentPrice = await binanceClient.getBitcoinPrice();
    res.status(200).json({ currentPrice: currentPrice });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

console.log("server is running");

app.listen(4000);
