import { useRef, useEffect } from "react";
import NewProjectCard from "../utils/NewProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Style from "./HomeAllProjects.module.scss";
import Icon from "../Layout/Icons";
import Link from "next/link";
import { useWindowSize } from "../../logic/useDimension";
import Animate from "../Animate/Animate";

const HomeAllProjects = ({ props }) => {
  const { width } = useWindowSize();
  SwiperCore.use([Navigation]);
  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);

  return (
    <section className={Style.all_projects_sec}>
      <div className="container">
        <div className={`row     ${Style.head_wrap}`}>
          <div className="col" >
            <Animate as="h2" className="fade_in h3 mb-0">Projects</Animate>
          </div>
        </div>
        <div className={`position-relative slider_wrapper ${Style.slider_wrap}`}>
          <Swiper
            spaceBetween={20}
            // loop={true}
            // autoplay={{
            //   delay: 2000,
            //   // disableOnInteraction: false,
            // }}
            speed={1000}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navPrevRef.current;
              swiper.params.navigation.nextEl = navNextRef.current;
            }}
            navigation={{
              prevEl: navPrevRef.current,
              nextEl: navNextRef.current,
            }}
            className={`${Style.board_swiper} slider`}
            breakpoints={{
              0: {
                spaceBetween: 20,
                slidesPerView: 1.2,
              },
              768: {
                spaceBetween: 30,
                slidesPerView: 2,
              },
              992: {
                spaceBetween: 22,
                slidesPerView: 2,
              },
              1500: {
                spaceBetween: 70,
                slidesPerView: 2,
              },
            }}
            modules={[Navigation, Autoplay]}
          >
            {props?.data?.card?.map((data, i) => {
              return (
                <SwiperSlide key={i}>
                  <NewProjectCard props={data} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="btn_anim_wrap">
            <div className="btn_anim">
              <button className="nav-arrow nav-arrow-left arrow1" ref={navPrevRef}>
                <Icon icon="prev-arrow" size={13} />
              </button>

              <button className="nav-arrow nav-arrow-left arrow2" ref={navPrevRef}>
                <Icon icon="prev-arrow" size={13} />
              </button>
            </div>

            <div className="btn_anim">
              <button className="nav-arrow nav-arrow-right arrow1" ref={navNextRef}>
                <Icon icon="next-arrow" size={13} />
              </button>
              <button className="nav-arrow nav-arrow-right arrow2" ref={navNextRef}>
                <Icon icon="next-arrow" size={13} />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`d-flex justify-content-center ${Style.view_btn_wrap} `}
        >
       

          <Link href="/project-list" className="button button-outline-secondary">
            <span>
              All Projects
              <span className="btn_arrow">
                <Icon icon="arrow-right" size={13} />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeAllProjects;
