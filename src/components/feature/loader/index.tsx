import React, { useEffect, useState, useCallback, useRef } from "react";
import preLoad from "../../../assets/lottie/preload.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import lottie from "lottie-web";

const Loader: React.FC<any> = ({ className }: any) => {
  const [percentage, setPercentage] = useState(0);
  const lottiePreload = useRef<any>(null);

  // Use requestAnimationFrame for smoother updates
  useEffect(() => {
    lottie.loadAnimation({
      container: lottiePreload.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: preLoad,
    });
  }, []);

  const updatePercentage = useCallback(() => {
    setPercentage((prev) => {
      if (prev < 100) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  }, []);

  useEffect(() => {
    let frameId: number;
    const animate = () => {
      updatePercentage();
      frameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frameId);
  }, [updatePercentage]);

  useGSAP(() => {
    const tl = gsap.timeline();
    const tm = setTimeout(() => {
      tl.to("#textPercent", {
        opacity: 0,
        y: 1000,
        duration: 1,
        ease: "power1.inOut",
      });
    }, 4000);
    return () => clearTimeout(tm);
  }, []);

  useEffect(() => {
    const scrollRestoration = history.scrollRestoration;
    if (scrollRestoration === "manual") {
      // No-op
    } else {
      history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <div className="fixed z-[99999] flex h-screen w-full flex-col items-center justify-center bg-transparent pb-[100px] text-white">
      <div
        ref={lottiePreload}
        className={`${className} absolute bottom-0 left-0 right-0 top-0`}
      />
      <div
        id="textPercent"
        className="absolute flex flex-col items-center justify-end w-full h-full"
      >
        <div className="text-[56px] font-bold leading-[70px]">
          {percentage}%
        </div>
        <p className="text-2xl leading-9">Your Journey Begins Now</p>
      </div>
    </div>
  );
};

export default Loader;
