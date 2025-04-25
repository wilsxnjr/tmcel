import React from "react";
import zFold from "../assets/z-fold.png";
import a72 from "../assets/a72.png";
import a3 from "../assets/a3.png";
import tabS8 from "../assets/tab-s8.png";

const Produtos = () => {
  return (
    <section className="pb-16">
      <h2 className="justify-self-center mb-8 text-lg font-medium titulo-linha relative">Nossos Produtos</h2>
      <div className="max-w-[1250px] px-4 m-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {
        [
          {
            imagem: zFold,
            ref: "Samsung Galaxy Z Fold",
          },
          {
            imagem: zFold,
            ref: "Samsung Galaxy A72",
          },
          {
            imagem: zFold,
            ref: "Samsung Galaxy Tab S8",
          },
          {
            imagem: zFold,
            ref: "Samsung Galaxy A3",
          },
        ].map(({imagem, ref}) => (
            <a className="p-4 grid gap-2" href="/" key={ref}>
                <div>
                    <img src={imagem} />
                </div>
                <p className="font-medium">{ref}</p>
            </a>
        ))
        }
      </div>
    </section>
  );
};

export default Produtos;
