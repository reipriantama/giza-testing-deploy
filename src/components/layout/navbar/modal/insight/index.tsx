import React from "react";
import { InsightModalData } from "../../../../data/navbar/modal/insight";
import Button from "../../../../ui/button";

const InsightModal: React.FC<any> = (props: any) => {
  return (
    <div
      className={`${props.className} space-y-6 pt-6 lg:flex lg:flex-row-reverse lg:justify-between lg:space-y-0 lg:pb-6`}
    >
      <div className="space-y-6 lg:">
        <h1 className="text-sm font-bold text-[#929598] lg:text-base">
          Exploring Various Topics
        </h1>
        <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-20 lg:space-y-0">
          {InsightModalData.map((item: any, index: number) => (
            <div
              key={index}
              className="flex items-center gap-6 lg:rounded-2xl lg:p-3"
            >
              {item.icon}
              <div className="space-y-1">
                <h2 className="text-base font-bold text-netral-1 lg:text-lg">
                  {item.text}
                </h2>
                <p className="text-xs leading-5 text-[#929598] lg:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-6 lg:max-w-[384px]">
        <h1 className="text-sm font-bold text-[#929598] lg:text-base">
          Overview
        </h1>
        <div className="space-y-1">
          <h2 className="text-base font-bold text-netral-1 lg:text-xl lg:leading-[30px]">
            Insight from the Lab!
          </h2>
          <p className="text-xs leading-5 text-[#929598] lg:text-base">
            A Deep Dive into UI/UX, Industry Trends, Strategic Growth, and
            Enhancing Productivity
          </p>
        </div>
        <Button
          secondary={true}
          className="max-w-[173px]"
          buttonText="Explore More"
          link="/insights/"
        />
      </div>
    </div>
  );
};

export default InsightModal;
