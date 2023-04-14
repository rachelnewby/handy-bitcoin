class BinanceClient {
  getBitcoinPrice() {
    const url = "https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT";
    return fetch(url)
      .then((response) => response.json())
      .then((price) => {
        return price;
      })
      .catch((error) => {
        return error;
      });
  }
}

module.exports = BinanceClient;