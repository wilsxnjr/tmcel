import React from "react";
import bandalarga from "../assets/bandalarga.svg";
import netgiro from "../assets/netgiro.svg";
import servicos from "../assets/servicos.svg";
import palestra from "../assets/palestra.jpeg";
import natal from "../assets/natal-solidario.jpg";
import onu from "../assets/onu.jpg";
import i4g from "../assets/4g.jpg";

const Cards = () => {
  return (
    <>
      <section className="py-8 md:py-16">
        <div className="max-w-[1250px] m-auto px-4 grid">
          <h2 className=" justify-self-center mb-8 text-lg font-medium titulo-linha relative">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {[
              {
                img: bandalarga,
                title: "Banda Larga",
                text: "É o serviço de Internet suportado pela tecnologia ADSL da Tmcel sendo a mais rápido.",
              },
              {
                img: netgiro,
                title: "NetGiro",
                text: "Serviço Internet para o telemóvel, para clientes de voz pré-pago com internet de alta velocidade.",
              },
              {
                img: servicos,
                title: "Serviço Telefónico",
                text: "É o serviço de comunicação de voz, tradicional Fixo da TMCEL.",
              },
              {
                img: servicos,
                title: "Serviço PRAD",
                text: "Serviço válido apenas para clientes institucionais.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="grid gap-4 p-8 border rounded-[16px] duration-300 transform hover:-translate-y-2 hover:shadow-md"
              >
                <img className="w-12" src={card.img} alt={card.title} />
                <h3 className="font-medium">{card.title}</h3>
                <p className="text-[15px] text-secondary-foreground leading-7">
                  {card.text}
                </p>
                <a
                  href="/"
                  className="text-[15px] text-secondary flex items-end gap-1 justify-self-start underline"
                >
                  Saber mais
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-[1250px] m-auto px-4 grid">
          <h2 className="justify-self-center mb-8 text-lg font-medium titulo-linha relative">
            Notícias
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 1,
                imagem: palestra,
                titulo: "Descoberta: Uma jornada de autoestima",
                paragrafo: "0 Comentários / Março 28, 2024",
                path: "/",
              },
              {
                id: 2,
                imagem: natal,
                titulo: "Natal solidário da TMCEL",
                paragrafo: "0 Comentários / Dezembro 22, 2021",
                path: "/",
              },
              {
                id: 3,
                imagem: onu,
                titulo: "TMCEL e ONU estreiam parceria",
                paragrafo: "0 Comentários / Dezembro 4, 2020",
                path: "/",
              },
              {
                id: 4,
                imagem: i4g,
                titulo: "TMCEL expande tecnologia 4G",
                paragrafo: "0 Comentários / Novembro 1, 2021",
                path: "/",
              },
            ].map(({ id, imagem, titulo, paragrafo, path }) => (
              <div className="grid gap-2 justify-center" key={id}>
                <div>
                  <img src={imagem} alt="" />
                </div>
                <div>
                  <h2 className="text-[15px] font-semibold">{titulo}</h2>
                  <p className="text-[14px] text-secondary-foreground">
                    {paragrafo}
                  </p>
                </div>
                <a
                  className="text-secondary text-[14px] justify-self-start arrow-news relative flex items-center"
                  href={path}
                >
                  Ler mais
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
