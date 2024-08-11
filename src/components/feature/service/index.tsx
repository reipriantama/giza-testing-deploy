import Title from "../../ui/title";
import CoreIcon from "../../icons/coreIcon";
import Button from "../../ui/button";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ServiceTwoData } from "../../data/service2";

gsap.registerPlugin(ScrollTrigger);

const ContentService = (props: any) => {
  const container = useRef<HTMLDivElement>(null);
  const borderRight = useRef<HTMLDivElement>(null);
  const contentOld = useRef<HTMLDivElement>(null);
  const contentNew = useRef<HTMLDivElement>(null);
  const containerContent = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Register GSAP animations for larger screens
      ScrollTrigger.create({
        trigger: container.current,
        pin: true,
        start: "-5% 10%",
        end: "200% 10%", // atau 75% 10%
        markers: false,
      });

      ScrollTrigger.create({
        trigger: containerContent.current,
        start: "100% 10%",
        end: "100% 10%",
        markers: false,
        onEnter: () => {
          gsap.fromTo(
            borderRight.current,
            {
              y: 0,
            },
            {
              y: 335,
              duration: 0.5,
              ease: "expo.in",
            },
          );
          gsap.to(contentOld.current, {
            opacity: 0,
            y: -30,
            ease: "expo.in",
            duration: 0.5,
            zIndex: 0,
          });
          gsap.fromTo(
            contentNew.current,
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              ease: "expo.in",
              duration: 0.5,
            },
          );
        },
        onEnterBack: () => {
          gsap.fromTo(
            borderRight.current,
            {
              y: 335,
            },
            {
              y: 0,
              duration: 0.5,
              ease: "expo.in",
            },
          );
          gsap.fromTo(
            contentOld.current,
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              ease: "expo.in",
              duration: 0.5,
              zIndex: 10,
            },
          );
          gsap.to(contentNew.current, {
            opacity: 0,
            y: -30,
            ease: "expo.in",
            duration: 0.5,
          });
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    });

    return () => {
      mm.revert();
    };
  });

  return (
    <div
      id={props.id}
      ref={container}
      className={`${props.className} justify-center space-y-[32px] px-4 pb-[32px] pt-[31px] lg:relative lg:flex lg:flex-col lg:space-y-[18px] lg:pb-[104px] lg:pl-20 lg:pr-[60px] lg:pt-20`}
    >
      <Title titleText="WHAT YOU NEED" />
      <div
        ref={containerContent}
        className="flex flex-col justify-between space-y-16 lg:h-screen lg:flex-row lg:space-y-0"
      >
        {/* serviceOne */}
        <div
          ref={contentOld}
          className="z-10 space-y-12 lg:flex lg:justify-between lg:space-y-0"
        >
          <div className="lg:max-w-[416px]">
            <h3 className="text-h3-mobile font-light leading-[48px] lg:max-w-[416px] lg:text-h2-desktop lg:font-light lg:leading-[64px]">
              A Full
              <span className="font-bold"> of Talented Dedicated Team</span>
            </h3>
          </div>
          <div className="space-y-12 lg:ml-[132px] lg:mr-[55px] lg:max-w-[750px] 2xl:ml-[350px]">
            <div
              id={props.idBorder}
              className="space-y-10 border-b-[1px] border-[#333333] border-opacity-30 pb-12 lg:space-y-6"
            >
              <div className="space-y-10 lg:flex lg:gap-10 lg:space-y-0">
                <div className="space-y-2 lg:max-w-[288px]">
                  <CoreIcon className="" color="" />
                  <p className="text-body-standard-desktop">
                    Creative Operations and Resources for Enterprise
                  </p>
                </div>
                <div className="space-y-4 text-body-standard-desktop">
                  <ul className="flex items-center gap-2">
                    <span className="rounded-full size-1 bg-gradient-primary" />
                    High Quality Man Power
                  </ul>
                  <ul className="flex items-center gap-2">
                    <span className="rounded-full size-1 bg-gradient-primary" />
                    Efficient Process Management
                  </ul>
                  <ul className="flex items-center gap-2">
                    <span className="rounded-full size-1 bg-gradient-primary" />
                    Efficient Process Management
                  </ul>
                </div>
              </div>

              <Button
                className="w-[161px]"
                buttonText="Learn More"
                secondary={props.buttonTheme}
              />
            </div>
            <div className="space-y-10 lg:space-y-6">
              <div className="space-y-10 lg:flex lg:gap-10 lg:space-y-0">
                <div className="space-y-4 lg:max-w-[288px]">
                  <h1 className="text-4xl font-semibold text-transparent bg-gradient-primary bg-clip-text">
                    UI/UX{" "}
                    <span id={props.idTitle} className="text-white">
                      Team{" "}
                    </span>
                  </h1>
                  <p className="text-body-standard-desktop">
                    The simple digital product design service. It feels like you
                    are working with your own teammates
                  </p>
                </div>
                <div className="space-y-4 text-body-standard-desktop">
                  <ul className="flex items-center gap-2">
                    <span className="rounded-full size-1 bg-gradient-primary" />
                    Working remotely or hybrid WFA/WFO
                  </ul>
                  <ul className="flex items-center gap-2">
                    <span className="rounded-full size-1 bg-gradient-primary" />
                    Up to 7 hours per man/days
                  </ul>
                  <ul className="flex items-center gap-2">
                    <span className="rounded-full size-1 bg-gradient-primary" />
                    20 man/days per month
                  </ul>
                </div>
              </div>

              <Button
                className="w-[161px]"
                buttonText="Learn More"
                secondary={props.buttonTheme}
              />
            </div>
          </div>
        </div>
        {/* serviceTwo */}
        <div
          ref={contentNew}
          className="space-y-12 lg:absolute lg:flex lg:justify-between lg:space-y-0 lg:opacity-0"
        >
          <h3 className="text-h3-mobile font-light leading-[48px] lg:mr-[82px] lg:max-w-[258px] lg:text-h2-desktop lg:font-light lg:leading-[64px]">
            Our<span className="font-bold"> Service & Expertise</span>
          </h3>
          <div className="space-y-6 md:min-w-[700px] lg:min-w-[800px] 2xl:ml-[200px]">
            {ServiceTwoData.map((item, index) => (
              <div
                key={index}
                className={`group relative space-y-6 pb-6 lg:flex lg:items-center lg:gap-6 lg:space-y-0 ${index !== ServiceTwoData.length - 1 ? "border-b-[1px] border-white border-opacity-30" : ""}`}
              >
                {item.icon}
                <div className="space-y-3 lg:flex lg:items-center lg:space-y-0">
                  <h4 className="text-h4-mobile font-normal leading-9 lg:w-[220px] lg:text-h4-tablet lg:font-normal lg:leading-[42px]">
                    {item.title}
                  </h4>
                  <p className="text-body-standard-mobile text-netral-4 lg:ml-14">
                    {item.description}
                  </p>
                </div>
                {item.hover}
              </div>
            ))}
          </div>
        </div>
        <div className="hidden w-[1px] bg-[#333333] lg:block">
          <div ref={borderRight} className="h-[139px] w-[2px] bg-accent" />
        </div>
      </div>
    </div>
  );
};

export default ContentService;
