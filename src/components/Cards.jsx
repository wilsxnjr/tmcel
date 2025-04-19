import React from "react";
import bandalarga from "../assets/bandalarga.svg";
import netgiro from "../assets/netgiro.svg";
import servicos from "../assets/servicos.svg";

const Cards = () => {
  return (
    <section className="py-8">
      <h2 className="text-center font-medium text-xl text-secondary">
        Nossos Serviços
      </h2>
      <div className="max-w-[1250px] grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 m-auto px-4">
        <div className="grid gap-4 p-8 border rounded-2xl duration-300 hover:shadow-lg">
          <img className="w-12" src={bandalarga} alt="BandaLarga" />
          <h3 className="font-semibold">Banda Larga</h3>
          <p className="text-[15px] text-secondary-foreground leading-7">
            É o serviço de Internet suportado pela tecnologia ADSL  da  Tmcel
            sendo a mais rapida…
          </p>
          <a href="/" className="text-[15px] text-secondary link-seta flex items-end gap-1 justify-self-start">
            Saber mais
          </a>
        </div>
        <div className="grid gap-4 p-8 border rounded-2xl duration-300 hover:shadow-lg">
          <img className="w-12" src={netgiro} alt="BandaLarga" />
          <h3 className="font-semibold">NetGiro</h3>
          <p className="text-[15px] text-secondary-foreground leading-7">
            Serviço Internet para o telemóvel, para clientes de voz pré-pago com
            internet de alta velocidade…
          </p>
          <a href="/" className="text-[15px] text-secondary link-seta flex items-end gap-1 justify-self-start">
            Saber mais
          </a>
        </div>
        <div className="grid gap-4 p-8 border rounded-2xl duration-300 hover:shadow-lg">
          <img className="w-12" src={servicos} alt="BandaLarga" />
          <h3 className="font-semibold">Serviços Telefónicos</h3>
          <p className="text-[15px] text-secondary-foreground leading-7">
            É o serviço de comunicação de voz, tradicional Fixo da TMCEL.
          </p>
          <a href="/" className="text-[15px] text-secondary link-seta flex items-end gap-1 justify-self-start">
            Saber mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cards;
