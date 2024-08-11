import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import Lottie from "lottie-react";
import cursorLottie from "../../../assets/lottie/circleMeteor.json";
import { gsap } from "gsap";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorContent, setCursorContent] = useState<JSX.Element>(
    <Lottie
      animationData={cursorLottie}
      autoplay={true}
      loop={true}
      width={100}
      height={100}
      className="rotate-[135deg]"
    />,
  );

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "power3.out",
        });

        const cardCursors = document.querySelectorAll(".cardCursor");
        let isInCard = false;

        cardCursors.forEach((cardCursor) => {
          const rect = (cardCursor as HTMLElement).getBoundingClientRect();
          if (
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
          ) {
            isInCard = true;
          }
        });

        if (isInCard) {
          setCursorContent(
            <div className="flex size-[150px] items-center justify-center rounded-full bg-gradient-primary text-center font-bold leading-5 text-white">
              View <br />
              Case Study
            </div>,
          );
        } else {
          setCursorContent(
            <Lottie
              animationData={cursorLottie}
              autoplay={true}
              loop={true}
              width={100}
              height={100}
              className="rotate-[135deg]"
            />,
          );
        }
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("wheel", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.addEventListener("wheel", onMouseMove);
    };
  }, []);

  return (
    <div ref={cursorRef} className="hidden custom-cursor lg:block">
      <div
        className="cursor-inner"
        style={{
          opacity: cursorContent ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        {cursorContent}
      </div>
    </div>
  );
};

export default CustomCursor;
