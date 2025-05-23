import FadeAnim from '@/utilities/FadeAnim'
import React from 'react'

const HomeHire = (props) => {
    return (
        <section className='pb-[50px] lg:pb-[100px] pt-[50px]'>
            <FadeAnim>
            <div className="container fade-elem">
                <div className={`bg-dark_gray px-[25px] py-[30px] lg:py-[40px] lg:px-[60px] rounded-[40px]`}>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='text-white'>
                        <h3 className='ttl text-xs mb-4 lg:mb-6 tracking-[.72px] font-jet'>{props?.data?.title}</h3>
                        <h2 className='ttl text-[40px] leading-[45px] lg:text-h2 lg:leading-[73px]'>{props?.data?.main_title}</h2>
                    </div>
                    <div className='pt-[10px] lg-pt-0'>
                        {props?.data?.services?.map((data, i) => {
                            return (
                                <div className='text-white py-[20px] lg:py-[40px]' key={i}>
                                    <h3 className='mb-3 h4 lg:h3 lg:mb-5'>{data?.title}</h3>
                                    <p>{data?.description}</p>
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

export default HomeHire