import InstagramColor from "../../icons/instagramColor.png";
import Button from "../../ui/button";
import LinkedInColor from "../../icons/linkedinColor";
import CardOne from "./card1";
import CardSecond from "./card2";
import CardThird from "./card3";
import CardFour from "./card4";
import Title from "../../ui/title";

interface SocialMediaData {
  id: number;
  icon: JSX.Element;
  text: string;
  desc: string;
  link: string;
}
  
const Resources = (props: any) => {
  const SocialMedia: SocialMediaData[] = [
    {
      id: 1,
      icon: <img src={InstagramColor} alt="Instagram" />,
      text: "Instagram",
      desc: "@gizalab",
      link: "https://www.instagram.com/gizalab/",
    },
    {
      id: 2,
      icon: <LinkedInColor />,
      text: "LinkedIn",
      desc: "Giza Lab",
      link: "https://www.linkedin.com/company/gizalab/",
    },
  ];
  return (
    <div
      id={props.id}
      className={`${props.className} space-y-[27px] px-4 py-[31px] lg:space-y-4 lg:pb-[104px] lg:pl-20 lg:pr-[107px] lg:pt-20`}
    >
      <div className="flex items-center space-x-3">
        <Title titleText="where you can find us" />
      </div>
      <div className="">
        <h3 className="mb-12 text-h3-mobile font-light leading-[48px] lg:text-h2-desktop lg:font-light lg:leading-[64px]">
          Explore <span className="font-bold">Our UX Channel </span>
        </h3>
        <div className="flex flex-col gap-4 text-white lg:grid lg:grid-cols-9 lg:gap-6">
          {/* card 1 */}
          <CardOne />
          {/* card 2 */}
          <CardSecond />
          {/* card3 */}
          <CardThird />
          {/* card 4 */}
          <CardFour />
          {/* card 5 & 6*/}
          {SocialMedia.map((item, index) => (
            <div key={index} className="space-y-4 lg:col-span-3">
              <div className="flex justify-between pt-5 pr-6 rounded-2xl bg-gradient-tertiary pb-7 pl-7">
                <div className="space-y-6">
                  {item.icon}
                  <div className="space-y-1">
                    <h4 className="text-h4-mobile leading-[30px]">
                      {item.text}
                    </h4>
                    <p className="text-h5-mobile text-xl font-normal leading-[30px] text-netral-4 lg:text-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-end">
                  <Button
                    buttonText="Follow"
                    className="min-w-[128px]"
                    primary={true}
                    link={item.link}
                    blank={true}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
