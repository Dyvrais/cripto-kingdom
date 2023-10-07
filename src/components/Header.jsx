export default function Header() {
  return (
    <>
      <nav className="navbar z-10 flex bg-[#25093b] justify-around p-2 fixed top-0 w-[100%]">
        <div className="logo flex">
          <img
            src="../src/assets/cripto-kingdom-logo.png"
            className="w-7 h-7 m-auto ml-2"
          />
          <h2 className="text-slate-100 m-auto invisible lg:visible lg:pl-3">
            CRYPTO KINGDOM
          </h2>
        </div>
        <div>
          <ul className="text-slate-100 flex">
            <a href="#home">
              <li className="p-1 hover:underline">Home</li>
            </a>
            <a href="#prices">
              <li className="p-1 pl-3 hover:underline">Prices</li>
            </a>
            <a href="#about-us">
              <li className="p-1 pl-3 hover:underline">About</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}
