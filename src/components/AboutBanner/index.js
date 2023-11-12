import Image from "next/image";
import Style from "./AboutBanner.module.scss";
import Assets from "../Layout/CommonLayout/assets";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Animate from "../Animate"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}


const AboutBanner = ({ props }) => {

    return (
        <section className={`${Style.about_banner}`}>
            <div className="containe">
                <div className={Style.about_banner_img} >
                    <div className={Style.img_wrap} >
                        <figure className={Style.figure}>
                            <Image src={Assets.about_banner} alt="banner" fill quality={100} className="d-none d-lg-block" />
                            <Image src={Assets.about_banner} alt="banner" fill quality={100} className="d-block d-lg-none" />

                        </figure>


                    </div>


                    <div className={`${Style.container_wrap}`}>
                        <div className={`container content ${Style.about_banner_content}`} >
                            <div className={Style.banner_content_wrap}>
                                <h1 className="ttl-64">About</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};
export default AboutBanner;