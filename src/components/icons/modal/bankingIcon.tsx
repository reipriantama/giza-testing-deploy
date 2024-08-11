const BankingIcon = (props: any) => {
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
        x="4.7998"
        y="11.6"
        width="4.8"
        height="14.4"
        rx="1.36738"
        fill="#CACCCF"
      />
      <rect
        x="13.6001"
        y="11.6"
        width="4.8"
        height="14.4"
        rx="1.36738"
        fill="#CACCCF"
      />
      <rect
        x="29.6001"
        y="24.4"
        width="4.8"
        height="27.2"
        rx="2.4"
        transform="rotate(90 29.6001 24.4)"
        fill="#CACCCF"
      />
      <rect
        x="22.3999"
        y="11.6"
        width="4.8"
        height="14.4"
        rx="1.36738"
        fill="#CACCCF"
      />
      <path
        d="M14.3681 3.18808L3.36184 9.00931C1.70048 9.888 2.32616 12.4 4.20638 12.4H27.7934C29.6786 12.4 30.3001 9.87765 28.6299 9.00507L17.4811 3.18024C16.5056 2.67056 15.341 2.67349 14.3681 3.18808Z"
        fill="url(#paint0_linear_2253_18559)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2253_18559"
          x1="-0.694278"
          y1="12.4"
          x2="32.0222"
          y2="8.63692"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF512F" />
          <stop offset="1" stopColor="#F09819" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BankingIcon;
