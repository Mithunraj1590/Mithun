import Style from "./HomeAbout.module.scss";
import Assets from "../Layout/CommonLayout/assets";
import Link from "next/link";
import Icon from "../Layout/Icons";
import Image from "next/image";
import { Ratio } from "react-bootstrap";
import { useWindowSize } from "../../logic/useDimension";
import Animate from "../Animate"

const HomeAbout = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize()
  return (
    <>
      <Animate as="section" className={Style.home_about_sec} >
        <div className="container">

          {width >= 992 ? "" : <Animate as="h2" className={`fade_in h2 fw-500 ${Style.title}`}>About Myself</Animate>}
          <div className="row">
            {width >= 992 ?
              <div className="col-lg-6">
                <figure
                  className={`img_wrap position-relative ratio ${Style.img_wrap}`}
                >
                  <Image
                    src={Assets.home_about}
                    fill
                    alt="Home about"
                  />
                </figure>
              </div> : ""}
            <div className="col-lg-6" >
              <div className={Style.content_wrap}>
                <div className={Style.content_head} >
                  {width >= 992 ? <h2 className="h2 fw-700" >About Myself</h2> : ""}
                  <Animate as="p" className="fade_in">
                    B.E Computer science
                    student with a self starter
                    attitude and experienced in
                    web development , building
                    process solutions and leading
                    people to achieve their
                    outcome.
                  </Animate>
                </div>

             

                <Link href="/aboutus" className="button button-outline-secondary">
                  <span>
                    Know More
                    <span className="btn_arrow">
                      <Icon icon="arrow-right" size={13} />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Animate>
    </>
  );
};

export default HomeAbout;
