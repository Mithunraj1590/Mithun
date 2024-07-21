import StackCard from '@/components/StackCard'
import Icons from '@/styles/Icons'
import Link from 'next/link'
import React from 'react'

const HomeAbout = (props) => {
    return (
        <section className='py-[50px] md:py-[70px] xl:py-[140px]'>
            <div className="container">
                <div className="flex flex-wrap gap-y-[50px] text-white">
                    <div className='w-full lg:flex-[40%]'>
                        <div className='w-full lg:max-w-[80%]'>
                            <h3 className='ttl text-xs mb-4 lg:mb-6 tracking-[.72px] font-jet'>{props?.data?.title}</h3>
                            <p>{props?.data?.description}</p>
                            <Link href={`${props?.data?.link?.url}`} className="btn btn-primary btn-icon hover-translate max-w-max mt-[30px] lg:mt-[20px] md:mt-[35px] xl:mt-[40px]">
                                {props?.data?.link?.text}
                                <span className="icon">
                                    <Icons size={18} icon="aroow-top" />
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className='w-full lg:flex-[60%] h-full xl:h-auto'>
                    <h3 className='ttl text-xs mb-6 tracking-[.72px]'>{props?.data?.stack_title}</h3>
              
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-[20px] lg:gap-[10px] lg:h-full'>
                            {props?.data?.stack?.map((data, i) => {
                                return (
                                    <StackCard props={data} key={i}/>
                                )
                            })}
                        </div>
                        </div>
               
                </div>
            </div>
        </section>
    )
}

export default HomeAbout