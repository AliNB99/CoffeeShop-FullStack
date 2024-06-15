import ButtonCenter from "@/atoms/home/ButtonCenter";
import NestedCircles from "@/atoms/home/NestedCircles";
import { Curve } from "@/utils/svg";

function Banner() {
  return (
    <section className="relative bg-home-mobile md:bg-home-desktop h-[200px] xs:h-auto xs:aspect-[2/1] lg:aspect-auto bg-no-repeat bg-cover bg-center">
      <div className="container relative overflow-y-hidden h-full md:min-h-screen flex justify-end items-center">
        <div className="text-white">
          <h1 className="font-Morabba font-bold text-2xl md:text-6xl mb-0.5">
            قهوه عربیکا تانزانیا
          </h1>
          <h3 className="font-Morabba font-light text-xl md:text-5xl">
            یک فنجان بالانس!
          </h3>
          <span className="block w-[100px] h-px md:h-0.5 my-3 md:my-8 bg-orange-300"></span>
          <p className="w-[200px] md:w-[460px] text-xs md:text-2xl">
            قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است
            که در نواحی مختلف کمربند قهوه کشت میشود.
          </p>
        </div>
        <div className="absolute hidden md:block w-fit bottom-0 left-0 right-0 mx-auto text-gray-100 dark:text-zinc-800 ">
          <Curve className="w-28" />
        </div>
        <NestedCircles />
      </div>
      <ButtonCenter />
    </section>
  );
}

export default Banner;
