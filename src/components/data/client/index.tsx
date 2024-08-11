import IconArrow from "../../icons/iconArrow";
import bniImage from "../../../assets/happyClients/logo/bni.svg";
import fcn from "../../../assets/happyClients/logo/fcn.png";
import emurgo from "../../../assets/happyClients/logo/emurgo.png";
import alnico from "../../../assets/happyClients/logo/alnico.png";
import r from "../../../assets/happyClients/logo/r.png";
import uxArmi from "../../../assets/happyClients/logo/uxarmy.png";
import ogilvy from "../../../assets/happyClients/logo/oglivy.png";
import braveFactor from "../../../assets/happyClients/logo/braveFactor.png";
import compas from "../../../assets/happyClients/logo/compas.png";
import briImageHover from "../../../assets/happyClients/imgHover/briImage.webp";
import rayaImageHover from "../../../assets/happyClients/imgHover/rayaImage.webp";
import sayurboxImageHover from "../../../assets/happyClients/imgHover/sayurboxImage.webp";
import codexImageHover from "../../../assets/happyClients/imgHover/codexImage.webp";
import ascenImageHover from "../../../assets/happyClients/imgHover/ascenImage.webp";
import coungaImageHover from "../../../assets/happyClients/imgHover/coungaImage.webp";
import rpxImageHover from "../../../assets/happyClients/imgHover/rpxImage.webp";
import RayaIcon from "../../icons/happyClient/rayaIcon";
import BriIcon from "../../icons/happyClient/briIcon";
import SayurBoxIcon from "../../icons/happyClient/sayurBoxIcon";
import CodexIcon from "../../icons/happyClient/codexIcon";
import AseanIcon from "../../icons/happyClient/aseanIcon";
import BoungaIcon from "../../icons/happyClient/boungaIcon";
import RpxIcon from "../../icons/happyClient/rpxIcon";

interface OurClientData {
  id: number;
  image: any;
  imageHover?: JSX.Element;
  arrowHover?: JSX.Element;
  imgClassName: string;
}

const arrowHoverClassName =
  "absolute top-0 block size-2 opacity-0 transition duration-200 ease-in group-hover:opacity-100 lg:size-[14px]";
const dotHoverClassName =
  "block rounded-full size-2 lg:size-[14px] bg-netral-2 group-hover:opacity-0";
const imageHoverClassName =
  "absolute left-5 top-0 h-[75px] w-[64px] rotate-[15deg] rounded-2xl scale-0 transition duration-200 ease-in group-hover:scale-100 lg:-top-14 lg:h-[150px] lg:w-[128px]";

