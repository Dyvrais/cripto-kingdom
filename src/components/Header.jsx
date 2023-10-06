export default function Header() {
  return (
    <>
      <div className="navbar z-10 flex bg-[#25093b] justify-around p-2.5 fixed top-0 w-[100%]">
        <div className="logo flex space-x-3">
          <img
            src="./src/assets/cripto-kingdom-logo.png"
            className="w-5 h-5 m-auto"
          />
          <h2 className="text-slate-100 m-auto">CRYPTO KINGDOM</h2>
        </div>
        <div>
          <ul className="text-slate-100 flex space-x-5">
            <a href="#home">
              <li className="p-1 hover:underline">Home</li>
            </a>
            <a href="#prices">
              <li className="p-1 hover:underline">Prices</li>
            </a>
            <a href="#about-us">
              <li className="p-1 hover:underline">About</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}
