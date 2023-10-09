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
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en`
      )
      .then((res) => {
        setTable(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <Header />
      <Content tableData={table} />
      <Footer />
    </main>
  );
}

export default App;
