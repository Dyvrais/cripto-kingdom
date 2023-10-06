import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function Content() {
  const [table, setTable] = useState([]);
  // const coins = [
  //   {
  //     name: "Bitcoin",
  //     price: 50000,
  //   },
  //   {
  //     name: "Ethereum",
  //     price: 2000,
  //   },
  //   {
  //     name: "Ripple",
  //     price: 0.5,
  //   },
  //   {
  //     name: "Litecoin",
  //     price: 150,
  //   },
  //   {
  //     name: "Bitcoin Cash",
  //     price: 600,
  //   },
  //   {
  //     name: "Cardano",
  //     price: 0.4,
  //   },
  // ];

  useEffect(() => {
    async function fetchExchangeRates() {
      const assets = [
        "BTC",
        "ETH",
        "USDT",
        "BNB",
        "XRP",
        "USDC",
        "SOL",
        "ADA",
        "DOGE",
        "TRX",
      ];
      const promises = assets.map((asset) =>
        axios.get(
          `https://rest.coinapi.io/v1/exchangerate/${asset}/USD?apikey=FF00E707-6C4B-427B-AF21-9CB2462F5D7B`
        )
      );
      const responses = await Promise.all(promises);
      const exchangeRates = responses.reduce((acc, response, index) => {
        acc[assets[index]] = response.data.rate;
        return acc;
      }, {});
      setTable(exchangeRates);
    }
    fetchExchangeRates();
  }, []);

  return (
    <div className="main-container m-20 text-center">
      <section id="home" className="home-prices">
        <div className="title z-index">
          <img
            className="w-1/2 m-auto opacity-50 transform transition duration-1000 delay-75 hover:scale-90"
            src="./src/assets/cripto-kingdom-title-bg.png"
          ></img>
          <h1 className="relative bottom-[400px] text-white text-5xl font-black md:text-7xl">
            TRACK YOUR <br />
            CRYPTOCURRENCIES
          </h1>
          <p className="relative bottom-[350px] text-lg text-white w-[80%] m-auto">
            We offer you an easy way to keep track of the latest updates about
            the crypto market. The crypto market is constantly changing and
            evolving, in Crypto Kingdom we make sure that you don&apos;t miss
            any of it
          </p>
        </div>

        <h2 id="prices" className="text-white text-3xl p-1">
          Market Update
        </h2>
        <table className="table-auto text-white w-[70%] m-auto">
          <tr>
            <th className="bg-[#7319bd] rounded-l-lg p-1">Coin</th>
            <th className="bg-[#7319bd] rounded-r-lg p-1">Exchange rate</th>
          </tr>
          <tbody className="divide-y divide-white">
            {Object.entries(table).map(([asset, exchangeRate]) => (
              <tr key={asset}>
                <td>{asset}</td>
                <td>$ {exchangeRate}</td>
              </tr>
            ))}
            {/* {coins.map((coin) => (
              <tr
                className="hover:bg-violet-950 hover:bg-opacity-30"
                key={coin.name}
              >
                <td className="p-2 text-center">{coin.name}</td>
                <td className="p-2 text-center">$ {coin.price}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </section>

      <section
        id="about-us"
        className="about-us text-white m-auto mt-20 text-center"
      >
        <h2 className="text-3xl mt-10 p-2">About Us</h2>
        <div className="flex bg-[#7319bd] rounded-lg p-5">
          <div className="m-auto">
            <p className="m-1 text-left">
              Welcome to Crypto Kingdom, your go-to website for tracking
              cryptocurrencies.
            </p>
            <p className="m-1 text-left">
              At Crypto Kingdom, we provide up-to-date information and insights
              on various cryptocurrencies, including their prices, market
              trends, and historical data. Our mission is to empower individuals
              and businesses to make informed decisions in the ever-changing
              world of cryptocurrencies. Whether you are a seasoned trader, a
              crypto enthusiast, or just getting started, Crypto Kingdom is here
              to help you navigate the exciting and often volatile crypto
              market.
            </p>
            <p className="m-1 text-left">
              With our user-friendly interface and comprehensive data, you can
              easily track the performance of your favorite cryptocurrencies and
              stay informed about the latest developments in the crypto
              industry.
            </p>
            <p className="m-1 text-left">
              Join our community of crypto enthusiasts today and embark on a
              journey to explore the fascinating world of cryptocurrencies with
              Crypto Kingdom.
            </p>
          </div>
          <img
            src="./src/assets/crypto-kingdom-about-us.png"
            className="w-1/4 bg-violet-500 rounded-full"
          ></img>
        </div>
      </section>
    </div>
  );
}
