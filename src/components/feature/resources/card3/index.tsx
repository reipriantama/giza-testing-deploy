import InsideTheLab from "../../../icons/insideTheLab";
import Button from "../../../ui/button";

const CardThird = () => {
  return (
    <div className="space-y-6 rounded-2xl bg-netral p-6 lg:col-span-4 lg:row-span-2 lg:space-y-14 lg:pb-10 lg:pl-[32px] lg:pr-[57px] lg:pt-[32px]">
      <div className="space-y-5 lg:flex lg:items-center lg:space-x-[35px] lg:space-y-0">
        <InsideTheLab className="lg:h-[81px] lg:w-[77px]" />
        <div className="space-y-2 lg:space-y-4">
          <h4 className="text-h4-mobile leading-[30px] lg:text-h4-desktop">
            Inside the Lab Stories
          </h4>
          <p className="text-body-standard-mobile lg:text-body-large-desktop lg:font-normal">
            Discover Gizanian expertise on Medium.
          </p>
        </div>
      </div>
      <Button
        scaleHover="group-hover:scale-[48]"
        className="max-w-[230px]"
        buttonText="Explore Our Medium"
        primary={true}
      />
    </div>
  );
};

export default CardThird;
