import React from "react";

const Button = ({ text, link }) => {
  //   const { text, link } = props;
  return (
    <button className="px-6 py-3 text-center border-2 border-primary  rounded-2xl font-bold text-white hover:bg-transparent bg-primary hover:border-tr transition-all duration-600 ease-in-out">
      <a href={link}>{text}</a>
    </button>
  );
};

export default Button;
