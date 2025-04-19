import React from "react";
import bandalarga from "../assets/bandalarga.svg";
import netgiro from "../assets/netgiro.svg";
import servicos from "../assets/servicos.svg";

const Cards = () => {
  return (
    <section className="py-8">
      <h2 className="text-center font-semibold text-xl text-secondary">
        Nossos Serviços
      </h2>
      <div className="max-w-[1250px] px-4 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {[
            {
              img: bandalarga,
              title: "Banda Larga",
              text: "É o serviço de Internet suportado pela tecnologia ADSL  da  Tmcel sendo a mais rapida…",
            },
            {
              img: netgiro,
              title: "NetGiro",
              text: "Serviço Internet para o telemóvel, para clientes de voz pré-pago com internet de alta velocidade…",
            },
            {
              img: servicos,
              title: "Serviços Telefónicos",
              text: "É o serviço de comunicação de voz, tradicional Fixo da TMCEL.",
            },
            {
              img: servicos,
              title: "Serviços Telefónicos",
              text: "É o serviço de comunicação de voz, tradicional Fixo da TMCEL.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="grid gap-4 p-8 border rounded-2xl duration-300"
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
  );
};

export default Cards;
