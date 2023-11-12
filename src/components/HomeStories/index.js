import { useRef } from "react";
import StoryCard from "../utils/StoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Style from "./HomeStories.module.scss";
import Icon from "../Layout/Icons";
import Link from "next/link";
import { useWindowSize } from "../../logic/useDimension";
import ButtonAnim from "../utils/ButtonAnim";
import Animate from "../Animate/Animate";
import TestimonialTextCard from "../utils/TestimonialTextCard";


const HomeStories = ({ props }) => {
  SwiperCore.use([Navigation]);
  const { width } = useWindowSize();
  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);
  return (
    <Animate as="section" className={`fade_in ${Style.story_sec}`}>
      <div className="container">
        <div className={`row  align-items-end   ${Style.head_wrap}`}>
          <Animate as="div" className="col fade_in">
            <h2 className="h3" >Testimonial</h2>
          </Animate>

        </div>

        <div className={`position-relative ${Style.slider_wrap}`}  >
          <Swiper
            spaceBetween={20}
            modules={[Navigation]}
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
                spaceBetween: 30,
                slidesPerView: 1.2,
              },
              768: {
                spaceBetween: 30,
                slidesPerView: 2,
              },
              992: {
                spaceBetween: 22,
                slidesPerView: 3,
              },
              1500: {
                spaceBetween: 30,
                slidesPerView: 3,
              },
            }}
          >
            {props?.data?.stories?.map((data, i) => {
              return (
                <SwiperSlide key={i}>
                  <Animate as="div" className="fade_in">
                  <TestimonialTextCard props={data}></TestimonialTextCard>
                  </Animate>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
       
      </div>
    </Animate>
  );
};

export default HomeStories;
