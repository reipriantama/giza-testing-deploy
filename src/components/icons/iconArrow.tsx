const IconArrow = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2156_2557)">
        <path
          d="M12.5 1.49999L1.50001 12.5M12.5 1.49999L12.5 12.5M12.5 1.49999L1.50001 1.49999"
          stroke="url(#paint0_linear_2156_2557)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2156_2557"
          x1="-5.25129"
          y1="5.74865"
          x2="8.67594"
          y2="18.5892"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF512F" />
          <stop offset="1" stopColor="#F09819" />
        </linearGradient>
        <clipPath id="clip0_2156_2557">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(14) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconArrow;
