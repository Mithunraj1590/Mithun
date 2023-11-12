import Style from "./VideoCard.module.scss";
import Assets from "../../Layout/CommonLayout/assets";
import Link from "next/link";
import Icon from "../../Layout/Icons";
import Image from "next/image";
import { useWindowSize } from "../../../logic/useDimension";

const VideoCard = ({ data }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();
  return (
    <>
      <Link href="/">
        <div className={`position-relative ${Style.card_360}`}>
          <div className={Style.card_360_img_wrap}>
            {width >= 992 ? (
              <div className={Style.icon}>
                <Icon icon="icon_play" size={50} />
              </div>
            ) : ""}

            <figure
              className={`img_wrap position-relative ratio ${Style.img_wrap}`}>
              <Image src={Assets.project_3} alt="project one" fill />
            </figure>
          </div>
       
        </div>
      </Link>

    </>
  );
};

export default VideoCard;
