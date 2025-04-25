import React from "react";
import sorriso from "../assets/sorriso.png";

const Footer = () => {
  return (
    <footer className="bg-footer">
      <div className="max-w-[1250px] m-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 py-16">
        <div>
          <h2 className="color-title font-medium mb-4 text-center grid">
            ENDEREÇO
          </h2>
          <div className="color-text text-sm grid gap-2 justify-center text-center">
            <p>Rua Belmiro Obadias Muianga, Nº 384</p>
            <p>CP 1483 – Maputo – Moçambique</p>
            <p>Telefone:</p>
            <p>+258822172482 ou +258822172313</p>
            <p>+25821351100 ou +258822172100</p>
          </div>
          <div className="justify-self-center mt-8">
            <img src={sorriso} alt="" />
          </div>
        </div>
        <div>
          <h2 className="color-title font-medium mb-4 text-center">
            CONTACTOS
          </h2>
          <div className="color-text text-sm grid gap-2 justify-center text-center">
            <a className="hover:text-secondary hover:underline" href="#">
              assistenciaaocliente@tmcel.mz
            </a>
            <a className="hover:text-secondary hover:underline" href="#">
              corporate@tmcel.mz
            </a>
            <p>Linha do cliente:</p>
            <p>Contacto: 100</p>
            <p>WhatsApp : 821001000</p>
            <p>Roaming Pos Pago: +258 20 611 239</p>
            <p>Roaming Pré pago: +258 20 611 240</p>
            <p>Roaming Linha Fixa:+258 20 611 256</p>
          </div>
        </div>
        <div>
          <h2 className="color-title font-medium mb-4 text-center">
            SOBRE NÓS
          </h2>
          <div className="color-text text-sm grid gap-2 justify-center text-center">
            <a className="hover:text-secondary hover:underline" href="#">
              Acesso a Internet
            </a>
            <a className="hover:text-secondary hover:underline" href="#">
              Perguntas Frequentes
            </a>
          </div>
        </div>
        <div>
          <h2 className="color-title font-medium mb-4 text-center">
            PARTICULAR
          </h2>
          <div className="color-text text-sm grid gap-2 justify-center text-center">
            <a className="hover:text-secondary hover:underline" href="#">
              Acesso a Internet
            </a>
            <a className="hover:text-secondary hover:underline" href="#">
              Perguntas Frequentes
            </a>
          </div>
        </div>
      </div>
      <div className="border-top-cor">
        <div className="max-w-[1250px] m-auto p-4 flex items-center gap-4 flex-wrap justify-between">
          <p className="text-xs color-text">
            © Copyright - <span className="text-secondary">Tmcel</span>
          </p>
          <div className="flex items-center color-text gap-1 text-xs">
            <a className="text-secondary hover:text-primary hover:underline" href="#">Politica de privacidade</a>
            <span>|</span>
            <a className="text-secondary hover:text-primary hover:underline" href="#">Termos e Condições</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
