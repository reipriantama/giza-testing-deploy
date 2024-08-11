import UiuxIcon from "../../../../icons/serviceTwo/uiuxIcon";
import DesignIcon from "../../../../icons/serviceTwo/designIcon";
import WorkshopIcon from "../../../../icons/serviceTwo/workshopIcon";
import UxAuditIcon from "../../../../icons/serviceTwo/uxAuditIcon";
import WebIcon from "../../../../icons/serviceTwo/webIcon";

interface ServiceModalData {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

export const ServiceModalData = [
  {
    id: 1,
    title: "UI/UX Design",
    description: "UI/UX design service in short periode",
    icon: <UiuxIcon className="size-8 lg:size-10" />,
  },
  {
    id: 2,
    title: "UX Audit",
    description: "Find and fix UX issue on your product",
    icon: <UxAuditIcon className="size-8 lg:size-10" />,
  },
  {
    id: 3,
    title: "Design Research & Strategy",
    description: "Do research and defining best strategy",
    icon: <DesignIcon className="size-8 lg:size-10" />,
  },

  {
    id: 4,
    title: "Web Design & Development",
    description: "Website for boost your online presence",
    icon: <WebIcon className="size-8 lg:size-10" />,
  },
  {
    id: 5,
    title: "Workshop",
    description: "Interactive learning session",
    icon: <WorkshopIcon className="size-8 lg:size-10" />,
  },
];
