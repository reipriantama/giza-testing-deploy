import BankingIcon from "../../../../icons/modal/bankingIcon";
import FinanceIcon from "../../../../icons/modal/financeIcon";
import LogisticIcon from "../../../../icons/modal/logisticIcon";
import NgoIcon from "../../../../icons/modal/ngoIcon";

interface IndustryData {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

export const IndustryData: IndustryData[] = [
  {
    id: 1,
    title: "Finance",
    description: "Digital financial innovation",
    icon: <FinanceIcon />,
  },
  {
    id: 2,
    title: "Banking",
    description: "Modern banking transformation",
    icon: <BankingIcon />,
  },
  {
    id: 3,
    title: "Logistic",
    description: "Supply chain optimization",
    icon: <LogisticIcon />,
  },
  {
    id: 4,
    title: "Non-Governmental Organization (NGO)",
    description: "Empowering humanitarian mission",
    icon: <NgoIcon />,
  },
];
