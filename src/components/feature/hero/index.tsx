import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import lottieButton from "../../../assets/lottie/circleMeteor.json";
import imgBrimo from "../../../assets/hero/imgBrimo.png";
import imgBrimoScreen from "../../../assets/hero/imgBrimoScreen.png";
import imgCodex from "../../../assets/hero/imgCodex.png";
import imgRaya from "../../../assets/hero/imgRaya.png";
import imgSayurBox from "../../../assets/hero/imgSayurBox.png";
import style from "./index.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import Transition from "../transition";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import Lottie from "lottie-web";
import { Gpu } from "../../context/gpuContext";

gsap.registerPlugin(CustomEase, ScrollToPlugin, ScrollTrigger, ScrollSmoother);

const Hero: React.FC<any> = (props: any) => {
  const [playAnimation, setPlayAnimation] = useState(false);
  const [zIndex, setZIndex] = useState(0);
  const { gpuTier } = useContext(Gpu);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageMoveRefs = useRef<HTMLImageElement[]>([]);
  const textTitleRef = useRef<HTMLHeadingElement>(null);
  const textParagraphHeroRef = useRef<HTMLHeadingElement>(null);
  const textParagraphHeroBrRef = useRef<HTMLSpanElement>(null);
  const buttonScrollRef = useRef<HTMLDivElement>(null);
  const containerTitle = useRef<HTMLDivElement>(null);
  const textScrollRef = useRef<HTMLParagraphElement>(null);
  const lotButton = useRef<any>(null);

  useEffect(() => {
    // Ensure gpuTier is defined before accessing its properties
    if (gpuTier) {
      const gpuScan = gpuTier.tier === 1 ? false : true;
      Lottie.loadAnimation({
        container: lotButton.current,
        renderer: "svg",
        loop: gpuScan,
        autoplay: gpuScan,
        animationData: lottieButton,
      });
    }
  }, [gpuTier]);

  useEffect(() => {
    const parallaxBackground = (e: MouseEvent, movement: number) => {
      const $this = containerRef.current;
      if (!$this) return;
      const relX = e.pageX - $this.offsetLeft;
      const relY = e.pageY - $this.offsetTop;
      $this.style.backgroundPosition = `${(relX / $this.offsetWidth) * movement}px ${
        (relY / $this.offsetHeight) * movement
      }px`;
    };

    const parallaxElement = (
      e: MouseEvent,
      target: string,
      movement: number,
    ) => {
      const $this = containerRef.current;
      if (!$this) return;
      const relX = e.pageX - $this.offsetLeft;
      const relY = e.pageY - $this.offsetTop;
      const elements = document.querySelectorAll(target);
      elements.forEach((element) => {
        (element as HTMLElement).style.transform = `translate3d(${
          ((relX - $this.offsetWidth / 2) / $this.offsetWidth) * movement
        }px, ${((relY - $this.offsetHeight / 2) / $this.offsetHeight) * movement}px, 0)`;
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      parallaxBackground(e, -60);
      parallaxElement(e, "#imageMove", -50);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const preventDefault = useCallback((e: Event) => {
    e.preventDefault();
  }, []);

  const disableScroll = useCallback(() => {
    window.addEventListener("wheel", preventDefault, { passive: false });
  }, [preventDefault]);

  const enableScroll = useCallback(() => {
    window.removeEventListener("wheel", preventDefault);
  }, [preventDefault]);

  useGSAP(() => {
    const tl = gsap.timeline({
      paused: true,
      ease: CustomEase.create("custom", "M0,0.2 C0.285,1.467 0.233,0 1,0 "),
    });

    tl.fromTo(containerRef.current, { scale: 0 }, { scale: 1, duration: 1 })
      .fromTo(
        imageMoveRefs.current,
        { opacity: 0, scale: 0, rotate: -15 },
        { opacity: 1, scale: 1, rotate: 0, duration: 1, stagger: 0.2 },
        0.2,
      )
      .fromTo(
        textTitleRef.current,
        { opacity: 0, y: 100 },
        { y: 0, opacity: 1, duration: 1 },
        0.6,
      )
      .fromTo(
        textParagraphHeroRef.current,
        { opacity: 0, y: 100 },
        { y: 0, opacity: 1, duration: 1 },
        0.8,
      )
      .fromTo(
        textParagraphHeroBrRef.current,
        { opacity: 0, y: 100 },
        { y: 0, opacity: 1, duration: 1 },
        1,
      )
      .fromTo(
        buttonScrollRef.current,
        { opacity: 0, y: -200 },
        { y: 0, opacity: 1, duration: 1 },
        1.2,
      )
      .fromTo(
        textScrollRef.current,
        { opacity: 0, y: 100 },
        { y: 0, opacity: 1, duration: 1 },
        1.2,
      );

    const tm = setTimeout(() => {
      tl.play();
    }, 4000);

    return () => {
      tl.kill();
      clearTimeout(tm);
    };
  });

  useEffect(() => {
    if (playAnimation) {
      const tl = gsap.timeline();
      const tlScroll = gsap.timeline({
        onStart: () => {
          document.body.style.pointerEvents = "none";
          disableScroll();
        },
        onComplete: () => {
          document.body.style.pointerEvents = "auto";
          enableScroll();
        },
      });
      const tlAnimation = gsap.timeline();

      tlAnimation.fromTo(
        "#transitionContainer",
        {
          y: 1000,
        },
        {
          y: 0,
          duration: 1,
        },
      );

      tl.to(".imageMove1, .imageMove2, .imageMove3, .imageMove4, .imageMove5", {
        left: (_, target): any => {
          if (target.classList.contains("imageMove1")) return "45vw";
          if (target.classList.contains("imageMove2")) return "45vw";
          if (target.classList.contains("imageMove3")) return "45vw";
          if (target.classList.contains("imageMove4")) return "45vw";
          if (target.classList.contains("imageMove5")) return "45vw";
          return 0;
        },
        y: (_, target) => {
          if (target.classList.contains("imageMove1")) return 1000;
          if (target.classList.contains("imageMove2")) return 560;
          if (target.classList.contains("imageMove3")) return 550;
          if (target.classList.contains("imageMove4")) return 500;
          if (target.classList.contains("imageMove5")) return 500;
          return 0;
        },
        duration: 3,
      });
      tl.to(containerTitle.current, { y: -1000, duration: 1 }, 0.2);
      tl.to(textScrollRef.current, { y: 1000, duration: 1 }, 0.2);
      // window.scrollSmoother.paused(true);
      tlScroll.to(
        window,
        {
          scrollTo: { y: "#containerWorks", offsetY: -20 },
          duration: 1,
          ease: "power2.inOut",
        },
        1,
      );
      tlScroll.to(
        {},
        {
          // onComplete: () => window.scrollSmoother.paused(false),
          duration: 0,
        },
      );
      tlScroll.to(
        {},
        {
          onComplete: () => {
            tlAnimation.remove(tlAnimation);
            tl.seek(0);
            tl.pause();
            setPlayAnimation(false);
          },
          duration: 2,
        },
      );

      return () => {
        tlScroll.kill();
        tl.kill();
      };
    }
  }, [playAnimation, disableScroll, enableScroll, containerRef]);

  const handleClick = () => {
    setPlayAnimation(true);
    setZIndex(1000);
  };

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#containerWorks",
      start: "5 bottom",
      end: "bottom ",
      markers: false,
      once: true,
      onEnter: handleClick,
    });
  });

  return (
    <>
      <div
        ref={containerRef}
        id={props.id}
        className={`${props.className} h-screen w-screen overflow-hidden px-5 text-white`}
      >
        <div className={style.stars} />
        <div className={style.twinkling} />
        <div className={style.clouds} />
        <div className="flex items-center justify-center h-full">
          <div
            ref={containerTitle}
            className="relative z-20 space-y-4 text-center"
          >
            <h2
              ref={textTitleRef}
              id="textTitle"
              className="bg-gradient-primary bg-clip-text font-raleway text-h6-mobile !font-semibold uppercase text-transparent opacity-0 lg:text-xl lg:leading-6"
            >
              STRATEGIC CREATIVE PARTNER
            </h2>
            <h1
              ref={textParagraphHeroRef}
              id="textParagraphHero"
              className="titleHero text-[32px] font-semibold leading-[48px] text-white opacity-0 lg:text-[56px] xl:text-[80px] xl:leading-[100px]"
            >
              Simplifying Your Digital <br />
              <span ref={textParagraphHeroBrRef} id="textParagraphHeroBr">
                Innovation Journey
              </span>
            </h1>
          </div>
          <button
            onClick={handleClick}
            className={`absolute bottom-12 ${zIndex === 1000 ? "z-[1000]" : "z-50"} cursor-pointer`}
          >
            <div ref={buttonScrollRef} id="buttonScroll">
              {/* <Lottie
                className={`${playAnimation ? "" : `${style.lottieButton}`}`}
                animationData={lottieButton}
                loop={true}
                rendererSettings={{
                  preserveAspectRatio: "xMidYMid slice",
                }}
              /> */}
              <div
                ref={lotButton}
                className={`${playAnimation ? "" : `${style.lottieButton}`}`}
              />
            </div>
            <p ref={textScrollRef} className="mt-4 leading-[18px]">
              Scroll
            </p>
          </button>
          <img
            id="imageMove"
            ref={(el) => el && imageMoveRefs.current.push(el)}
            className="imageMove1 absolute -top-14 left-16 z-10 w-[168px] rounded-2xl lg:left-[20rem] lg:min-w-[200px]"
            src={imgBrimo}
            alt="brimo"
          />
          <img
            id="imageMove"
            ref={(el) => el && imageMoveRefs.current.push(el)}
            className="imageMove2 absolute -right-16 top-72 z-10 min-w-[190px] rounded-2xl lg:right-12 lg:min-w-[203px]"
            src={imgRaya}
            alt="raya"
          />
          <img
            id="imageMove"
            ref={(el) => el && imageMoveRefs.current.push(el)}
            className="imageMove3 absolute -left-20 top-[27rem] z-10 w-[178px] rounded-2xl lg:left-20 lg:top-80 lg:min-w-[152px]"
            src={imgCodex}
            alt="codex"
          />
          <img
            id="imageMove"
            ref={(el) => el && imageMoveRefs.current.push(el)}
            className="imageMove4 lg:-bottom- absolute -bottom-24 -right-3 z-10 min-w-[154px] rounded-2xl lg:left-[22rem]"
            src={imgSayurBox}
            alt="sayurbox"
          />
          <img
            id="imageMove"
            ref={(el) => el && imageMoveRefs.current.push(el)}
            src={imgBrimoScreen}
            alt="brimoScreen"
            className="imageMove5 absolute -bottom-[13rem] right-28 z-50 hidden min-w-[203px] rounded-2xl lg:block"
          />
        </div>
        <Transition
          id="transitionContainer"
          className=""
          playAnimation={playAnimation}
        />
      </div>
    </>
  );
};

export default Hero;
