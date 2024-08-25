"use client"
import React, { useEffect, useRef } from 'react'
import Style from "./HomeBanner.module.scss"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import HomeBrain from './Brain';

const HomeBanner = (props) => {
  const parse = require('html-react-parser').default;
  const title = props?.data?.title;
  const words = title ? title.split(' ') : [];
  const titleRef = useRef(null);

  useGSAP(() => {
    gsap.to(
      titleRef.current.querySelectorAll('span'), 
      { 
        opacity: 1, 
        y: 0, 
        duration: .5, 
        stagger: 0.1
      }
    );
  });

  return (
    <section className={`h-screen md:h-[70vh] xl:h-screen ${Style.home_banner} relative`}>
      <div className={`absolute z-10 text-white w-full xs:text-center ${Style.title}`}>
        <div className="container">
          <h1 ref={titleRef} className='ttl font-bai text-[50px] md:text-[100px] lg:text-[135px] xxl:text-h1 flex flex-col w-full'>
          {words.map((word, index) => (
              <span key={index}>
                <span>{word}</span>
              </span>
            ))}
          </h1>
        </div>
      </div>
      <HomeBrain></HomeBrain>
    </section>
  )
}

export default HomeBanner