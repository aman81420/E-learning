import React from "react";
import Card from "./Card";
import assets from "../assets/assets";
const FeaturesPage = () => {
  const cardData = [
    {
      image: assets.img1,
      heading: "Learn Instantly",
      description: "This is a description for card 1.",
    },
    {
      image: assets.img2,
      heading: "Search for your Course",
      description: "This is a description for card 2.",
    },
    {
      image: assets.img3,
      heading: "Cloud Storage",
      description: "This is a description for card 3.",
    },
    {
      image: assets.img4,
      heading: "Quiz & Tests",
      description: "This is a description for card 4.",
    },
    {
      image: assets.img5,
      heading: "Certified Courses",
      description: "This is a description for card 5.",
    },
    {
      image: assets.img1,
      heading: "Learn Instantly",
      description: "This is a description for card 6.",
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center">
        <p className="text-3xl font-extrabold">Learn The Easy Way</p>
        <p className="my-4 text-gray-500">
          NO HASSLE JUST LEARN NOW & BECOME PRO. WHY THE WAIT?
        </p>
      </div>

      <div className="my-14 flex justify-center">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              heading={card.heading}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
