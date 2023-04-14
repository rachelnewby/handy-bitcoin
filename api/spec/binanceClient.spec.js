const BinanceClient = require("../lib/binanceClient");

require("jest-fetch-mock").enableMocks();

describe("getBitcoinPrice", () => {
  it("returns the current price of Bitcoin from Binance", () => {
    const client = new BinanceClient();
    const mockResponse = { mins: 5, price: "30164.84941049" };
    fetch.mockResponseOnce(JSON.stringify(mockResponse));
    client.getBitcoinPrice().then((price) => {
      expect(price).toEqual(mockResponse);
    });
  });

  it("returns an error if request is not fulfilled", () => {
    const client = new BinanceClient();
    fetch.mockReject("Error");
    client.getBitcoinPrice().then((error) => {
      expect(error).toEqual("Error");
    });
  });
});