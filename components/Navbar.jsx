import React from "react";
import Image from "next/image";
import { useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";

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
        className="text-4xl xl:hidden "
        onClick={() => setIsOpen(true)}
      />
      {/* sidebar */}
      <div className={isOpen ? "flex" : "hidden"}>
        <div className="fixed top-0 left-0 w-full h-full bg-bgcolor z-50"></div>
      </div>
    </div>
  );
};

export default Navbar;
