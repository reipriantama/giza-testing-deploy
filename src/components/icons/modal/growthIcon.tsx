const GrowthIcon = (props: any) => {
  const { color = "currentColor", className, gradient, ...restProps } = props;

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
      className={className}
    >
      <circle cx="8.44828" cy="19.5517" r="8.44828" fill="#CACCCF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5338 2.41379C12.5338 1.08069 13.6145 0 14.9476 0H25.5683C26.9014 0 27.9821 1.08069 27.9821 2.41379V13.0345C27.9821 14.3676 26.9014 15.4483 25.5683 15.4483C24.2352 15.4483 23.1545 14.3676 23.1545 13.0345V8.12333L14.2759 17.002C13.3332 17.9446 11.8049 17.9446 10.8623 17.002C9.91961 16.0593 9.91961 14.531 10.8623 13.5884L19.623 4.82759H14.9476C13.6145 4.82759 12.5338 3.74689 12.5338 2.41379Z"
        fill="url(#paint0_linear_2252_18220)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2252_18220"
          x1="8.12735"
          y1="17.709"
          x2="29.8172"
          y2="16.8226"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF512F" />
          <stop offset="1" stopColor="#F09819" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GrowthIcon;
