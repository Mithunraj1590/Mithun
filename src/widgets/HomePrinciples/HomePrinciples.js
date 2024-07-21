import React from 'react'
import Style from "./HomePrinciples.module.scss"

const HomePrinciples = (props) => {
    const parse = require('html-react-parser').default;
    return (
        <section className={`${Style.home_principle} py-[100px]`}>
            <div className="container">
                <div className="text-white text-center">
                    <h3 className='ttl text-xs mb-4 lg:mb-6 tracking-[.72px]'>{props?.data?.title}</h3>
                    <h2 className={`ttl text-[120px] ${Style.title}`}>{parse(props?.data?.main_title)}</h2>
                </div>
                <div className='mt-[150px]'>
                    {props?.data?.principles?.map((data, i) => {
                        return (
                            <div className={`${Style.border} grid grid-cols-2 text-white py-[40px] border-b-[#2e2c2b] relative`} key={i}>
                                <h4 className='ttl text-[35px]'>{data?.title}</h4>
                                <p>{data?.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default HomePrinciples