const ProductivityIcon = (props: any) => {
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
        d="M1.67139 10C1.67139 5.58172 5.25311 2 9.67139 2H22.3288C26.7471 2 30.3288 5.58172 30.3288 10V13.9109C30.3288 18.3292 26.7471 21.9109 22.3288 21.9109H9.67138C5.2531 21.9109 1.67139 18.3292 1.67139 13.9109V10Z"
        fill="#CACCCF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0004 17.8239C18.7049 17.8239 20.8974 15.6315 20.8974 12.927C20.8974 10.2225 18.7049 8.03003 16.0004 8.03003C13.2959 8.03003 11.1035 10.2225 11.1035 12.927C11.1035 15.6315 13.2959 17.8239 16.0004 17.8239ZM22.8303 22.8915C24.6415 24.7027 25.659 27.1593 25.659 29.7207L6.34326 29.7207C6.34326 27.1593 7.36078 24.7027 9.17198 22.8915C10.9832 21.0803 13.4397 20.0628 16.0011 20.0628C18.5625 20.0628 21.0191 21.0803 22.8303 22.8915Z"
        fill="url(#paint0_linear_2252_18209)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2252_18209"
          x1="4.14597"
          y1="29.7207"
          x2="27.6558"
          y2="28.8708"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF512F" />
          <stop offset="1" stopColor="#F09819" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ProductivityIcon;
