import Button from "../../../ui/button";
import donNormanImage from "../../../../assets/resources/donNorman.png";

const CardOne = (props: any) => {
  return (
    <div
      className={`${props.className} group relative flex h-[540px] flex-col justify-end space-y-[35px] overflow-hidden rounded-2xl bg-gradient-tertiary px-6 pb-[85px] lg:col-span-5 lg:row-span-4 lg:h-full lg:space-y-0`}
    >
      <div className="relative z-10 space-y-2 lg:mb-[35px] lg:space-y-6">
        <h4 className="text-h4-mobile leading-[30px] lg:text-h5-desktop lg:leading-10">
          What is UX Design?
        </h4>
        <p className="text-body-standard-mobile text-netral-4 lg:text-body-large-desktop lg:font-normal">
          UX is an abbreviation for User Experience. UX Design{" "}
          <br className="hidden lg:block" />
          involves how a product or service can be designed...
        </p>
      </div>
      <Button
        className="relative z-10 max-w-[160px]"
        buttonText="Read More"
        primary={true}
      />
      <img
        className="absolute left-0 top-0 z-0 h-full object-cover transition duration-700 group-hover:scale-105 lg:aspect-[584/480] lg:w-full"
        src={donNormanImage}
        alt="Don Norman"
      />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-transparent from-80% to-[aeaeae] opacity-20" />
    </div>
  );
};

export default CardOne;
