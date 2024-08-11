import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
// import transitionLottieFull from "../../../assets/lottie/cloudTransitionFull.json";
import transitionLottieLayer1 from "../../../assets/lottie/cloudTransitionLayer1.json";
import transitionLottieLayer2 from "../../../assets/lottie/cloudTransitionLayer2.json";
// import transitionLottieLayer3 from "../../../assets/lottie/cloudTransitionLayer3.json";
import { useGSAP } from "@gsap/react";

const Transition: React.FC<any> = (props: any) => {
  const lottieTransition1 = useRef<any>(null);
  const lottieTransition2 = useRef<any>(null);
  const lottieInstance1 = useRef<any>(null);
  const lottieInstance2 = useRef<any>(null);
  // const lottieTransition3 = useRef<any>(null);

  useGSAP(() => {
    lottieInstance1.current = Lottie.loadAnimation({
      container: lottieTransition1.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: transitionLottieLayer1,
    });

    lottieInstance2.current = Lottie.loadAnimation({
      container: lottieTransition2.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: transitionLottieLayer2,
    });

    return () => {
      lottieInstance1.current.destroy();
      lottieInstance2.current.destroy();

      // clearTimeout(hideTimeout);
    };
    // const lotTransition3 = Lottie.loadAnimation({
    //   container: lottieTransition3.current,
    //   renderer: "canvas",
    //   loop: true,
    //   autoplay: false,
    //   animationData: transitionLottieLayer3,
    // });

    // setTimeout(() => {}, 0);

    // Hide the animation container after the animation is done
    // const hideTimeout = setTimeout(() => {
    //   if (lottieTransition.current) {
    //     lottieTransition.current.style.display = "none";
    //   }
    // }, 8500);
  });

  useEffect(() => {
    if (props.playAnimation) {
      lottieInstance1.current.play();
      lottieInstance2.current.play();
    } else {
      lottieInstance1.current.stop();
      lottieInstance2.current.stop();
    }
  }, [props.playAnimation]);

  return (
    <div
      id={props.id}
      // className={`${props.className} ${props.playAnimation ? "opacity-100" : "opacity-0"} flex justify-center pointer-events-none absolute -left-[41.5rem] top-0 z-[900] aspect-[14/8] h-screen w-auto scale-125 bg-transparent lg:-left-[9.3rem] 2xl:bottom-0`}
      className={`${props.className} ${props.playAnimation ? "opacity-100" : "opacity-0"} pointer-events-none absolute top-0 z-[900] flex aspect-[14/8] justify-center bg-transparent xs:left-0 xs:h-full xs:w-full xs:scale-[5] sm:scale-[3.25] md:scale-[2.5] lg:scale-[1.75] xl:scale-150 2xl:scale-125`}
    >
      <div ref={lottieTransition1} className="absolute w-full h-full" />
      <div ref={lottieTransition2} className="absolute w-full h-full" />
      {/* <div ref={lottieTransition3} className="absolute top-0 w-screen h-full" /> */}
    </div>
  );
};

export default Transition;