export const ourClient: OurClientData[] = [
  {
    id: 1,
    image: (
      <BriIcon
        color="#43474b"
        className="h-[36px] w-[70px] group-hover:text-white lg:h-[57px] lg:w-[112px]"
      />
    ),
    imageHover: (
      <img className={imageHoverClassName} src={briImageHover} alt="imgHover" />
    ),
    arrowHover: (
      <div className="absolute right-3 top-3">
        <div className={dotHoverClassName} />
        <IconArrow className={arrowHoverClassName} />
      </div>
    ),
    imgClassName: "",
  },
  {
    id: 2,
    image: bniImage,
    imgClassName: "lg:w-[134px] lg:h-[41px] w-[80px] h-[24px]",
  },
  {
    id: 3,
    image: (
      <RayaIcon
        color="#43474b"
        className="h-[36px] w-[72px] group-hover:text-white lg:h-[58px] lg:w-[116px]"
      />
    ),
    imageHover: (
      <img
        className={imageHoverClassName}
        src={rayaImageHover}
        alt="imgHover"
      />
    ),
    arrowHover: (
      <div className="absolute right-3 top-3">
        <div className={dotHoverClassName} />
        <IconArrow className={arrowHoverClassName} />
      </div>
    ),
    imgClassName: "",
  },
  {
    id: 4,
    image: (
      <SayurBoxIcon
        color="#43474b"
        className="h-[40px] w-[120px] group-hover:text-white lg:h-[52px] lg:w-[173px]"
      />
    ),
    imageHover: (
      <img
        className={imageHoverClassName}
        src={sayurboxImageHover}
        alt="imgHover"
      />
    ),
    arrowHover: (
      <div className="absolute right-3 top-3">
        <div className={dotHoverClassName} />
        <IconArrow className={arrowHoverClassName} />
      </div>
    ),
    imgClassName: "",
  },
  {
    id: 5,
    image: (
      <CodexIcon
        color="#43474b"
        className="h-[24px] w-[94px] group-hover:text-white lg:h-[34px] lg:w-[135px]"
      />
    ),
    imageHover: (
      <img
        className={imageHoverClassName}
        src={codexImageHover}
        alt="imgHover"
      />
    ),
    arrowHover: (
      <div className="absolute right-3 top-3">
        <div className={dotHoverClassName} />
        <IconArrow className={arrowHoverClassName} />
      </div>
    ),
    imgClassName: "",
  },
  {
    id: 6,
    image: fcn,
    imgClassName: "lg:w-[126px] lg:h-[48px] w-[83px] h-[32px]",
  },
  {
    id: 7,
    image: emurgo,
    imgClassName: "lg:w-[176px] lg:h-[44px] w-[126px] h-[32px]",
  },
  {
    id: 8,
    image: alnico,
    imgClassName: "lg:w-[135px] lg:h-[35px] w-[92px] h-[24px]",
  },
  {
    id: 9,
    image: r,
    imgClassName: "size-8 lg:size-[58px]",
  },
  {
    id: 10,
    image: uxArmi,
    imgClassName: "lg:w-[175px] lg:h-[36px] w-[115px] h-[24px]",
  },
  {
    id: 11,
    image: ogilvy,
    imgClassName: "lg:w-[119px] lg:h-[52px] w-[83px] h-[32px]",
  },
  {
    id: 12,
    image: braveFactor,
    imgClassName: "lg:w-[190px] lg:h-[24px] w-[126px] h-[16px]",
  },
  {
    id: 13,
    image: (
      <AseanIcon
        color="#43474b"
        className="h-[36px] w-[135px] group-hover:text-white lg:h-[42px] lg:w-[185px]"
      />
    ),
    imageHover: (
      <img
        className={imageHoverClassName}
        src={ascenImageHover}
        alt="imgHover"
      />
    ),
    arrowHover: (
      <div className="absolute right-3 top-3">
        <div className={dotHoverClassName} />
        <IconArrow className={arrowHoverClassName} />
      </div>
    ),
    imgClassName: "",
  },
  {
    id: 14,
    image: (
      <BoungaIcon
        color="#43474b"
        className="h-[32px] w-[81px] group-hover:text-white lg:h-[44px] lg:w-[113px]"
      />
    ),
    imageHover: (
      <img
        className={imageHoverClassName}
        src={coungaImageHover}
        alt="imgHover"
      />
    ),
    arrowHover: (
      <div className="absolute right-3 top-3">
        <div className={dotHoverClassName} />
        <IconArrow className={arrowHoverClassName} />
      </div>
    ),
    imgClassName: "",
  },
  {
    id: 15,
    image: compas,
    imgClassName: "lg:w-[158px] lg:h-[57px] w-[88px] h-[32px]",
  },
  {
    id: 16,
    image: (
      <RpxIcon
        color="#43474b"
        className="h-[28px] w-[60px] group-hover:text-white lg:h-[58px] lg:w-[125px]"
      />
    ),
    imageHover: (
      <img className={imageHoverClassName} src={rpxImageHover} alt="imgHover" />
    ),
    arrowHover: (
      <div className="absolute right-3 top-3">
        <div className={dotHoverClassName} />
        <IconArrow className={arrowHoverClassName} />
      </div>
    ),
    imgClassName: "",
  },
];
