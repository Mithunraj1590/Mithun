import React from 'react'
import Style from "./HomeWorks.module.scss"
import ProjectCard from '@/components/ProjectCard'
import FadeAnim from '@/utilities/FadeAnim'

const HomeWorks = (props) => {
  return (
    <section className='py-[50px] lg:py-[100px] text-white'>
      <FadeAnim>
      <div className="container">
        <h2 className='ttl text-xs mb-4 lg:mb-6 tracking-[.72px] fade-elem'>{props?.data?.title}</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-[20px] gap-y-[20px]'>
            {props?.data?.works?.map((data,i)=>{
                return(
                    <div className={`${Style.project_card} fade-elem`} key={i}>
                    <ProjectCard props={data}/>
                   </div>
                )
            })}
        </div>
      </div>
      </FadeAnim>
    </section>
  )
}

export default HomeWorks