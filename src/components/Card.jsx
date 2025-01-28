import React from "react";

const Card = ({ image, heading, description }) => {
  return (
    <div className="flex  h-32 w-80  items-center justify-center overflow-hidden rounded-lg  bg-white text-sm  shadow-lg hover:cursor-pointer hover:shadow-2xl">
      <img src={image} alt="card-img" className=" h-16 " />
      <div className="p-4">
        <p className=" text-lg font-extrabold">{heading}</p>
        <p className="my-2 w-40 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
