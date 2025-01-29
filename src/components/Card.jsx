import React from "react";

const Card = ({ image, heading, description }) => {
  return (
    <div className="flex  h-28 w-72  items-center justify-center overflow-hidden rounded-lg border-[1px] bg-[rgba(255,255,255,0.68)] hover:cursor-pointer hover:shadow-xl">
      <img src={image} alt="card-img" className=" h-14 " />
      <div className="p-2">
        <p className=" text-md font-extrabold">{heading}</p>
        <p className="my-2 w-40 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
