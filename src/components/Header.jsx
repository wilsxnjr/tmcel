import React from "react";
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
  return (
    <header>
      <div className="flex justify-between max-w-[1250px] m-auto px-4 py-2">
        <nav>
          <ul className="flex gap-8">
            {headerFirst.map(({ nameLink, path }, index) => (
              <li key={nameLink}>
                <a
                  className={`text-[15px] font-medium duration-300 hover:text-black ${
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
          <p className="hidden md:block text-secondary-foreground text-[15px]">
            Telefone: +258 21 351100 - Linha de cliente: 100 / 82100
          </p>
        </div>
      </div>
      <div className="bg-primary">
        <div className="flex justify-between items-center w-full max-w-[1250px] px-4 m-auto h-[65px]">
          <a href="/">
            <img
              className="max-h-[65px] w-auto max-w-full object-contain"
              src={logo}
              alt="Logo"
            />
          </a>
          <nav className="flex items-center gap-8">
            <ul className="hidden md:flex gap-8 items-center">
              {headerSecond.map(({ nameLink, path }) => (
                <li key={nameLink}>
                  <a className="font-medium text-[15px] text-secondary" href={path}>
                    {nameLink}
                  </a>
                </li>
              ))}
            </ul>
            <button  className="hidden md:block cursor-pointer w-5"><img src={search} alt="" /></button>
          </nav>
          <button className="md:hidden cursor-pointer w-6"><img src={menu} alt="menu" /></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
