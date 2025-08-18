"use client"
import SkillCard from '@/components/SkillCard'
import FadeAnim from '@/utilities/FadeAnim'
import React from 'react'

const AboutSkills = (data) => {
  console.log(data,"data");
  
  return (
    <section className='pb-[50px] pt-[100px] lg:py-[100px]'>
          <FadeAnim>
        <div className="container  fade-elem">
          <h2 className='ttl text-[40px] lg:text-h2 text-white mb-8'>{data?.data?.title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-[20px]">
               {data?.data?.skills?.map((data,i)=>{
                return(
                   <div key={i}>
                     <SkillCard props={data} />
                   </div>
                )
               })}
            </div>
        </div>
            </FadeAnim>
    </section>
  )
}

export default AboutSkills