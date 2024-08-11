import UiuxIcon from "../../icons/serviceTwo/uiuxIcon";
import DesignIcon from "../../icons/serviceTwo/designIcon";
import WorkshopIcon from "../../icons/serviceTwo/workshopIcon";
import UxAuditIcon from "../../icons/serviceTwo/uxAuditIcon";
import WebIcon from "../../icons/serviceTwo/webIcon";
// import ButtonLottie from "../../ui/buttonLottie";
import designHover from "../../../assets/service2/designHover.webp";
import uXAuditHover from "../../../assets/service2/uXAuditHover.webp";
import uxDesignHover from "../../../assets/service2/uXDesignHover.webp";
import webDesignHover from "../../../assets/service2/webDesignHover.webp";
import workshopHover from "../../../assets/service2/workshopHover.webp";
import CtaButton from "../../icons/ctaButton";

interface ServiceTwoData {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  hover: JSX.Element;
}

export const ServiceTwoData = [
  {
    id: 1,
    title: "UI/UX Design",
    description: "UI/UX design service in short periode",
    icon: <UiuxIcon className="lg:size-10" />,
    hover: (
      <div className="absolute top-0 flex items-center gap-2 transition duration-200 ease-in opacity-0 right-2 group-hover:opacity-100 lg:top-auto">
        <img
          className="rounded-3xl opacity-0 lg:h-[215px] lg:w-[186px] lg:opacity-100"
          src={uxDesignHover}
          alt="hover"
        />
        {/* <ButtonLottie className="opacity-0 lg:opacity-100" /> */}
        <CtaButton className="cursor-pointer" />
      </div>
    ),
  },
  {
    id: 2,
    title: "Design Research & Strategy",
    description: "Do research and defining best strategy",
    icon: <DesignIcon className="lg:size-10" />,
    hover: (
      <div className="absolute top-0 flex items-center gap-2 transition duration-200 ease-in opacity-0 right-2 group-hover:opacity-100 lg:top-auto">
        <img
          className="rounded-3xl opacity-0 lg:h-[215px] lg:w-[186px] lg:opacity-100"
          src={designHover}
          alt="hover"
        />
        {/* <ButtonLottie className="opacity-0 lg:opacity-100" /> */}
        <CtaButton className="cursor-pointer" />
      </div>
    ),
  },
  {
    id: 3,
    title: "Workshop",
    description: "Interactive learning session",
    icon: <WorkshopIcon className="lg:size-10" />,
    hover: (
      <div className="absolute top-0 flex items-center gap-2 transition duration-200 ease-in opacity-0 right-2 group-hover:opacity-100 lg:top-auto">
        <img
          className="rounded-3xl opacity-0 lg:h-[215px] lg:w-[186px] lg:opacity-100"
          src={workshopHover}
          alt="hover"
        />
        {/* <ButtonLottie className="opacity-0 lg:opacity-100" /> */}
        <CtaButton className="cursor-pointer" />
      </div>
    ),
  },
  {
    id: 4,
    title: "UX Audit",
    description: "Find and fix UX issue on your product",
    icon: <UxAuditIcon className="lg:size-10" />,
    hover: (
      <div className="absolute top-0 flex items-center gap-2 transition duration-200 ease-in opacity-0 right-2 group-hover:opacity-100 lg:top-auto">
        <img
          className="rounded-3xl opacity-0 lg:h-[215px] lg:w-[186px] lg:opacity-100"
          src={uXAuditHover}
          alt="hover"
        />
        {/* <ButtonLottie className="opacity-0 lg:opacity-100" /> */}
        <CtaButton className="cursor-pointer" />
      </div>
    ),
  },
  {
    id: 5,
    title: "Web Design & Development",
    description: "Website for boost your online presence",
    icon: <WebIcon className="lg:size-10" />,
    hover: (
      <div className="absolute top-0 flex items-center gap-2 transition duration-200 ease-in opacity-0 right-2 group-hover:opacity-100 lg:top-auto">
        <img
          className="rounded-3xl opacity-0 lg:h-[215px] lg:w-[186px] lg:opacity-100"
          src={webDesignHover}
          alt="hover"
        />
        {/* <ButtonLottie className="opacity-0 lg:opacity-100" /> */}
        <CtaButton className="cursor-pointer" />
      </div>
    ),
  },
];
