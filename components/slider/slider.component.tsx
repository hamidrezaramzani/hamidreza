import { useState } from "react";
import { SliderProps } from "./slider.type";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

export const Slider = <T,>({ values, render }: SliderProps<T>) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const currentValue = values[currentSlide];

  const handleSlideNext = () => {
    if (currentSlide !== values.length - 1) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const handleSlidePrev = () => {
    if (currentSlide !== 0) {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  return (
    <>
      <div className="absolute md:top-0 md:right-0 bottom-4 w-full right-0 z-50 md:w-6 h-16 flex justify-center items-center md:flex-col gap-2">
        <button
          onClick={handleSlidePrev}
          className="text-xl  hover:bg-slate-50 rounded-md transition-all"
        >
          <MdOutlineKeyboardArrowUp />
        </button>
        <span className="raleway-bold flex w-10">
          {currentSlide + 1} / {values.length}
        </span>
        <button
          onClick={handleSlideNext}
          className="text-xl hover:bg-slate-50 rounded-md transition-all"
        >
          <MdOutlineKeyboardArrowDown />
        </button>
      </div>
      {render(currentValue)}
    </>
  );
};
