import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const [table, setTable] = useState([]);

  useEffect(() => {
    async function fetchExchangeRates() {
      const assets = ["BTC", "ETH", "USDT"];
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
    <main>
      <Header />
      <Content table={table} />
      <Footer />
    </main>
  );
}

export default App;
