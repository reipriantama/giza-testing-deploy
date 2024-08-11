const ArrowDown = (props: any) => {
  const { className, gradient, ...restProps } = props;

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
      className={`${className} arrow-down`}
    >
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF512F" />
          <stop offset="100%" stopColor="#F09819" />
        </linearGradient>
      </defs>
      <path
        d="M11.3334 6.66667L8.00008 10L4.66675 6.66667"
        stroke={gradient ? "url(#gradient)" : "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDown;
