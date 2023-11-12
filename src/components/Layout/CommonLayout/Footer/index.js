import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";
import Style from "./Footer.module.scss";
import Icon from "../../Icons";
import { useWindowSize } from "../../../../logic/useDimension";
import Assets from "../assets";
import Image from "next/image";
const Footer = ({ props }) => {
  const { width } = useWindowSize();
  const scrollTopHAndler = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className={Style.footer}>
      <div className="container">
         <div className={Style.footer_top}>
              <h2 className={`h3 fw-700 ${Style.title}`}>Let’s work together</h2>
              <Link href="mailto:mithunmacsafe@gmail.com">mithunmacsafe@gmail.com</Link>
         </div>
        <div className={Style.privacy_wrap}>
        
          <div className="text-lg-center text-center">
            <p className={Style.copyright}>
              Copyright © 2023.
            </p>
          </div>
          <div className="text-lg-end text-center">
            <p>
              Designed by <Link href="/" target="_blank">mithun raj</Link>
            </p>
          </div>
        </div>
        <>
        </>
        <Link href="#" className="back-top" onClick={scrollTopHAndler}>
          <Icon icon="arrow-top" size={20} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
