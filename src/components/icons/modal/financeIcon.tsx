const FinanceIcon = (props: any) => {
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
      <path
        d="M0.799805 12.4C0.799805 8.4235 4.02335 5.19995 7.9998 5.19995H23.9998C27.9763 5.19995 31.1998 8.4235 31.1998 12.4H0.799805Z"
        fill="url(#paint0_linear_2253_18554)"
      />
      <path
        d="M0.541992 12.1423H31.4572V19.6C31.4572 24.0182 27.8755 27.6 23.4572 27.6H8.54198C4.12371 27.6 0.541992 24.0182 0.541992 19.6V12.1423Z"
        fill="#CACCCF"
      />
      <rect
        x="5.04248"
        y="20.394"
        width="9.00179"
        height="3.75075"
        rx="1.87537"
        fill="url(#paint1_linear_2253_18554)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2253_18554"
          x1="-2.6584"
          y1="12.4"
          x2="33.3335"
          y2="6.23075"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF512F" />
          <stop offset="1" stopColor="#F09819" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2253_18554"
          x1="4.01847"
          y1="24.1448"
          x2="14.886"
          y2="23.086"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF512F" />
          <stop offset="1" stopColor="#F09819" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FinanceIcon;
