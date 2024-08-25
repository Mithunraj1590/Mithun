import FadeAnim from '@/utilities/FadeAnim'
import Link from 'next/link'
import React from 'react'

const AboutJourney = (props) => {
  return (
    <section>
        <FadeAnim>
        <div className="container fade-elem">
        <div className={`bg-dark_gray p-[40px] px-[60px] rounded-[40px]`}>
                <div className='grid grid-cols-2'>
                    <div className='text-white'>
                        <h2 className='ttl text-h2 leading-[72px] pt-[40px]'>{props?.data?.title}</h2>
                    </div>
                    <div>
                        {props?.data?.career?.map((data, i) => {
                            return (
                                <div className='text-white py-[40px] flex gap-[30px]' key={i}>          
                                    <p className='para text-[14px] pt-3'><span>{data?.start_date}</span> - <span>{data?.end_date}</span></p>
                                    <div>
                                        <h4>{data?.designation} </h4>
                                         <p className='para text-[14px] mb-3'>Experince : <span >{data?.experince} years</span></p>
                                         <p className='para text-[16px]'>Company : <Link href={`${data?.url}`} className='mx-2  underline-offset-8 decoration-[1.5px] hover:underline'>{data?.company_name}</Link>
                                         </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                </div>
        </div>
        </FadeAnim>
    </section>
  )
}

export default AboutJourney