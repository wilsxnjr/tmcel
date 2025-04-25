import React from "react";
import Header from "./components/Header.jsx"
import SliderHome from "./components/SliderHome.jsx";
import Cards from "./components/Cards.jsx";
import Produtos from "./components/Produtos.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <SliderHome />
      <Cards />
      <Produtos />
      <Footer />
    </>
  );
};

export default App;
