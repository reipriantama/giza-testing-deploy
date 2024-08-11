import React from "react";

interface TitleProps {
  className?: string;
  titleText: string;
  id?: string;
}

const Title = React.forwardRef<HTMLDivElement, TitleProps>((props, ref) => {
  return (
    <div
      id={props.id}
      ref={ref}
      className={`flex items-center space-x-3 ${props.className}`}
    >
      <div className="rounded-full size-2 bg-gradient-primary lg:size-3"></div>
      <h6 className="font-semibold text-transparent uppercase bg-gradient-primary bg-clip-text text-h6-mobile lg:text-xl">
        {props.titleText}
      </h6>
    </div>
  );
});

export default Title;
