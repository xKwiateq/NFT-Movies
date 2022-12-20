import React from "react";

const Button = ({ text, link }) => {
  //   const { text, link } = props;
  return (
    <button className="min-w-[130px] py-3 text-center border border-primary bg-bgcolor rounded-2xl font-bold text-white hover:bg-primary hover:border-tr transition-all duration-600 ease-in-out">
      <a href={link}>{text}</a>
    </button>
  );
};

export default Button;
