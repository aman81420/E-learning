import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Card from "./Card";
import assets from "../assets/assets";

const FeaturesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when the section is in view
        }
      },
      { threshold: 0.5 }, // Trigger when at least 50% of the section is visible
    );

    const section = document.getElementById("features-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section); // Clean up observer on unmount
      }
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center">
        <p className="text-3xl font-extrabold">Learn The Easy Way</p>
        <p className="mx-2 my-4 text-gray-500 md:mx-0">
          NO HASSLE JUST LEARN NOW & BECOME PRO. WHY THE WAIT?
        </p>
      </div>

      {/* The section where cards are located */}
      <div
        id="features-section"
        className="my-14 flex justify-center"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                image={card.image}
                heading={card.heading}
                description={card.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
