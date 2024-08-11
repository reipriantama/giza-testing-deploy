import { Swiper, SwiperSlide } from "swiper/react";
import "./index.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Slider = (props: any) => {
  return (
    <>
      <Swiper
        id={props.id}
        loop={true}
        speed={1000}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: "." + props.index,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        breakpoints={{
          1280: {},
          360: {},
        }}
        spaceBetween={32}
        modules={[Autoplay, Pagination]}
        className="rounded-2xl"
      >
        {props.sliderData.map((item: any, index: number) => (
          <SwiperSlide key={index} className="w-full h-full">
            <img
              loading="lazy"
              className="aspect-[608/660] rounded-2xl"
              src={item.image}
              alt="sliderImage"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative top-0 w-full gap-10 mt-6 lg:hidden lg:gap-20">
        <div
          className={`${props.index} flex cursor-pointer justify-center gap-3`}
        ></div>
      </div>
    </>
  );
};

export default Slider;

// https://mariadanos.com.au/projects/
