import React, { useRef, useState } from "react";
import Title from "../../ui/title";
import Button from "../../ui/button";
import gsap from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface ExpertiseData {
  id: number;
  value: number | string;
  label: string;
}

gsap.registerPlugin(ScrollSmoother);

const Expertise: React.FC<any> = (props: any) => {
  const [progressNumberWorks, setProgressNumberWorks] = useState(0);
  const [progressNumberExperts, setProgressNumberExperts] = useState(0);
  const [progressNumberYears, setProgressNumberYears] = useState(0);
  const [countriesEngaged, setCountriesEngaged] = useState(0);
  const [isExpertFinal, setIsExpertFinal] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  const worksHandledSteps = [0, 10, 20, 50, 70, 90, 109];
  const expertsGrowingSteps = [0, 10, 19, 25, 31, 45, 50, "56+"];
  const yearsOfExpertiseSteps = [0, 2, 4, 6, 8, 10, 12, "13+"];
  const countriesEngagedSteps = [0, 1, 2, 3, 4, 5];

  const updateProgress = (
    steps: any[],
    setter: React.Dispatch<React.SetStateAction<any>>,
    setFinal?: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < steps.length) {
        setter(steps[index]);
        if (setFinal && index === steps.length - 1) {
          setFinal(true);
        }
        index++;
      } else {
        clearInterval(interval);
      }
    }, 200);
  };

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: container.current,
      start: "top 50%",
      // end: "bottom top",
      once: true,
      // markers: true,
      onEnter: () => {
        updateProgress(worksHandledSteps, setProgressNumberWorks);
        updateProgress(
          expertsGrowingSteps,
          setProgressNumberExperts,
          setIsExpertFinal,
        );
        updateProgress(
          yearsOfExpertiseSteps,
          setProgressNumberYears,
          setIsExpertFinal,
        );
        updateProgress(countriesEngagedSteps, setCountriesEngaged);
      },
    });
  });

  const progressData: ExpertiseData[] = [
    { id: 1, value: progressNumberWorks, label: "Works handled" },
    {
      id: 2,
      value: isExpertFinal ? "56+" : progressNumberExperts,
      label: "Experts and growing",
    },
    {
      id: 3,
      value: progressNumberYears ? progressNumberYears : "0",
      label: "Years of expertise",
    },
    { id: 4, value: countriesEngaged, label: "Countries engaged" },
  ];

  return (
    <div
      id={props.id}
      ref={container}
      className={`${props.className} -mt-1 space-y-[27px] px-4 py-8 lg:space-y-[71px] lg:pb-[150px] lg:pl-20 lg:pr-[60px] lg:pt-20`}
    >
      <Title titleText="who we are" />
      <div className="space-y-12 lg:space-y-[30px]">
        <div
          id={props.idBorder}
          className="grid grid-cols-2 gap-y-12 border-b-[1px] border-[#333333] border-opacity-30 pb-12 text-h1-tablet font-semibold lg:flex lg:justify-between lg:pb-14"
        >
          {progressData.map((data, index) => (
            <div key={index}>
              <div className="text-transparent bg-gradient-primary bg-clip-text">
                {data.value}
              </div>
              <p className="text-body-standard-mobile">{data.label}</p>
            </div>
          ))}
        </div>
        <div className="space-y-12 lg:flex lg:items-center lg:justify-between lg:gap-[107px] lg:space-y-0 lg:pr-[42px]">
          <h3 className="text-h3-mobile font-light leading-[48px] lg:max-w-[px] lg:text-h2-desktop lg:font-light lg:leading-[64px]">
            Beyond Agency,
            <strong className="font-bold">
              <br />
              It’s Strategic <br />
              Creative Partner
            </strong>
          </h3>
          <div id={props.idParagraph} className="space-y-12 lg:max-w-[586px]">
            <div className="text-body-standard-mobile text-[#]">
              <strong className="font-bold">Gizalab</strong> is a UX Design
              agency based in Indonesia, operating under the legal entity{" "}
              <strong className="font-bold">PT. Laluasa Cipta Asia</strong>. We
              specialize in expediting the creative design process for
              corporations and organizations, encompassing research, application
              interface design, websites, and other digital products.
            </div>
            <Button
              secondary={props.buttonTheme}
              className="w-[145px] hover:text-white"
              buttonText="About Us"
              link="/about-us/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
