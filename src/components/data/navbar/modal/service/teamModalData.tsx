import CircleIcon from "../../../../icons/modal/circleIcon";
import CoreIcon from "../../../../icons/modal/coreIcon";
import UiUxTeamIcon from "../../../../icons/modal/uiUxTeamIcon";

interface TeamModalData {
  id: number;
  title: JSX.Element;
  description: string;
  icon: JSX.Element;
  href?: string;
}

// const iconClassName = ;

export const TeamModalData = [
  {
    id: 1,
    title: <CoreIcon className="lg:w-[52px]" />,
    description: "Creative Operations and Resources for Enterprise",
    icon: <CircleIcon className="size-8 lg:size-10" />,
    href: "/core/",
  },
  {
    id: 2,
    title: "UI/UX Team",
    description: "Get dedicated UI/UX team to boost your product",
    icon: <UiUxTeamIcon className="size-8 lg:size-10" />,
    href: "/uiux-subs/",
  },
];
