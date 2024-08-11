import Button from "../../../ui/button";
import fosteringImage from "../../../../assets/resources/fostering.png";
import fosteringImage2 from "../../../../assets/resources/fostering2.webp";

const CardSecond = () => {
  return (
    <div className="group relative z-10 space-y-[35px] overflow-hidden rounded-2xl bg-gradient-tertiary px-6 pb-10 pt-6 lg:col-span-4 lg:row-span-2 lg:pb-[34px] lg:pt-[57px]">
      <div className="relative z-10 space-y-2 lg:space-y-4">
        <h4 className="text-h4-mobile leading-[30px] lg:text-h4-desktop">
          UX Insight
        </h4>
        <p className="text-body-standard-mobile text-netral-4 lg:text-body-large-desktop lg:font-normal">
          Explore UX insight and resources.
        </p>
      </div>
      <Button
        className="relative z-10 max-w-[155px]"
        buttonText="Read More"
        primary={true}
      />
      {/* <div className="absolute -top-5 z-0 h-full w-full translate-x-[14.5rem] cursor-pointer transition duration-300 ease-in-out group-hover:translate-y-[-1rem]"> */}
      <div className="absolute -right-28 -top-5 z-0 h-full w-[240px] cursor-pointer transition duration-700 ease-in-out group-hover:translate-y-[-1rem] lg:right-10">
        <img
          className="absolute z-0 w-[240px] translate-x-[8.5rem] translate-y-7 transition duration-700 ease-in-out lg:translate-x-[8.5rem] lg:group-hover:-translate-y-0 lg:group-hover:translate-x-[10rem]"
          src={fosteringImage2}
          alt="fostering"
        />
        <img
          className="absolute left-0 top-0 z-0 w-[240px]"
          src={fosteringImage}
          alt="fostering"
        />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-transparent to-[#191715]" />
    </div>
  );
};

export default CardSecond;
