import React, { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../ui/accordion";
import "./index.css";
import InsightModal from "./insight";
import ServiceModal from "./service";

const Modal: React.FC<{ show: boolean; className?: string }> = ({
  show,
  className,
}) => {
  const [isVisible, setIsVisible] = React.useState(show);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [show]);

  return (
    <>
      {isVisible && (
        <div
          className={`${show ? "openModal" : "closeModal"} ${className} top-4 z-50 -mt-1 h-screen w-full overflow-scroll bg-white p-4 lg:hidden`}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full text-lg text-netral-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="">
                <p className="">Services</p>
              </AccordionTrigger>
              <AccordionContent>
                <ServiceModal />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <p>Insights</p>
              </AccordionTrigger>
              <AccordionContent>
                <InsightModal />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <div className="flex items-center justify-between w-full p-4 font-medium transition-all">
                About Us
              </div>
            </AccordionItem>
            <AccordionItem value="item-4">
              <div className="flex items-center justify-between w-full p-4 font-medium transition-all">
                Works
              </div>
            </AccordionItem>
            <AccordionItem value="item-5">
              <div className="flex items-center justify-between w-full p-4 font-medium transition-all">
                Inside the Lab
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </>
  );
};

export default Modal;
