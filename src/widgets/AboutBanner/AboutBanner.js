import Image from 'next/image'
import Style from "./AboutBanner.module.scss"
import React from 'react'
import Link from 'next/link'
import Icons from '@/styles/Icons'


const AboutBanner = (data) => { 
  return (
    <section className={`${Style.about_banner} mt-[50px] py-[100px]`}>
       <div className=' w-full'>
       <div className="container">
            <div className="grid grid-cols-2 items-center">
                <div className='w-[450px]'>
                    <figure className={`${Style.figure}`}>
                        <Image src={data?.data?.image} fill alt="about-img"></Image>
                    </figure>
                </div>
                <div className='text-white'>
                    <h2 className='ttl text-h2 leading-[1] mb-[30px]'>{data?.data?.title}</h2>
                    <p>{data?.data?.description}</p>
                    <Link href="" className="btn btn-primary btn-icon max-w-max mt-[20px] md:mt-[35px] xl:mt-[40px]">
                  DOWNLOAD CV
                  <span className="icon">
                    <Icons size={18} icon="download1" />
                  </span>
                </Link>
                </div>
            </div>
        </div>
       </div>
    </section>
  )
}

export default AboutBanner