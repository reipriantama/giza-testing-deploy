import BrimoLogo from "../../icons/works/brimoLogo";
import RayaLogo from "../../icons/works/rayaLogo";
import Slider from "./slider";

import { sliderDataBrimo } from "./brimo";
import { sliderDataRaya } from "./raya";
import { sliderDataCodex } from "./codex";
import { sliderDataSayurBox } from "./sayurBox";
import CodexLogo from "../../icons/works/codexLogo";
import SayurBox from "../../icons/works/sayurBox";
import { useState, useEffect } from "react";

interface dataWorks {
  id: number;
  slider?: any;
  desc: string;
  field: string;
  logo: any;
  device: string;
  year: string;
  hover?: any;
}

const dataWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [imageIndices, setImageIndices] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  });

  useEffect(() => {
    let interval: any;
    if (hoveredIndex !== null) {
      interval = setInterval(() => {
        setImageIndices((prevIndices: any) => ({
          ...prevIndices,
          [hoveredIndex]:
            (prevIndices[hoveredIndex] + 1) % sliderDataBrimo.length,
        }));
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [hoveredIndex]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setImageIndices((prevIndices) => ({
      ...prevIndices,
      [index]: 0,
    }));
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return [
    {
      id: 1,
      slider: (
        <Slider
          // id="cardCursor"
          index="swiper-pagination-bullet-1"
          sliderData={sliderDataBrimo}
        />
      ),
      desc: "BRImo UI/UX Operation and Management Concept for Achieving a 10x Improvement",
      field: "Finance",
      logo: <BrimoLogo />,
      device: "Mobile App",
      year: "2023",
      hover: (
        <div
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          {sliderDataBrimo.map((item: any, index: number) => (
            <div
              key={index}
              className={`relative h-full w-full transition duration-1000 ease-out ${index === imageIndices[1] ? "scale-105 opacity-100" : "opacity-0"}`}
            >
              <img
                loading="lazy"
                className="absolute left-0 top-0 aspect-[608/660] rounded-2xl"
                src={item.image}
                alt="sliderImage"
              />
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 2,
      slider: (
        <Slider
          // id="cardCursor"
          index="swiper-pagination-bullet-2"
          sliderData={sliderDataRaya}
        />
      ),
      desc: "A Collaboration to Build Better Mobile Banking Experience",
      field: "Finance",
      logo: <RayaLogo />,
      device: "Mobile App",
      year: "2023",
      hover: (
        <div
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          {sliderDataRaya.map((item: any, index: number) => (
            <div
              key={index}
              className={`relative h-full w-full transition duration-1000 ease-out ${index === imageIndices[2] ? "scale-105 opacity-100" : "opacity-0"}`}
            >
              <img
                loading="lazy"
                className="absolute left-0 top-0 aspect-[608/660] rounded-2xl"
                src={item.image}
                alt="sliderImage"
              />
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 3,
      slider: (
        <Slider
          // id="cardCursor"
          index="swiper-pagination-bullet-3"
          sliderData={sliderDataCodex}
        />
      ),
      desc: "Simplifying Talent Management Process on Codex Telkom",
      field: "SAAS",
      logo: <CodexLogo />,
      device: "Mobile App",
      year: "2022",
      hover: (
        <div
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          {sliderDataCodex.map((item: any, index: number) => (
            <div
              key={index}
              className={`relative h-full w-full transition duration-1000 ease-out ${index === imageIndices[3] ? "scale-105 opacity-100" : "opacity-0"}`}
            >
              <img
                loading="lazy"
                className="absolute left-0 top-0 aspect-[608/660] rounded-2xl"
                src={item.image}
                alt="sliderImage"
              />
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 4,
      slider: (
        <Slider
          // id="cardCursor"
          index="swiper-pagination-bullet-4"
          sliderData={sliderDataSayurBox}
        />
      ),
      desc: "Quickly Design a New Way of Shopping Experience on eGroceries",
      field: "eGroceries",
      logo: <SayurBox />,
      device: "Mobile App",
      year: "2022",
      hover: (
        <div
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
        >
          {sliderDataSayurBox.map((item: any, index: number) => (
            <div
              key={index}
              className={`relative h-full w-full transition duration-1000 ease-out ${index === imageIndices[4] ? "scale-105 opacity-100" : "opacity-0"}`}
            >
              <img
                loading="lazy"
                className="absolute left-0 top-0 aspect-[608/660] rounded-2xl"
                src={item.image}
                alt="sliderImage"
              />
            </div>
          ))}
        </div>
      ),
    },
  ];
};

export default dataWorks;
