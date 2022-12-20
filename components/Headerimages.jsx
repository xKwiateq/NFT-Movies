import React from "react";
import Image from "next/image";

const Headerimages = () => {
  return (
    <div className="flex justify-center items-center sm:gap-5 flex-col sm:flex-row">
      <div className="flex flex-col justify-center items-center">
        <div className=" bg-[#021233] w-[250px] h-[350px] rounded-2xl overflow-hidden flex items-center ">
          <Image
            src={"/shelby.png"}
            alt="shelby"
            width={1000}
            height={0}
            className="cursor-pointer scale-[1.4]"
          />
        </div>
        <div className="translate-y-[-30px] translate-x-[-40px] bg-[rgba(187,195,241,0.33)] w-60 h-16 flex justify-center items-center rounded-lg backdrop-blur-md">
          Thomas Shelby
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className=" bg-[#021233] w-[250px] h-[350px] rounded-2xl overflow-hidden flex items-center translate-y-[40px]">
          <Image
            src={"/walter.png"}
            alt="shelby"
            width={1000}
            height={0}
            className="cursor-pointer scale-[1.4] translate-x-3"
          />
        </div>
        <div className="translate-y-[10px] translate-x-[-40px] bg-[rgba(187,195,241,0.33)] w-60 h-16 flex justify-center items-center rounded-lg backdrop-blur-md">
          Walter White
        </div>
      </div>
    </div>
  );
};

export default Headerimages;
