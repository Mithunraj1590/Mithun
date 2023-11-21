import Style from "./AboutMilestones.module.scss";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { useWindowSize } from "../../logic/useDimension";
// import required modules

import Image from "next/image";
import Assets from "../Layout/CommonLayout/assets";

import SwiperCore, { Navigation, Autoplay } from "swiper";
import Icon from "../Layout/Icons";
import Animate from "../Animate";


const AboutMilestones = ({ props }) => {
    SwiperCore.use([Navigation]);
    const navPrevRef = useRef(null);
    const navNextRef = useRef(null);
    return (
        <Animate as="section" className={`fade_in ${Style.milestone}`}>
            <div className="container">
                <Animate as="div" className={`${Style.milestone_head} fade_in d-flex justify-content-between`}>
                    <h2 className={`ttl-55 ${Style.milestone_head_title}`}>Education</h2>
                    <div className={`d-flex ${Style.milestone_sub}`}>
                       
                        
                    </div>
                </Animate>

                <div className={Style.swiper_overflow}>
                    <div className={Style.bar}></div>
                    <Swiper
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = navPrevRef.current;
                            swiper.params.navigation.nextEl = navNextRef.current;
                        }}
                        navigation={{
                            prevEl: navPrevRef.current,
                            nextEl: navNextRef.current,
                        }}
                        slidesPerView={4}
                        spaceBetween={28}


                        modules={[]}
                        className="mySwiper"

                        breakpoints={{
                            0: {
                                spaceBetween: 0,
                                slidesPerView: 1.7,
                            },
                            768: {
                                spaceBetween: 30,
                                slidesPerView: 2,
                            },
                            1200: {
                                spaceBetween: 22,
                                slidesPerView: 3,
                            },
                            1600: {
                                spaceBetween: 30,
                                slidesPerView: 5,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <Animate as="div" className={`fade_in ${Style.img_wrap}`}>
                                <h2>2014</h2>
                                <p>SSLC (chinmaya vidyalaya)</p>
                            </Animate>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Animate as="div" className={`fade_in ${Style.img_wrap}`}>
                                <h2>2016</h2>
                                <p>Plus 2 (pvs hss)
                                </p>
                            </Animate>

                        </SwiperSlide>
                        <SwiperSlide>
                            <Animate as="div" className={`fade_in ${Style.img_wrap}`}>
                                <h2>2019</h2>
                                <p>Web Authoring <span className="d-block">(image creative education)</span></p>
                            </Animate>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Animate as="div" className={`fade_in ${Style.img_wrap}`}>
                                <h2>2020</h2>
                                <p>Penetration Testing <span className="d-block">(redteam hacker academy)</span></p>
                            </Animate>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Animate as="div" className={`fade_in ${Style.img_wrap}`}>
                                <h2>2021</h2>
                                <p>Python fullstack development <span className="d-block">(rightsoft option)</span></p>
                            </Animate>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Animate as="div" className={`fade_in ${Style.img_wrap}`}>
                                <h2>2022</h2>
                                <p>B.E Computer Science <span className="d-block">(mahendra enginnering college)</span>
                                </p>
                            </Animate>
                        </SwiperSlide>
                      

                       
                       
                      

                    </Swiper>



                    <div className={Style.timeline_nav}>
                        <button className="nav-arrow nav-arrow-left arrow1" ref={navPrevRef}>
                            <Icon icon="prev-arrow" size={13} />
                        </button>
                        <button className="nav-arrow nav-arrow-right arrow2" ref={navNextRef}>
                            <Icon icon="next-arrow" size={13} />
                        </button>
                    </div>

                </div>
            </div>
        </Animate>
    );
};
export default AboutMilestones;