// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// const data = [
//   {
//     title: "modern",
//     url: "/modern Architecture.jpg",
//   },
//   {
//     title: "Gothic",
//     url: "/Gothic architecture.jpg",
//   },
//   {
//     title: "Greek Revival",
//     url: "/Greek Revival architecture.jpg",
//   },
//   {
//     title: "Islamic",
//     url: "/Islamic architecture.jpg",
//   },
//   {
//     title: "Byzantine",
//     url: "/Byzantine architecture.jpg",
//   },
//   {
//     title: "Ancient Roman",
//     url: "/Ancient Roman architecture.jpg",
//   },
// ];

// const main = {
//   initial: {
//     clipPath: "inset(0 0 0 100%)",
//   },
//   animate: {
//     clipPath: "inset(0)",
//     transition: {
//       type: "tween",
//       duration: 0.8,
//       ease: [0.645, 0.075, 0.275, 0.995],
//     },
//   },
//   exit: {
//     clipPath: "inset(0 100% 0 0)",
//     transition: {
//       type: "tween",
//       duration: 0.8,
//       ease: [0.645, 0.075, 0.275, 0.995],
//     },
//   },
// };

// function Slider() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [hasPrev, setHasPrev] = useState(false);
//   const [hasNext, setHasNext] = useState(true);

//   useEffect(() => {
//     setHasPrev(currentIndex > 0);
//     setHasNext(currentIndex < data.length - 1);
//   }, [currentIndex]);

//   const handlePrev = () => {
//     setCurrentIndex((prev) => Math.max(prev - 1, 0));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => Math.min(prev + 1, data.length - 1));
//   };

//   return (
//     <>
//       <div className="flex overflow-hidden">
//         {data.map((item, i) => (
//           <motion.div
//             animate={{
//               x: currentIndex * -100 + "%",
//             }}
//             transition={{ duration: 0.8, ease: [0.645, 0.075, 0.275, 0.995] }}
//             className="relative h-[500px] min-w-full"
//             key={i}
//           >
//             <span className="text-7xl text-white z-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
//               {item.title}
//             </span>
//             <Image
//               src={item.url}
//               alt={item.title}
//               priority={true}
//               fill
//               className="object-cover"
//             />
//           </motion.div>
//         ))}
//       </div>
//       <div className="flex items-center justify-between">
//         <button
//           disabled={!hasPrev}
//           onClick={handlePrev}
//           className="uppercase disabled:opacity-50"
//         >
//           prev
//         </button>
//         <button
//           disabled={!hasNext}
//           onClick={handleNext}
//           className="uppercase disabled:opacity-50"
//         >
//           next
//         </button>
//       </div>
//     </>
//   );
// }

// export default Slider;
