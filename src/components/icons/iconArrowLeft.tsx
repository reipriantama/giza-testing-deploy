const IconArrowLeft = (props: any) => {
  const { color = "currentColor", className, gradient, ...restProps } = props;

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
      className={className}
      color={color}
    >
      <path
        d="M8.33334 20.0002L31.6667 20.0002M8.33334 20.0002L20 31.6668M8.33334 20.0002L20 8.3335"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconArrowLeft;
