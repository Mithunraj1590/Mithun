import Style from "./ButtonAnim.module.scss";
import Icon from "../../Layout/Icons";
import { useWindowSize } from "../../../logic/useDimension";
import Link from "next/link";

const ButtonAnim = () => {
  const { width } = useWindowSize();
  return (
    <div className={`btn_container ${Style.btn_wrap}`}>
      <Link className="btn_outline_primary" href="/">
        <span className="text">Try Now</span>
        <div className="icon_container">
          <div className="icon icon--left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.594"
              height="11.674"
              viewBox="0 0 15.594 11.674"
            >
              <g
                id="Group_60704"
                data-name="Group 60704"
                transform="translate(0 0.512)"
              >
                <path
                  id="Path_76841"
                  data-name="Path 76841"
                  d="M528.924-15924.912l5.026,5.385-5.619,5.229"
                  transform="translate(-519.417 15924.912)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="1.5"
                />
                <path
                  id="Path_76842"
                  data-name="Path 76842"
                  d="M-1.4-.149H13.136"
                  transform="translate(1.397 5.49)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="1.5"
                />
              </g>
            </svg>
          </div>
          <div className="icon icon--right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.594"
              height="11.674"
              viewBox="0 0 15.594 11.674"
            >
              <g
                id="Group_60704"
                data-name="Group 60704"
                transform="translate(0 0.512)"
              >
                <path
                  id="Path_76841"
                  data-name="Path 76841"
                  d="M528.924-15924.912l5.026,5.385-5.619,5.229"
                  transform="translate(-519.417 15924.912)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="1.5"
                />
                <path
                  id="Path_76842"
                  data-name="Path 76842"
                  d="M-1.4-.149H13.136"
                  transform="translate(1.397 5.49)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="1.5"
                />
              </g>
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ButtonAnim;
