import React from 'react'
import Style from "./HomePrinciples.module.scss"
import FadeAnim from '@/utilities/FadeAnim';

const HomePrinciples = (props) => {
    const parse = require('html-react-parser').default;
    return (
        <section className={`${Style.home_principle} py-[50px] lg:py-[100px]`}>
            <FadeAnim>
            <div className="container">
                <div className="text-white text-center fade-elem">
                    <h3 className='ttl text-xs mb-4 lg:mb-6 tracking-[.72px] '>{props?.data?.title}</h3>
                    <h2 className={`ttl text-[40px] lg:text-[120px] ${Style.title} `}>{parse(props?.data?.main_title)}</h2>
                </div>
                <div className='mt-[40px] lg:mt-[150px]'>
                    {props?.data?.principles?.map((data, i) => {
                        return (
                            <div className={`${Style.border} grid grid-cols-1 lg:grid-cols-2 text-white py-[30px] lg:py-[40px] border-b-[#2e2c2b] relative fade-elem`} key={i}>
                                <h4 className='ttl text-[25px] leading-[35px] lg:text-[35px] lg:leading-[45px] mb-3 lg:mb-0'>{data?.title}</h4>
                                <p>{data?.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            </FadeAnim>
        </section>
    )
}

export default HomePrinciples