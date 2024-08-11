import React from "react";
import styles from "./index.module.scss";

interface ButtonProps {
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
  className?: string;
  buttonText: string;
  scaleHover?: string;
  textClassName?: string;
  link?: any;
  blank?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const baseClassName = `flex cursor-pointer items-center justify-center gap-2.5 rounded-3xl border px-5 py-[13px]`;
  const primaryClass = `text-white border-white`;
  const secondaryClass = `text-black border-black`;

  const appliedClass = props.primary
    ? primaryClass
    : props.secondary
      ? secondaryClass
      : "";

  const buttonClassName = `${baseClassName} ${appliedClass} ${props.className || ""}`;

  return (
    <a
      href={props.link}
      target={props.blank ? "_blank" : ""}
      onClick={props.onClick}
      className={`group hover:border-transparent ${styles.buttonHoverBorder} ${buttonClassName} ${styles.group}`}
    >
      <p className={`${props.textClassName} z-10 text-[17px] leading-[21px]`}>
        {props.buttonText}
      </p>
      <div className="relative">
        <div
          className={`${styles.buttonHoverScale} ${props.scaleHover} z-0 size-2 rounded-full bg-gradient-primary`}
        />
        <div
          className={`${styles.buttonHoverWhite} z-10 size-2 rounded-full bg-white`}
        />
      </div>
    </a>
  );
};

export default Button;
