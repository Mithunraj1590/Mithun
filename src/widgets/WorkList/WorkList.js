"use client"
import ProjectCard from '@/components/ProjectCard';
import React, { useState } from 'react'
import Style from "./WorkList.module.scss"
import Select from 'react-select';

const WorkList = (data) => {
    const [selectedOption, setSelectedOption] = useState(data?.data?.category[0]);
    return (
        <section className={`py-[100px] ${Style.worklist}`}>
            <div className="container">
                <div className='mt-[100px]'>
                    <h2 className='ttl text-h2 leading-[0.8] mb-[50px] text-white'>
                        {data?.data?.title}
                    </h2>
                </div>
                <div className="grid grid-cols-2 text-white mb-[150px] z-20 relative">
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
                <div className='grid grid-cols-3 gap-[20px] relative z-10'>
                    {data?.data?.works?.map((data, i) => {
                        console.log(data, "wwwsss");
                        return (
                            <div className={`${Style.project_card}`} key={i}>
                                <ProjectCard props={data} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default WorkList