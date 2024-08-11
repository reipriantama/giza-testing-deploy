import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import ctaParticle from "../../../assets/lottie/ctaBackground.json";
import CtaButton from "../../icons/ctaButton";

const ButtonLottie: React.FC<any> = (props: any) => {
  const [isShowLottie, setIsShowLottie] = useState(false);
  const lottieButton = useRef<any>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: lottieButton.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: ctaParticle,
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  const handleShowLottie = () => {
    setIsShowLottie(true);
    lottie.play();
  };

  const handleHideLottie = () => {
    setIsShowLottie(false);
    lottie.pause();
  };
  return (
    <button
      onMouseEnter={handleShowLottie}
      onMouseLeave={handleHideLottie}
      className="relative flex items-center justify-center"
    >
      <CtaButton className={`lg:size- z-10 ${props.className}`} />
      <div
        className={`pointer-events-none absolute z-0 size-[200px] transition duration-700 lg:size-[300px] ${
          isShowLottie ? "opacity-100" : "opacity-0"
        } `}
        ref={lottieButton}
      />
    </button>
  );
};

export default ButtonLottie;
