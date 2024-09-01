"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import img1 from "../../public/modern Architecture.jpg";
import img2 from "../../public/Gothic architecture.jpg";
import img3 from "../../public/Greek Revival architecture.jpg";
import img4 from "../../public/Islamic architecture.jpg";
import img5 from "../../public/Byzantine architecture.jpg";
import img6 from "../../public/Ancient Roman architecture.jpg";

const data = [
  {
    title: "modern",
    url: img1,
  },
  {
    title: "Gothic",
    url: img2,
  },
  {
    title: "Greek    Revival",
    url: img3,
  },
  {
    title: "Islamic",
    url: img4,
  },
  {
    title: "Byzantine",
    url: img5,
  },
  {
    title: "Ancient    Roman",
    url: img6,
  },
];

const variants = {
  initial: (direction: string) => ({
    clipPath: direction === "next" ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
  }),
  animate: {
    clipPath: "inset(0 0 0 0)",
    transition: {
      duration: 1,
      ease: [0.645, 0.075, 0.275, 0.995],
    },
  },
  exit: (direction: string) => ({
    clipPath: direction === "next" ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
    transition: {
      duration: 1,
      ease: [0.645, 0.075, 0.275, 0.995],
    },
  }),
};

const heading = {
  initial: { y: "100%" },
  animate: (i: number) => ({
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: 0.5 + i * 0.05,
      ease: [0, 0.55, 0.45, 1],
    },
  }),
  exit: (i: number) => ({
    y: "-100%",
    transition: {
      type: "tween",
      duration: 0.5,
      delay: i * 0.05,
      ease: [0, 0.55, 0.45, 1],
    },
  }),
};

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasPrev, setHasPrev] = useState(false);
  const [hasNext, setHasNext] = useState(true);
  const [direction, setDirection] = useState("next");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setHasPrev(currentIndex > 0);
    setHasNext(currentIndex < data.length - 1);
  }, [currentIndex]);

  const handlePrev = () => {
    if (!isAnimating) {
      setDirection("prev");
      setIsAnimating(true);
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setDirection("next");
      setIsAnimating(true);
      setCurrentIndex((prev) => Math.min(prev + 1, data.length - 1));
    }
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  return (
    <>
      <div className="relative h-[450px] 2xl:h-[80vh] overflow-hidden bg-black">
        {data.map((item, i) => (
          <motion.div
            key={i}
            className="absolute top-0 left-0 h-full w-full bg-black -z-10 hidden"
            variants={variants}
            custom={direction}
            initial="initial"
            animate="animate"
            exit="exit"
            onAnimationComplete={handleAnimationComplete}
          >
            <h1 className="flex items-center justify-center z-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
              {item.title.split("").map((char, i) =>
                char === " " ? (
                  <span key={i}>&nbsp;</span>
                ) : (
                  <span key={i} className="overflow-hidden">
                    <motion.span
                      variants={heading}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      custom={i}
                      className="inline-flex whitespace-nowrap uppercase text-2xl md:text-4xl lg:text-5xl 2xl:text-[3vw] text-white"
                    >
                      {char}
                    </motion.span>
                  </span>
                )
              )}
            </h1>
            <Image
              src={item.url}
              alt={item.title}
              placeholder="blur"
              priority={true}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
        <AnimatePresence initial={false} custom={direction}>
          {data.map(
            (item, i) =>
              i === currentIndex && (
                <motion.div
                  key={i}
                  className="absolute top-0 left-0 h-full w-full bg-black"
                  variants={variants}
                  custom={direction}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  onAnimationComplete={handleAnimationComplete}
                >
                  <h1 className="flex items-center justify-center z-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                    {item.title.split("").map((char, i) =>
                      char === " " ? (
                        <span key={i}>&nbsp;</span>
                      ) : (
                        <span key={i} className="overflow-hidden">
                          <motion.span
                            variants={heading}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            custom={i}
                            className="inline-flex whitespace-nowrap uppercase text-2xl md:text-4xl lg:text-5xl 2xl:text-[3vw] text-white"
                          >
                            {char}
                          </motion.span>
                        </span>
                      )
                    )}
                  </h1>
                  <Image
                    src={item.url}
                    alt={item.title}
                    placeholder="blur"
                    priority={true}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-between mt-4 2xl:mt-[1.5vw] w-[95%] mx-auto">
        <button
          disabled={!hasPrev || isAnimating}
          onClick={handlePrev}
          className="uppercase disabled:opacity-50"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 45 14"
            xmlSpace="preserve"
            className="w-16 h-auto rotate-180 2xl:w-[4vw]"
          >
            <path
              d="M36.9,7.5H0v-1h36.9L35,0c2.6,2.8,6.7,5.4,10,7c-3.3,1.6-7.4,4.2-10,7L36.9,7.5z"
              className="ll-at-background-prevent"
              fill="black"
            ></path>
            <path
              d="M36.9,7.5H0v-1h36.9L35,0c2.6,2.8,6.7,5.4,10,7c-3.3,1.6-7.4,4.2-10,7L36.9,7.5z"
              className="ll-at-background-prevent"
              fill="black"
            ></path>
          </svg>
        </button>
        <button
          disabled={!hasNext || isAnimating}
          onClick={handleNext}
          className="uppercase disabled:opacity-50"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 45 14"
            xmlSpace="preserve"
            className="w-16 h-auto 2xl:w-[4vw]"
          >
            <path
              d="M36.9,7.5H0v-1h36.9L35,0c2.6,2.8,6.7,5.4,10,7c-3.3,1.6-7.4,4.2-10,7L36.9,7.5z"
              className="ll-at-background-prevent"
              fill="black"
            ></path>
            <path
              d="M36.9,7.5H0v-1h36.9L35,0c2.6,2.8,6.7,5.4,10,7c-3.3,1.6-7.4,4.2-10,7L36.9,7.5z"
              className="ll-at-background-prevent"
              fill="black"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
}

export default Slider;
