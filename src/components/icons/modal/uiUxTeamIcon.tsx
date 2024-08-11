const UiUxTeamIcon = (props: any) => {
  const { color = "currentColor", className, gradient, ...restProps } = props;

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.0571 14.9938C22.7616 14.9938 24.954 12.8014 24.954 10.0969C24.954 7.39239 22.7616 5.19995 20.0571 5.19995C17.3525 5.19995 15.1601 7.39239 15.1601 10.0969C15.1601 12.8014 17.3525 14.9938 20.0571 14.9938ZM26.8869 20.0615C28.6981 21.8727 29.7156 24.3292 29.7156 26.8906H10.3999C10.3999 24.3292 11.4174 21.8727 13.2286 20.0615C15.0398 18.2503 17.4963 17.2327 20.0578 17.2327C22.6192 17.2327 25.0757 18.2503 26.8869 20.0615Z"
        fill="#CACCCF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.1255 13.6776C16.1293 13.6776 18.5643 11.2426 18.5643 8.23882C18.5643 5.23507 16.1293 2.80005 13.1255 2.80005C10.1218 2.80005 7.68675 5.23507 7.68675 8.23882C7.68675 11.2426 10.1218 13.6776 13.1255 13.6776ZM20.7111 19.3059C22.7227 21.3175 23.8528 24.0459 23.8528 26.8907H2.3999C2.3999 24.0459 3.53001 21.3175 5.54161 19.3059C7.55322 17.2943 10.2815 16.1642 13.1264 16.1642C15.9712 16.1642 18.6995 17.2943 20.7111 19.3059Z"
        fill="url(#paint0_linear_2256_19181)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2256_19181"
          x1="-0.0405109"
          y1="26.8907"
          x2="26.0706"
          y2="25.9467"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF512F" />
          <stop offset="1" stopColor="#F09819" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default UiUxTeamIcon;
