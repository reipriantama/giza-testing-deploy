import React, { useRef } from "react";
import Title from "../../ui/title";
import "./index.scss";

import dataWorks from "../../data/works";
import Button from "../../ui/button";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const Works: React.FC<any> = (props: any) => {
  const containerRef = useRef<any>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "20% bottom",
      end: "bottom",
      // markers: true,
      once: true,
      onEnter: () => {
        const tl = gsap.timeline();
        tl.fromTo(
          "#titleWorks",
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            // ease: "expo.in",
          },
          1,
        );
        tl.fromTo(
          "#subTitleWorks",
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            // ease: "expo.in",
          },
          1,
        );
        tl.fromTo(
          "#contentWorks",
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 1 },
          2,
        );

        return () => {
          tl.kill();
        };
      },
    });
  });

  return (
    <div
      id="containerWorks"
      className={`${props.className} -mt-1 space-y-[32px] px-4 py-8 text-netral lg:space-y-[18px] lg:pb-[104px] lg:pl-20 lg:pr-[60px] lg:pt-20`}
    >
      <Title
        id="titleWorks"
        ref={containerRef}
        titleText="what we deliver"
        className="opacity-0"
      />

      <h3
        ref={containerRef}
        id="subTitleWorks"
        className="text-h3-mobile font-light leading-[48px] opacity-0 lg:max-w-[px] lg:text-h2-desktop lg:font-light lg:leading-[64px]"
      >
        Client
        <strong className="font-bold"> Stories</strong>
      </h3>
      <div
        id="contentWorks"
        className="space-y-12 lg:grid lg:grid-cols-2 lg:gap-2 lg:gap-x-16 lg:gap-y-[99px] lg:space-y-0"
      >
        {dataWorks().map((item: any, index: number) => (
          <div key={index} className="space-y-6">
            <div className="lg:hidden">{item.slider}</div>
            <div
              // id="cardCursor"
              className="cardCursor hidden aspect-[608/660] overflow-hidden rounded-2xl lg:block"
            >
              {item.hover}
            </div>
            <div className="space-y-4">
              <p className="text-xl font-semibold">{item.desc}</p>
              <div className="flex items-center gap-4 text-xs leading-[22px] opacity-30">
                <p>{item.field}</p>
                <p>Mobile App</p>
              </div>
              <div className="flex items-center gap-3 font-semibold">
                {item.logo}
                <hr className="h-1 w-16 bg-[#191715]" />
                <p>2023</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          buttonText="See All Works"
          className="w-[155px] hover:text-white"
          secondary={true}
          link="/works/"
        />
      </div>
    </div>
  );
};

export default Works;
