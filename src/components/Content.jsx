import CKTitle from "../assets/cripto-kingdom-title-bg.png";
import CKAbout from "../assets/crypto-kingdom-about-us.png";
import CoinTable from "./CoinTable";

export default function Content({ tableData }) {
  return (
    <div className="main-container m-auto lg:m-20 text-center">
      <section id="home" className="home-prices">
        <div className="title z-index lg:-mt-8">
          <img
            className="md:w-1/2 lg:w-1/2 relative top-[100px] m-auto opacity-50 transform transition duration-1000 delay-75 hover:scale-90"
            src={CKTitle}
          ></img>
          <h1 className="relative bottom-[165px] lg:bottom-[370px] text-white text-3xl lg:text-7xl font-black">
            TRACK YOUR <br />
            CRYPTOCURRENCIES
          </h1>
          <p className="relative bottom-[150px] lg:bottom-[350px] lg:text-lg text-white w-[80%] m-auto">
            We offer you an easy way to keep track of the latest updates about
            the crypto market. The crypto market is constantly changing and
            evolving, in Crypto Kingdom we make sure that you don&apos;t miss
            any of it
          </p>
        </div>

        <h2 id="prices" className="text-white text-xl lg:text-3xl p-1">
          Market Update
        </h2>
        <CoinTable tableData={tableData} />
      </section>

      <section
        id="about-us"
        className="about text-white m-auto mt-20 mb-10 text-center"
      >
        <h2 className="text-2xl lg:text-3xl mt-10 p-2 ">About Us</h2>
        <div className="flex flex-col-reverse lg:flex-row bg-[#7319bd] rounded-lg p-5 w-[80%] lg:w-[100%] m-auto">
          <div className="m-auto">
            <p className="m-1 mt-5 lg:mt-1 text-left text-base lg:text-lg">
              Welcome to Crypto Kingdom, your go-to website for tracking
              cryptocurrencies.
            </p>
            <p className="m-1 text-left text-base lg:text-lg">
              At Crypto Kingdom, we provide up-to-date information and insights
              on various cryptocurrencies, including their prices, market
              trends, and historical data. Our mission is to empower individuals
              and businesses to make informed decisions in the ever-changing
              world of cryptocurrencies. Whether you are a seasoned trader, a
              crypto enthusiast, or just getting started, Crypto Kingdom is here
              to help you navigate the exciting and often volatile crypto
              market.
            </p>
            <p className="m-1 text-left text-base lg:text-lg">
              With our user-friendly interface and comprehensive data, you can
              easily track the performance of your favorite cryptocurrencies and
              stay informed about the latest developments in the crypto
              industry.
            </p>
            <p className="m-1 text-left text-base lg:text-lg">
              Join our community of crypto enthusiasts today and embark on a
              journey to explore the fascinating world of cryptocurrencies with
              Crypto Kingdom.
            </p>
          </div>
          <img
            src={CKAbout}
            className=" w-1/2 lg:w-1/4 m-auto bg-violet-500 rounded-full"
          ></img>
        </div>
      </section>
    </div>
  );
}
