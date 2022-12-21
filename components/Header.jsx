import React from "react";
import Button from "./Button";
import Image from "next/image";
import Headerimages from "./Headerimages";

const Header = () => {
  return (
    <div className="flex justify-around items-center text-white xl:h-[89vh]  2xl:px-32 sm:px-20 px-12 2xl:gap-0 xl:gap-10 gap-24 sm:gap-32 xl:flex-row flex-col pt-16 pb-20 xl:pb-0 xl:pt-0">
      <div className="flex flex-col justify-center items-start gap-7 ">
        <p className=" tracking-widest text-primary text-xl">
          TRADE NFT SPRING
        </p>
        <h1 className="2xl:text-6xl sm:text-5xl text-3xl font-bold text-white leading-tight">
          Elegance is Good <br /> Taste{" "}
          <span className=" text-gradient">Spring</span> Sumar.
        </h1>
        <p className="text-gray-300 text-xl 2xl:max-w-[750px] max-w-[500px]">
          The first marketplace to buy, trade and sell high quality NFTs{" "}
          <br className="hidden 2xl:block" />
          designed in style of movie characters by the best 3D{" "}
          <br className="hidden 2xl:block" />
          designers in the world.
        </p>
        <Button text="Explore more!" link="#" />
      </div>
      <Headerimages />
    </div>
  );
};

export default Header;
