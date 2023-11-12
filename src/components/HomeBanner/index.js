import { useRef, useEffect, useState } from "react";
import Style from "./HomeBanner.module.scss";
import Assets from "../Layout/CommonLayout/assets";
import Link from "next/link";
import Icon from "../Layout/Icons";
import Image from "next/image";
import { useWindowSize } from "../../logic/useDimension";

const HomeBanner = ({ props }) => {
  const parse = require("html-react-parser");
  const { width } = useWindowSize();
  const parallaxElement = useRef(null);
  useEffect(() => {
    function handleScroll() {
      const scrollPos = window.scrollY;
      parallaxElement.current.style.setProperty('--scroll-rate', scrollPos / 1000);
      parallaxElement.current.style.setProperty('--scroll-rate-dark', scrollPos / 1000 * 0.8);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [null]);


  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const className = visible ? 'scaleBg' : '';

  return (
    <div className={Style.bg_dark}>
      <section className={`${Style.banner_sec} ${className}`} ref={parallaxElement}>
        <div className={Style.parallax} ref={parallaxElement}>
          <Image src={Assets?.home_banner} fill alt="banner"></Image>
        </div>

        <div className="container position-relative">
          <div className={Style.banner_content} >
            <div className={Style.banner_content_anim}>
              <h3 className={`h3 fw-400 ${Style.trusted_text}`}>HELLO</h3>
              <h1 className={`h1 fw-700 ${Style.title}`}  >I am <span className="d-block">Mithun raj</span></h1>
            </div>
            <div className={Style.know_more}>
              <Link href="https://www.facebook.com/mithun.raj.54540?mibextid=LQQJ4d" target="__blank">
                {" "}
                <Icon icon="facebook" size={20} />{" "}
              </Link>{" "}
              <Link href="https://instagram.com/_mit_hun_raj_?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr" target="__blank">
                {" "}
                <Icon icon="instagram" size={20} />{" "}
              </Link>{" "}
              <Link href="https://www.linkedin.com/in/mithun-raj-278238240" target="__blank">
                {" "}
                <Icon icon="linked_in" size={20} />{" "}
              </Link>{" "}
            </div>
          </div>
      
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;
