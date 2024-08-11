const WorkshopIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.89223 3.08081C6.82243 3.08081 5.14453 4.75877 5.14453 6.82863V23.6938C5.14453 25.7637 6.82243 27.4416 8.89223 27.4416H17.1198L27.7873 16.7738C28.8427 15.7184 30.5538 15.7184 31.6092 16.7738C32.6646 17.8293 32.6646 19.5405 31.6092 20.5959L24.7637 27.4416H33.2523C35.3221 27.4416 37 25.7637 37 23.6938V6.82863C37 4.75877 35.3221 3.08081 33.2523 3.08081H8.89223Z"
        fill="#CACCCF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.0714 23.257C18.4521 23.257 21.1926 20.5165 21.1926 17.1358C21.1926 13.7552 18.4521 11.0146 15.0714 11.0146C11.6908 11.0146 8.95026 13.7552 8.95026 17.1358C8.95026 20.5165 11.6908 23.257 15.0714 23.257ZM23.6087 29.5915C25.8727 31.8555 27.1446 34.9262 27.1446 38.128L3 38.128C3 34.9262 4.2719 31.8555 6.5359 29.5915C8.7999 27.3275 11.8705 26.0556 15.0723 26.0556C18.2741 26.0556 21.3447 27.3275 23.6087 29.5915Z"
        fill="url(#paint0_linear_2696_2092)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2696_2092"
          x1="0.253387"
          y1="38.128"
          x2="29.6407"
          y2="37.0656"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF512F" />
          <stop offset="1" stopColor="#F09819" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default WorkshopIcon;
