import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation } from "swiper/modules";

import IconArrowLeft from "../../icons/iconArrowLeft";
import IconArrowRight from "../../icons/iconArrowRight";
import CircularProgress from "../../ui/circularProgress";
import React, { useRef, useState } from "react";
import { testimonyData } from "../../data/testimony";
import Title from "../../ui/title";

const Testimony: React.FC<any> = (props: any) => {
  const [valueProgress, setValueProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const progressCircle = useRef<any>(null);
  const progressContent = useRef<any>(null);
  const onAutoplayTimeLeft = (_s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      setValueProgress(Math.ceil(progress * 100) + 1);
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress),
      );
    }

    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div
      id={props.id}
      className={`${props.className} -mt-[1px] space-y-8 pb-[112px] pt-[31px] lg:pb-[137px] lg:pt-20`}
    >
      <div className="flex items-center ml-4 space-x-3 lg:ml-20">
        <Title titleText="WHAT our client SAY" />
      </div>
      <div className="pl-4 space-y-12 lg:pl-20">
        <h3 className="text-h3-mobile font-bold leading-[48px] lg:text-h2-desktop lg:font-light lg:leading-[64px]">
          Client <span className="font-light">Experiences</span>
        </h3>
        <Swiper
          loop={true}
          slidesOffsetAfter={100}
          slidesPerView={1.25}
          speed={1500}
          spaceBetween={32}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          onSlideChange={handleSlideChange}
          autoplay={{
            delay: 15000, // 15s
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            1280: {
              spaceBetween: 0,
              slidesPerView: 1.25,
            },
          }}
          modules={[Autoplay, Navigation]}
          className=""
        >
          {testimonyData.map((item, index) => (
            <SwiperSlide
              key={index}
              className={index === activeIndex ? "" : "opacity-30"}
            >
              <div className="space-y-5 lg:space-y-10">
                <p className="min-h-[300px] text-xl font-normal leading-[30px] lg:min-h-[240px] lg:w-[808px] lg:text-[32px] lg:leading-[48px]">
                  {item.text}
                </p>
                <div className="flex gap-[px]">
                  <CircularProgress
                    hidden={index === activeIndex ? "" : "opacity-0"}
                    value={100 - valueProgress}
                    max={100}
                    image={item.image}
                    progressCircle={progressCircle}
                    // progressContent={progressContent}
                  />
                  <div className="flex flex-col justify-center space-y-1">
                    <h6 className="text-h5-mobile font-semibold leading-[22px]">
                      {item.name}
                    </h6>
                    <p className="font-normal text-h6-mobile">
                      {item.position}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="relative w-[120px] gap-10 lg:gap-20">
          <IconArrowLeft
            id={props.idArrow}
            className="text-white swiper-button-prev"
          />
          <IconArrowRight
            id={props.idArrow}
            className="text-white swiper-button-next"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimony;
