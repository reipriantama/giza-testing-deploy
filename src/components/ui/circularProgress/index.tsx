// src/components/CircularProgressBar.jsx
// import style from "./index.module.scss";

const CircularProgressBar = ({
  value,
  max,
  image,
  progressCircle,
  progressContent,
  hidden,
}: {
  value: number;
  max: number;
  image: string;
  progressCircle?: any;
  progressContent?: any;
  hidden?: string;
}) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  // console.log(circumference);
  const offset = circumference - (value / max) * circumference;

  return (
    <div className={`relative flex`}>
      <svg
        width="100"
        height="100"
        className={`rotate-[-90deg] transform ${hidden}`}
        ref={progressCircle}
      >
        <circle
          className="text-white opacity-30"
          strokeWidth="0.76"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
        />
        <circle
          className={`text-[#FF8E4E] ${hidden}`}
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
        />
      </svg>
      <div
        ref={progressContent}
        className="absolute inset-0 flex items-center justify-center text-white"
      >
        <img src={image} alt="testimony" className="size-[58px]" />
      </div>
    </div>
  );
};

export default CircularProgressBar;
