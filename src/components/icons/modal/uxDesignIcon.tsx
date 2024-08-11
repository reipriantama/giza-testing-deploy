const UxDesignIcon = (props: any) => {
  const { color = "currentColor", className, gradient, ...restProps } = props;

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...restProps}
    >
      <rect
        x="30"
        y="2"
        width="17.5"
        height="28"
        rx="8"
        transform="rotate(90 30 2)"
        fill="#CACCCF"
      />
      <path
        d="M12.0015 13.9583C12.0015 13.6875 12.0791 13.422 12.2255 13.1916C12.372 12.9613 12.5815 12.7751 12.8307 12.654C13.0798 12.5328 13.3587 12.4816 13.6362 12.5059C13.9136 12.5302 14.1786 12.6292 14.4014 12.7917L26.398 21.5444C27.55 22.3844 26.938 24.1693 25.4981 24.1693H19.5778C19.3479 24.1692 19.1211 24.2204 18.9149 24.319C18.7087 24.4176 18.5285 24.561 18.3883 24.7381L14.6894 29.4265C13.8179 30.5319 12 29.9326 12 28.5384L12.0015 13.9583Z"
        fill="url(#paint0_linear_2252_18193)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2252_18193"
          x1="10.2937"
          y1="30"
          x2="28.5524"
          y2="29.3647"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF512F" />
          <stop offset="1" stopColor="#F09819" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default UxDesignIcon;
