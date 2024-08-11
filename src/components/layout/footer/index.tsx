// import DribbbleIcon from "../../icons/dribbble";
import GizaLogo from "../../icons/gizaLogo";
import InstagramIcon from "../../icons/instagram";
import LinkedinIcon from "../../icons/linkedin";
import MailIcon from "../../icons/mail";
// import TelpIcon from "../../icons/telp";
// import TwitterIcon from "../../icons/twitter";
import React, { Suspense, useContext, useRef } from "react";
import doorLottie from "../../../assets/lottie/doorNew.json";
import lineLottie from "../../../assets/lottie/lineAccent.json";
import style from "./footer.module.scss";
import gsap from "gsap";
// import ButtonLottie from "../../ui/buttonLottie";
import { useGSAP } from "@gsap/react";
import lottie from "lottie-web";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MediumIcon from "../../icons/medium";
import YoutubeIcon from "../../icons/youtube";
import TiktokIcon from "../../icons/tiktokIcon";
import { Gpu } from "../../context/gpuContext";

const ButtonLottie = React.lazy(() => import("../../ui/buttonLottie"));

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const lottieDoor = useRef<any>(null);
  const lottieLine = useRef<any>(null);
  const textAnimateFirst = useRef<HTMLDivElement>(null);
  const textAnimateSecond = useRef<HTMLDivElement>(null);
  const textAnimateThird = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const { gpuTier }: any = useContext(Gpu);

  //---animation text start---//
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 3 });
    const lotLine = lottie.loadAnimation({
      container: lottieLine.current,
      renderer: "canvas",
      loop: false,
      autoplay: false,
      animationData: lineLottie,
    });
    const lotDoor = lottie.loadAnimation({
      container: lottieDoor.current,
      renderer: "canvas",
      loop: false,
      autoplay: false,
      animationData: doorLottie,
    });

    lotLine.hide();
    lotDoor.hide();

    ScrollTrigger.create({
      trigger: container.current,
      start: "top 50%",
      once: true,
      // markers: true,
      onEnter: () => {
        lotLine.show();
        if (gpuTier.tier === 1) {
          lotLine.goToAndStop(lotLine.totalFrames - 1, true);
        } else if (gpuTier.tier === 3) {
          lotLine.play();
        }

        setTimeout(() => {
          lotDoor.show();
          if (gpuTier.tier === 1) {
            lotDoor.goToAndStop(lotDoor.totalFrames - 1, true);
          } else if (gpuTier.tier === 3) {
            lotDoor.play();
          }
        }, 1000);

        const tm = setTimeout(
          () => {
            tl.fromTo(
              textAnimateFirst.current,
              {
                // delay: 3,
                opacity: 0,
                x: -100,
              },
              { x: 0, opacity: 1, duration: 1, stagger: 0.3 },
              0,
            )
              .fromTo(
                textAnimateSecond.current,
                { opacity: 0, x: -100 },
                { x: 0, opacity: 1, duration: 0.6 },
                ">=-0.5",
              )
              .fromTo(
                textAnimateThird.current,
                { opacity: 0, x: -100 },
                { x: 0, opacity: 1, duration: 0.8 },
                ">",
              );
          },
          lotDoor.timeCompleted + lotLine.timeCompleted + 1000,
        );
        return () => {
          clearTimeout(tm);
          lotLine.destroy();
          lotDoor.destroy();
        };
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lotLine.destroy();
      lotDoor.destroy();
    };
  }, []);

  return (
    <div
      ref={container}
      className="relative bg-netral-0 px-4 pb-[47px] pt-5 text-white xl:px-[112px]"
    >
      <div className="top-0 h-80 lg:h-44">
        <div
          ref={lottieLine}
          className={`${style.lineLottie} pointer-events-none absolute`}
        />
        <div
          ref={lottieDoor}
          className={`${style.doorLottie} pointer-events-none absolute`}
        />
      </div>

      <div className="relative z-20 mb-[26px] flex flex-col items-center justify-center lg:mb-0 lg:items-start">
        <div
          ref={textAnimateFirst}
          className={`${style.hiddenText} text-center text-h2-tablet font-light leading-[58px] lg:text-start lg:text-[80px] lg:leading-[96px]`}
        >
          Let’s start our
        </div>
        <div
          ref={textAnimateSecond}
          className={`${style.hiddenText} text-center text-h2-tablet font-semibold lg:text-[80px]`}
        >
          journey of innovation!
        </div>
      </div>
      <div
        ref={textAnimateThird}
        className={`${style.hiddenText} mb-14 mt-0 flex flex-col items-center justify-center space-y-4 lg:mb-[211px] lg:mt-4 lg:flex-row lg:gap-7 lg:space-y-0`}
      >
        <h5 className="bg-gradient-primary bg-clip-text text-h1-mobile font-semibold text-transparent lg:text-[80px] lg:leading-[100px]">
          Contact Us
        </h5>
        <Suspense fallback={null}>
          <ButtonLottie />
        </Suspense>
      </div>
      <div className="lg space-y-[56px] border-t-[1px] border-[#43474B] pt-[60px] lg:flex lg:justify-between lg:gap-[143px] lg:space-y-0">
        <div className="space-y-4 lg:space-y-0">
          <GizaLogo className="lg:hidden" />
          <p className="text-h5-mobile lg:pb-4 lg:text-2xl">
            PT Laluasa Cipta Asia
          </p>
          <div className="space-y-6 text-body-small-mobile leading-6 opacity-70 lg:max-w-[371px] lg:text-body-standard-desktop">
            <p className="">
              <span className="font-bold">Jakarta</span> - Jl. Tebet Timur Dalam
              II F No.10, South Jakarta 12820
            </p>
            <p className="">
              <span className="font-bold">Bandung</span> - Gd. Inside25 Jl.
              Permata Permai Raya No.25, Arcamanik, Bandung, Indonesia 40293
            </p>
          </div>
        </div>
        <div className="flex gap-6 lg:flex-row-reverse lg:gap-[143px]">
          <div className="min-w-[152px] space-y-4 lg:max-w-[124px]">
            <h5 className="text-h5-mobile lg:text-2xl">Sitemap</h5>
            <div className="space-y-[10px] text-body-small-mobile leading-6 opacity-70 lg:text-body-standard-desktop">
              <div>
                <a className="cursor-pointer" href="/works/">
                  Works
                </a>
              </div>
              <div>
                <a className="cursor-pointer" href="https://career.gizalab.co/">
                  Careers
                </a>
              </div>
              <div>
                <a className="cursor-pointer" href="/inside-the-lab/">
                  Inside The Lab
                </a>
              </div>
              <div>
                <a className="cursor-pointer" href="/about-us/">
                  About Us
                </a>
              </div>
              <div>
                <a className="cursor-pointer" href="/contact-us/">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="w-[152px] space-y-4">
            <h5 className="text-h5-mobile lg:text-2xl">Service</h5>
            <div className="space-y-[10px] text-body-small-mobile leading-6 opacity-70 lg:text-body-standard-desktop">
              <div>
                <a className="cursor-pointer" href="/core/" target="_blank">
                  CORE
                </a>
              </div>
              <div>
                <a
                  className="cursor-pointer"
                  href="/uiux-subs/"
                  target="_blank"
                >
                  UI/UX Team
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h5 className="text-h5-mobile lg:text-2xl">Contact</h5>
          <div className="flex items-center gap-2 opacity-70">
            <MailIcon className="size-4" />
            <p className="leading-6 text-body-small-mobile lg:text-body-standard-desktop">
              info@gizalab.co
            </p>
          </div>
          {/* <div className="flex items-center gap-2 opacity-70">
            <TelpIcon className="size-4" />
            <p className="leading-6 text-body-small-mobile lg:text-body-standard-desktop">
              info@gizalab.co
            </p>
          </div> */}
          <div className="flex gap-6 lg:grid lg:grid-cols-3 lg:gap-6">
            <a
              href="https://www.linkedin.com/company/gizalab/"
              target="_blank"
              className="cursor-pointer"
            >
              <LinkedinIcon className="size-6" />
            </a>
            <a
              href="https://www.instagram.com/gizalab/"
              target="_blank"
              className="cursor-pointer"
            >
              <InstagramIcon className="size-6" />
            </a>
            <a
              href="https://medium.com/inside-the-lab/"
              target="_blank"
              className="cursor-pointer"
            >
              <MediumIcon className="size-6" />
            </a>
            <a
              href="https://www.youtube.com/@gizalab"
              target="_blank"
              className="cursor-pointer"
            >
              <YoutubeIcon className="size-6" />
            </a>
            <a
              href="https://www.tiktok.com/@gizalab"
              target="_blank"
              className="cursor-pointer"
            >
              <TiktokIcon className="size-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
