import React from "react";
import juntos from "../assets/juntos.png";
import cartao from "../assets/cartao.jpg";
import oferta from "../assets/oferta.png";
import iphone from "../assets/iphone.png";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const SliderHome = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <section className="pt-[104px]">
      <div
        className="embla overflow-hidden max-h-[340px] flex justify-center items-center"
        ref={emblaRef}
      >
        <div className="embla__container flex">
          <div className="embla__slide flex-none basis-full">
            <img className="w-full h-full" src={iphone} alt="" />
          </div>
          <div className="embla__slide flex-none basis-full">
            <img className="w-full h-full" src={cartao} alt="" />
          </div>
          <div className="embla__slide flex-none basis-full">
            <img className="w-full h-full" src={oferta} alt="" />
          </div>
          <div className="embla__slide flex-none basis-full">
            <img className="w-full h-full" src={juntos} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderHome;
