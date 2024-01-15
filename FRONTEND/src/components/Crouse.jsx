import { useEffect, useRef, useState } from "react";
import { Button } from "flowbite-react";

const Carousel = () => {
  // const crouselRef = useRef();
  // const cardRef = useRef();
  // const [activeIndex, updateActive] = useState(0);
  // useEffect(() => {
  //   let crousel = crouselRef.current;
  //   function handleScroll() {
  //     if (crousel && cardRef.current) {
  //       const cardWidth = crousel.offsetWidth / 1.25;
  //       let totalWidth = crousel.scrollWidth - crousel.clientWidth;
  //       crousel.scrollLeft += cardWidth;
  //       console.log(
  //         1 + Math.round(crousel.scrollLeft / cardRef.current.offsetWidth)
  //       );
  //       if (crousel.scrollLeft + cardWidth >= totalWidth) {
  //         crousel.scrollLeft = 0;
  //       }
  //     }
  //   }
  //   const scrollInterval = setInterval(handleScroll, 3500);
  //   crousel.addEventListener("scroll", handleScroll);
  //   return () => {
  //     crousel.removeEventListener("scroll", handleScroll);
  //     clearInterval(scrollInterval, handleScroll);
  //   };
  // }, []);
  function test(index) {
    console.log(index);
  }
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Crousels onSlideChange={test} leftControl="left" rightControl="right">
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Crousels>
    </div>
  );
};

export default Carousel;
