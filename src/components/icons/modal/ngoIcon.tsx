const NgoIcon = (props: any) => {
  const { color = "currentColor", className, gradient, ...restProps } = props;

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <rect
        x="2.3999"
        y="11.6"
        width="27.2"
        height="16"
        rx="8"
        fill="#CACCCF"
      />
      <rect
        x="11.2632"
        y="0.400024"
        width="9.47357"
        height="9.47357"
        rx="4.73679"
        fill="#CACCCF"
      />
      <path
        d="M12.4 17.2C9.97 17.2 8 19.1512 8 21.5582C8 25.9164 13.2 29.8784 16 30.8C18.8 29.8784 24 25.9164 24 21.5582C24 19.1512 22.03 17.2 19.6 17.2C18.112 17.2 16.796 17.9317 16 19.0518C15.5943 18.4794 15.0553 18.0122 14.4286 17.6898C13.802 17.3675 13.1061 17.1995 12.4 17.2Z"
        fill="url(#paint0_linear_2254_18569)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2254_18569"
          x1="6.17989"
          y1="30.8"
          x2="25.6351"
          y2="29.8708"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF512F" />
          <stop offset="1" stopColor="#F09819" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NgoIcon;
