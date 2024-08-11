import { ourClient } from "../../data/client";
import Title from "../../ui/title";

const Client = (props: any) => {
  // const [expanded, setExpanded] = useState(false);

  // const handleExpanded = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <div
      id={props.id}
      className={`${props.className} -mt-1 space-y-8 px-4 pb-[63px] pt-[31px] lg:pb-[137px] lg:pl-20 lg:pr-[88px] lg:pt-20`}
    >
      <div className="flex items-center space-x-3">
        <Title titleText="WHO WE WORK WITH" />
      </div>
      <div className="space-y-12">
        <h3 className="text-h3-mobile font-light leading-[48px] lg:text-h2-desktop lg:font-light lg:leading-[64px]">
          Our <span className="font-bold">Happy Clients</span>
        </h3>
        {/* sesuaikan gap */}
        <div className={`grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6`}>
          {ourClient.map((item: any, index) => (
            <div
              key={index}
              className={`group relative flex items-center justify-center rounded-xl bg-[#0C0C0C] px-[15px] py-[16px] ${
                item.id === 1 ||
                item.id === 3 ||
                item.id === 4 ||
                item.id === 5 ||
                item.id === 13 ||
                item.id === 14 ||
                item.id === 16
                  ? "hover:bg-[#3B3B3B]"
                  : ""
              }`}
            >
              {item.id === 1 ||
              item.id === 3 ||
              item.id === 4 ||
              item.id === 5 ||
              item.id === 13 ||
              item.id === 14 ||
              item.id === 16 ? (
                <div>{item.image}</div>
              ) : (
                <img
                  className={item.imgClassName}
                  src={item.image}
                  alt="icon"
                  loading="lazy"
                />
              )}

              {item.arrowHover}
              {item.imageHover}
            </div>
          ))}
        </div>
        {/* button */}
        {/* <Button
          className="w-[151px] lg:hidden"
          primary={true}
          buttonText={expanded ? "See less" : "See more"}
          onClick={handleExpanded}
        /> */}
      </div>
    </div>
  );
};

export default Client;
