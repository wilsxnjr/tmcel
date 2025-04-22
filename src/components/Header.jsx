import React, { useState } from "react";
import logo from "../assets/logo-tmcel.png";
import search from "../assets/search.svg";
import menu from "../assets/menu.svg";

const Header = () => {
  const headerFirst = [
    {
      nameLink: "Particular",
      path: "/",
    },
    {
      nameLink: "Empresas",
      path: "/",
    },
    {
      nameLink: "Mkesh",
      path: "/",
    },
  ];
  const headerSecond = [
    {
      nameLink: "Móvel",
      path: "/",
    },
    {
      nameLink: "Fixo",
      path: "/",
    },
    {
      nameLink: "Assistência",
      path: "/",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed w-full z-10 bg-white">
      <div className="flex justify-between max-w-[1250px] m-auto px-4 py-2">
        <nav>
          <ul className="flex gap-8">
            {headerFirst.map(({ nameLink, path }, index) => (
              <li key={nameLink}>
                <a
                  className={`text-sm font-medium duration-300 hover:text-black ${
                    index === 0 ? "text-black" : "text-secondary-foreground"
                  }`}
                  href={path}
                >
                  {nameLink}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="hidden md:block text-secondary-foreground text-sm">
            Telefone: +258 21 351100 - Linha de cliente: 100 / 82100
          </p>
        </div>
      </div>

      <div className="bg-primary">
        <div className="max-w-[1250px] m-auto px-4 flex items-center justify-between">
          <div className="flex items-center justify-between gap-8">
            <a href="#">
              <img className="max-h-[65px]" src={logo} alt="Logo" />
            </a>
            <nav className="flex items-center">
              <ul className="hidden md:flex gap-8 items-center">
                {headerSecond.map(({ nameLink, path }) => (
                  <li key={nameLink}>
                    <a
                      className="text-sm font-medium text-secondary"
                      href={path}
                    >
                      {nameLink}
                    </a>
                  </li>
                ))}
              </ul>

              <ul className={`z-10 absolute xl:hidden top-[104px] left-0 w-full bg-primary flex flex-col items-center font-medium text-base transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`} style={{transition: "transform 0.3s ease, opacity 0.3s ease "}}>
                {headerSecond.map(({nameLink, path}) => (
                  <li className="w-full flex" key={nameLink}><a className="w-full text-secondary p-4 text-center hover:bg-secondary hover:text-primary transition duration-300" href={path}>{nameLink}</a></li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <button className="hidden md:block cursor-pointer">
              <img className="w-4" src={search} alt="" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="block md:hidden cursor-pointer"
            >
              <img className="w-6" src={menu} alt="" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
