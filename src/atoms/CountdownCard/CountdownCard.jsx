import React from "react";
import Card from "../Card/Card";

const CountDownCard = ({ text }) => {
  return (
    <div className="relative">
      <Card text={text} />
      <span className="absolute inset-0 flex justify-center items-center text-[#FB5E84] font-redHat text-[80px] font-bold leading-[71px] tracking-tight max-sm:text-[40px]">
        {text}
      </span>
    </div>
  );
};

export default CountDownCard;
