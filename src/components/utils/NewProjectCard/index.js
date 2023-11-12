import Style from "./NewProjectCard.module.scss";
import Assets from "../../Layout/CommonLayout/assets";
import Link from "next/link";
import Icon from "../../Layout/Icons";
import Image from "next/image";
import { useWindowSize } from "../../../logic/useDimension";
import Animate from "../../Animate/Animate";

const NewProjectCard = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();
  return (
    <>
      <Link href={`${props?.link}`} >
        <Animate as="div" className={`fade_in position-relative ${Style.project_card}`}>
          <div className={Style.project_card_img_wrap}>
            <figure
              className={`img_wrap position-relative ratio ${Style.img_wrap}`}>
              <Image src={props?.image} alt="project one" fill />
            </figure>
         
          </div>
          <div className={Style.project_details}>
            <div className={Style.project_details_content}>
              <span>Technology used: {props?.technology}</span>
              <h4 className="h4 fw-500">{props?.title}</h4> 
            </div>
          </div>
        </Animate>
      </Link>

    </>
  );
};

export default NewProjectCard;
