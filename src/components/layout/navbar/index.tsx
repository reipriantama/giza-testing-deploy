import React, { useEffect, useRef, useState } from "react";
import GizaLogo from "../../icons/gizaLogo";
import Button from "../../ui/button";
import HamburgerIcon from "../../icons/hamburgerIcon";
import { navbarData } from "../../data/navbar";
import CloseIcon from "../../icons/closeIcon";
import "./index.scss";
import Modal from "./modal";
import ArrowDown from "../../icons/arrowDown";
import InsightModal from "./modal/insight";
import ServiceModal from "./modal/service";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

const Navbar: React.FC<any> = (props: any, show: any) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(show);
  const [isModalHovered, setIsModalHovered] = useState<boolean>(false);
  const [isOverHero, setIsOverHero] = useState<boolean>(false);
  const navbarContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [show]);

  useEffect(() => {
    const showAnim = gsap
      .from(navbarContainerRef.current, {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    const scrlTrigger = ScrollTrigger.create({
      start: "top top",
      end: "max",
      markers: false,
      onUpdate: (self) => {
        if (self.direction === -1) {
          showAnim.play();
        } else {
          showAnim.reverse();
        }
        // Check if the navbar is overlapping with containerHero
        const heroElement = document.getElementById("containerHero");
        if (heroElement) {
          const heroRect = heroElement.getBoundingClientRect();
          const navbarRect =
            navbarContainerRef.current?.getBoundingClientRect();
          if (navbarRect && navbarRect.bottom <= heroRect.bottom) {
            setIsOverHero(false);
          } else {
            setIsOverHero(true);
          }
        }
      },
    });

    return () => {
      scrlTrigger.kill();
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      paused: true,
      ease: CustomEase.create("custom", "M0,0.2 C0.285,1.467 0.233,0 1,0 "),
    });

    tl.fromTo(
      "#containerNavbar",
      {
        opacity: 0,
        y: -60,
      },
      {
        opacity: 1,
        y: 0,
      },
    );
    const tm = setTimeout(() => {
      tl.play();
    }, 4000);

    return () => {
      tl.kill();
      clearTimeout(tm);
    };
  });

  const handleMouseEnter = (id: number) => {
    setActiveItem(id);
  };

  const handleModalMouseEnter = () => {
    setIsModalHovered(true);
  };

  const handleModalMouseLeave = () => {
    setIsModalHovered(false);
    setActiveItem(null);
  };

  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeItem]);

  return (
    <>
      {isVisible && (
        <div id="navbar" className="navbarContainer" ref={navbarContainerRef}>
          <div
            id="containerNavbar"
            className={`${props.className} ${
              activeItem !== null
                ? "bg-white text-black"
                : isOverHero
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
            } flex w-full items-center justify-between gap-20 p-4 lg:px-20`}
          >
            <a href="" className="cursor-pointer">
              <GizaLogo
                color={
                  activeItem !== null ? "black" : isOverHero ? "black" : "white"
                }
                className="max-w-[92px] lg:max-w-[154px]"
              />
            </a>
            <div className="flex items-center gap-8">
              <div className="hidden gap-8 lg:flex">
                {navbarData.map((item: any, index: any) => (
                  <div
                    key={index}
                    className="group flex cursor-pointer items-center gap-[6px]"
                  >
                    {item.id === 1 || item.id === 2 ? (
                      <div
                        className="flex items-center gap-[6px]"
                        onMouseEnter={() => handleMouseEnter(item.id)}
                      >
                        <a
                          href={item.href}
                          className={`${
                            activeItem === item.id
                              ? "bg-gradient-primary bg-clip-text font-semibold text-transparent"
                              : ""
                          } text-[17px] font-normal leading-[22px] group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:font-semibold group-hover:text-transparent`}
                        >
                          {item.text}
                        </a>
                        <ArrowDown
                          className={`${
                            activeItem === item.id ? "rotate-180 transform" : ""
                          } size-4 transition duration-200 group-hover:rotate-180 group-hover:transform group-hover:text-[#F2901C]`}
                          gradient={activeItem === item.id}
                        />
                      </div>
                    ) : (
                      <>
                        <a
                          href={item.href}
                          className={`text-[17px] font-normal leading-[22px] group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:font-semibold group-hover:text-transparent`}
                        >
                          {item.text}
                        </a>
                      </>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Button
                  className={`${activeItem !== null ? "hidden lg:flex" : ""} w-[124px] !py-2`}
                  textClassName="text-sm"
                  primary={activeItem === null && !isOverHero}
                  secondary={activeItem !== null || isOverHero}
                  buttonText="Contact Us"
                  link="/contact-us/"
                />
                {activeItem !== null ? (
                  <CloseIcon
                    color="black"
                    className="cursor-pointer size-6 lg:hidden"
                    onClick={() => setActiveItem(null)}
                  />
                ) : (
                  <HamburgerIcon
                    className="cursor-pointer size-6 lg:hidden"
                    color={
                      activeItem !== null || isOverHero ? "black" : "white"
                    }
                    onClick={() => setActiveItem(-1)}
                  />
                )}
              </div>
            </div>
          </div>
          <Modal className="" show={activeItem !== null} />
          {activeItem === 1 && (
            <div
              className={`-mt-1 hidden lg:block lg:bg-white lg:px-20 ${
                isModalHovered ? "hovered" : ""
              }`} // Apply conditional class based on hover state
              onMouseEnter={handleModalMouseEnter}
              onMouseLeave={handleModalMouseLeave}
            >
              <ServiceModal show={activeItem === 1} />
            </div>
          )}
          {activeItem === 2 && (
            <div
              className={`-mt-1 hidden lg:block lg:bg-white lg:px-20 ${
                isModalHovered ? "hovered" : ""
              }`} // Apply conditional class based on hover state
              onMouseEnter={handleModalMouseEnter}
              onMouseLeave={handleModalMouseLeave}
            >
              <InsightModal show={activeItem === 2} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
