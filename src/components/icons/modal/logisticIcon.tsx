const LogisticIcon = (props: any) => {
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
        d="M8 2.5946H25.6C27.8091 2.5946 29.6 4.38547 29.6 6.5946V25.4054C29.6 27.6145 27.8091 29.4054 25.6 29.4054H8V2.5946Z"
        fill="#CACCCF"
      />
      <path
        d="M2.3999 6.59461C2.3999 4.38547 4.19076 2.5946 6.3999 2.5946H7.9999V29.4054H6.3999C4.19076 29.4054 2.3999 27.6146 2.3999 25.4054V6.59461Z"
        fill="url(#paint0_linear_2254_18565)"
      />
      <path
        d="M15.2002 2.5946H20.8002V9.24325C20.8002 10.3478 19.9048 11.2433 18.8002 11.2433H17.2002C16.0956 11.2433 15.2002 10.3478 15.2002 9.24325V2.5946Z"
        fill="url(#paint1_linear_2254_18565)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2254_18565"
          x1="1.76287"
          y1="29.4054"
          x2="8.58724"
          y2="29.3475"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF512F" />
          <stop offset="1" stopColor="#F09819" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2254_18565"
          x1="14.5632"
          y1="11.2433"
          x2="21.3833"
          y2="11.064"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF512F" />
          <stop offset="1" stopColor="#F09819" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LogisticIcon;
