/* eslint-disable jsx-a11y/img-redundant-alt */
import { Carousel } from "@material-tailwind/react";
import imgCarouselOne from "../../assets/products/1.png";
import imgCarouselTwo from "../../assets/products/2.png";
import imgCarouselThree from "../../assets/products/3.png";

export default function Imgcarousel() {
  return (
    <>
      <Carousel
        className="h-full w-full"
        transition={{ duration: 2 }}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span key={i} className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"}`} onClick={() => setActiveIndex(i)} />
            ))}
          </div>
        )}
        loop={true}
        autoplay={true}
      >
        <img src={imgCarouselOne} alt="image 1" className="h-100 w-full object-cover" />
        <img src={imgCarouselTwo} alt="image 1" className="h-100 w-full object-cover" />
        <img src={imgCarouselThree} alt="image 3" className="h-100 w-full object-cover" />
      </Carousel>
    </>
  );
}
