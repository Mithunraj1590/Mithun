"use client"
import ProjectCard from '@/components/ProjectCard';
import React, { useState } from 'react'
import Style from "./WorkList.module.scss"
import Select from 'react-select';
import FadeAnim from '@/utilities/FadeAnim';

const WorkList = (data) => {
    const [selectedOption, setSelectedOption] = useState(data?.data?.category[0]);
    return (
        <section className={`py-[100px] ${Style.worklist}`}>
            <FadeAnim>
            <div className="container">
                <div className='mt-[100px] fade-elem'>
                    <h2 className='ttl text-h2 leading-[0.8] mb-[50px] text-white'>
                        {data?.data?.title}
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 text-white mb-[50px] lg:mb-[150px] z-20 relative fade-elem">
                    <div>

                        <p className='text-[22px] para'>{data?.data?.description}</p>
                    </div>
                    <div>
                        <Select
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={data?.data?.category}
                            classNamePrefix='selected'
                        />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-[20px] lg:gap-[20px] relative z-10'>
                    {data?.data?.works?.map((data, i) => {
                        return (
                            <div className={`${Style.project_card} fade-elem`} key={i}>
                                <ProjectCard props={data} />
                            </div>
                        )
                    })}
                </div>
            </div>
            </FadeAnim>
        </section>
    )
}

export default WorkList