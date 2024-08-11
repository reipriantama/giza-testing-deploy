import React from "react";
import { ServiceModalData } from "../../../../data/navbar/modal/service/serviceModalData";
import { TeamModalData } from "../../../../data/navbar/modal/service/teamModalData";
import { IndustryData } from "../../../../data/navbar/modal/service/industryData";

const ServiceModal: React.FC<any> = (props: any) => {
  const [isActive, setIsActive] = React.useState("service");

  return (
    <div className={`${props.className} space-y-6 pb-6`}>
      <div className="flex gap-4 text-[#929598] lg:border-b-2 lg:pb-4 lg:text-lg">
        <div
          className={`cursor-pointer rounded-full py-2 font-bold hover:bg-[#F6F6F6] hover:bg-gradient-primary hover:bg-clip-text hover:text-transparent lg:px-0 ${
            isActive === "service"
              ? "bg-gradient-primary bg-clip-text text-transparent"
              : ""
          }`}
          onClick={() => setIsActive("service")}
        >
          Service
        </div>
        {/* <div
          className={`cursor-pointer rounded-full px-4 py-2 font-bold hover:bg-[#F6F6F6] hover:bg-gradient-primary hover:bg-clip-text hover:text-transparent ${
            isActive === "industry"
              ? "bg-gradient-primary bg-clip-text text-transparent"
              : ""
          }`}
          onClick={() => setIsActive("industry")}
        >
          Industry
        </div> */}
      </div>
      {/* service */}
      {isActive === "service" && (
        <div className="space-y-6 animate-fadeIn lg:flex lg:justify-between lg:space-y-0">
          <div className="space-y-6 lg:max-w-[384px]">
            <h1 className="text-sm font-bold text-[#929598] lg:text-base">
              Overview
            </h1>
            <div className="space-y-1">
              <h2 className="text-base font-bold text-netral-1 lg:text-xl">
                Our Services
              </h2>
              <p className="text-xs leading-5 text-[#929598] lg:text-base">
                We have various services, choose which one matches with your
                needs
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-sm font-bold text-[#929598] lg:text-base">
                A Full of Talented Dedicated Team
              </h1>
              <div className="space-y-6 lg:flex lg:gap-6 lg:space-y-0">
                {TeamModalData.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 hover:bg-[#F4F4F4] lg:rounded-2xl lg:p-3"
                  >
                    {item.icon}
                    <a href={item.href} className="space-y-1">
                      <h2 className="text-base font-bold text-netral-1 lg:text-lg">
                        {item.title}
                      </h2>
                      <p className="text-xs leading-5 text-[#929598] lg:text-base">
                        {item.description}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h1 className="text-sm font-bold text-[#929598] lg:text-base">
                One Time Services
              </h1>
              <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-8 lg:gap-x-6 lg:space-y-6">
                {ServiceModalData.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 lg:rounded-2xl lg:p-3"
                  >
                    {item.icon}
                    <div className="space-y-1">
                      <h2 className="text-base font-bold text-netral-1 lg:text-lg">
                        {item.title}
                      </h2>
                      <p className="text-xs leading-5 text-[#929598] lg:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* industry */}
      {isActive === "industry" && (
        <div className="space-y-6 animate-fadeIn lg:flex lg:justify-between lg:space-y-0">
          <div className="space-y-6 lg:max-w-[384px]">
            <h1 className="text-sm font-bold text-[#929598] lg:text-base">
              Overview
            </h1>
            <div className="space-y-1">
              <h2 className="text-base font-bold text-netral-1">
                Industry Expertise
              </h2>
              <p className="text-xs leading-5 text-[#929598]">
                See how we help our client from various industry
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-sm font-bold text-[#929598] lg:text-base">
                Choose Industry
              </h1>
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:gap-x-6">
                {IndustryData.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 hover:bg-[#F4F4F4] lg:rounded-2xl lg:p-3"
                  >
                    {item.icon}
                    <div className="space-y-1">
                      <h2 className="text-base font-bold text-netral-1 lg:text-lg">
                        {item.title}
                      </h2>
                      <p className="text-xs leading-5 text-[#929598] lg:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceModal;
