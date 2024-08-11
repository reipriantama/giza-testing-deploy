import pipeImage from "../../../../assets/resources/pipe.png";
import styles from "./index.module.scss";

const CardFour = () => {
  return (
    <div
      className={`${styles.backgroundGradient} relative flex items-center justify-center rounded-2xl py-[66px] lg:col-span-3`}
    >
      <h5 className="text-[28px] font-bold leading-9 lg:text-h4-desktop">
        Follow Us!
      </h5>
      <img
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        src={pipeImage}
        alt="pipe"
      />
    </div>
  );
};

export default CardFour;
