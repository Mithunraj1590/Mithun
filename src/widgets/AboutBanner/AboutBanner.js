"use client"
import Image from 'next/image'
import Style from "./AboutBanner.module.scss"
import React, { useRef } from 'react'
import Link from 'next/link'
import Icons from '@/styles/Icons'
import FadeAnim from '@/utilities/FadeAnim'



const AboutBanner = (data) => { 
  const imgRef = useRef();

  return (
    <section className={`${Style.about_banner} mt-[100px] py-[50px] lg:py-[100px]`}>
       <div className=' w-full'>
                <FadeAnim>
       <div className="container  fade-elem">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className='w-full mb-[30px] lg:mb-0 lg:w-[450px]'>
                    <figure className={`${Style.figure}`}>
                        <Image
                        className=""
                        src={data?.data?.image} fill alt="about-img"></Image>
                    </figure>
                </div>
              
                <div className='text-white'>
                    <h2 className='ttl text-[40px] lg:text-h2 leading-[1] mb-[20px] lg:mb-[30px]'>{data?.data?.title}</h2>
                    <p>{data?.data?.description}</p>
                    <Link href="" className="btn btn-primary btn-icon max-w-max mt-[30px] md:mt-[35px] xl:mt-[40px]">
                  DOWNLOAD CV
                  <span className="icon">
                    <Icons size={18} icon="download1" />
                  </span>
                </Link>
                </div>
            </div>
        </div>
                </FadeAnim>
       </div>
    </section>
  )
}

export default AboutBanner