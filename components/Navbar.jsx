import React from "react";
import Image from "next/image";
import { useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

import Button from "./Buttonoutline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="text-gray-300 w-full md:px-32 px-12 py-7 flex justify-between items-center h-[11vh]">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={130}
        height={0}
        className="cursor-pointer"
      />

      <div className=" justify-center items-center gap-12 hidden xl:flex">
        <a href="" className="hover:text-white">
          Company
        </a>
        <a href="" className="hover:text-white">
          Product
        </a>
        <a href="" className="hover:text-white">
          Offers
        </a>
        <a href="" className="hover:text-white">
          Pricing
        </a>
      </div>
      <button className="min-w-[130px] py-3 text-center border border-primary bg-bgcolor rounded-2xl font-bold text-white hover:bg-primary hover:border-tr transition-all duration-600 ease-in-out xl:block hidden">
        <a href="">Contact</a>
      </button>
      <BiMenuAltRight
        className="text-4xl xl:hidden cursor-pointer hover:text-primary transition-all duration-300 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      />
      {/* sidebar */}
      <div
        className={
          isOpen
            ? "flex flex-col justify-center items-center w-full h-screen sm:w-[400px] bg-primary fixed top-0 right-0 z-50 gap-10 font-semibold animate-slide-in "
            : "hidden animate-slide-out"
        }
      >
        <IoClose
          className=" absolute top-4 left-4 text-5xl  hover:text-bgcolor transition-all duration-300 ease-in-out cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />

        <a
          href=""
          className="text-2xl hover:text-bgcolor transition-all duration-300 ease-in-out"
        >
          Company
        </a>
        <a
          href=""
          className="text-2xl hover:text-bgcolor transition-all duration-300 ease-in-out"
        >
          Product
        </a>
        <a
          href=""
          className="text-2xl hover:text-bgcolor transition-all duration-300 ease-in-out"
        >
          Offers
        </a>
        <a
          href=""
          className="text-2xl mb-10 hover:text-bgcolor transition-all duration-300 ease-in-out"
        >
          Pricing
        </a>
        <button className=" px-10 py-3 text-xl border-2 border-bgcolor rounded-xl text-white hover:bg-transparent bg-bgcolor hover:text-bgcolor transition-all duration-300 ease-in-out">
          <a href="">Contact</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
