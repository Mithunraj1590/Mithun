import Image from "next/image";
import Assets from "../../Layout/CommonLayout/assets";
import Style from "./AwardCard.module.scss";
const AwardCard = ({ data }) => {
  return (
    <div className={Style.feature_card}>
      <div className={Style.feature_card_icon}>
        <div className={Style.icon}>
          <Image
            src={Assets.awards_icon}
            fill
            alt="award icon"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className={Style.feature_card_info}>
        <h4 className={Style.year}>{data?.year}</h4>

        <h4 className={Style.title}>{data?.title}</h4>
        <p className={Style.info}>{data?.description}</p>
      </div>
    </div>
  );
};

export default AwardCard;
