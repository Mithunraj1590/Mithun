import FadeAnim from '@/utilities/FadeAnim'
import React from 'react'

const HomeHire = (props) => {
    return (
        <section className='pb-[100px] pt-[50px]'>
            <FadeAnim>
            <div className="container fade-elem">
                <div className={`bg-dark_gray p-[40px] px-[60px] rounded-[40px]`}>
                <div className='grid grid-cols-2'>
                    <div className='text-white'>
                        <h3 className='ttl text-xs mb-4 lg:mb-6 tracking-[.72px] font-jet'>{props?.data?.title}</h3>
                        <h2 className='ttl text-h2 leading-[72px]'>{props?.data?.main_title}</h2>
                    </div>
                    <div>
                        {props?.data?.services?.map((data, i) => {
                            return (
                                <div className='text-white py-[40px]' key={i}>
                                    <h3 className='mb-5'>{data?.title}</h3>
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