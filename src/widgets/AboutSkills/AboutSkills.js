import SkillCard from '@/components/SkillCard'
import React from 'react'

const AboutSkills = (data) => {
  return (
    <section className='py-[100px]'>
        <div className="container">
          <h2 className='ttl text-h2 text-white mb-8'>{data?.data?.title}</h2>
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
    </section>
  )
}

export default AboutSkills