import React from 'react'
import Style from "./HomeWorks.module.scss"
import ProjectCard from '@/components/ProjectCard'

const HomeWorks = (props) => {
  return (
    <section className='py-[100px] text-white'>
      <div className="container">
        <h2 className='ttl text-xs mb-4 lg:mb-6 tracking-[.72px]'>{props?.data?.title}</h2>
        <div className='grid grid-cols-3 gap-[20px]'>
            {props?.data?.works?.map((data,i)=>{
                return(
                    <div className={`${Style.project_card}`} key={i}>
                    <ProjectCard props={data}/>
                   </div>
                )
            })}
        </div>
      </div>
    </section>
  )
}

export default HomeWorks