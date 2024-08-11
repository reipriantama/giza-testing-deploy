import GrowthIcon from "../../../../icons/modal/growthIcon";
import IndustryIcon from "../../../../icons/modal/industryIcon";
import ProductivityIcon from "../../../../icons/modal/productivityIcon";
import UxDesignIcon from "../../../../icons/modal/uxDesignIcon";

interface InsightModalData {
  id: number;
  text: string;
  description: string;
  icon: JSX.Element;
}

const classNameIcon = "size-8 lg:size-10";

export const InsightModalData = [
  {
    id: 1,
    text: "UX Design & Research",
    description: "Explore UX design & research from expert",
    icon: <UxDesignIcon className={classNameIcon} />,
  },
  {
    id: 2,
    text: "Industry Insight",
    description: "Explore industry insight from expert",
    icon: <IndustryIcon className={classNameIcon} />,
  },
  {
    id: 3,
    text: "Productivity",
    description: "Explore all about productivity from expert",
    icon: <ProductivityIcon className={classNameIcon} />,
  },
  {
    id: 4,
    text: "Growth & Strategy",
    description: "Explore growth & strategy from expert",
    icon: <GrowthIcon className={classNameIcon} />,
  },
];
