import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "./CoursesCard";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const courses = [
  {
    id: 1,
    image: assets.course_3,
    rating: 4.5,
    title: "Full-Stack Web Development",
    description: "Learn to build scalable web applications using MERN stack.",
    authorImage: assets.auth1,
    price: "$49.99",
  },
  {
    id: 2,
    image: assets.course_10,
    rating: 4.7,
    title: "React Native for Beginners",
    description: "Master React Native to build cross-platform mobile apps.",
    authorImage: assets.auth2,
    price: "$59.99",
  },
  {
    id: 3,
    image: assets.course_15,
    rating: 4.6,
    title: "Data Structures & Algorithms",
    description: "Enhance your coding skills with DSA fundamentals.",
    authorImage: assets.auth3,
    price: "$39.99",
  },
  {
    id: 4,
    image: assets.course_18,
    rating: 4.8,
    title: "UI/UX Design Masterclass",
    description: "Become a professional UI/UX designer with this masterclass.",
    authorImage: assets.auth4,
    price: "$79.99",
  },
  {
    id: 5,
    image: assets.course_10,
    rating: 4.9,
    title: "Python for Data Science",
    description: "Learn Python and its applications in Data Science.",
    authorImage: assets.auth2,
    price: "$69.99",
  },
  {
    id: 6,
    image: assets.course_15,
    rating: 4.3,
    title: "Cyber Security Essentials",
    description: "Get started with ethical hacking and cyber security.",
    authorImage: assets.auth1,
    price: "$89.99",
  },
];

export default function PopularCourses() {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [isVisible, setIsVisible] = useState(false); // Initialize isVisible state

  const handleMouseDown = (event) => {
    isDragging.current = true;
    startX.current = event.clientX;
    scrollLeft.current = containerRef.current.scrollLeft;
    containerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (event) => {
    if (!isDragging.current) return;
    event.preventDefault();
    const x = event.clientX;
    const walk = (x - startX.current) * 2;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    containerRef.current.style.cursor = "grab";
  };

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
    <div className="px-4 md:px-8 lg:px-16">
      <p className="mt-20 text-center text-3xl font-extrabold">
        Popular Courses
      </p>
      <p className="mb-6 mt-2 text-center text-sm font-semibold text-gray-600">
        THE BEST COURSES
      </p>
      <div className="flex w-full justify-center">
        <div
          className="relative w-full max-w-[940px] cursor-grab select-none overflow-hidden"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <motion.div
            className="flex gap-6 px-8 md:gap-14"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {courses.map((course, index) => (
              <Card
                key={course.id}
                className="w-[165px] flex-shrink-0 md:w-[210px]"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-24 w-full rounded-t-xl object-cover"
                />
                <CardContent className="p-4">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={16} />
                    <span className="text-sm font-semibold">
                      {course.rating}
                    </span>
                  </div>
                  <h3 className="mt-2 text-sm font-bold">{course.title}</h3>
                  <p className="mt-1 text-xs text-gray-600">
                    {course.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <img
                      src={course.authorImage}
                      alt="Author"
                      className="h-8 w-8 rounded-full"
                    />
                    <span className="text-md font-semibold text-blue-600">
                      {course.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
