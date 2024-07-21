import React from 'react'
import Style from "./HomeBanner.module.scss"


const HomeBanner = (props) => {
  const parse = require('html-react-parser').default;

  return (
    <section className={`h-screen md:h-[70vh] xl:h-screen ${Style.home_banner} relative`}>
      <div className={`absolute text-white w-full xs:text-center ${Style.title}`}>
        <div className="container">
          <h1 className='ttl text-[50px] md:text-[100px] lg:text-[135px] xxl:text-h1 flex flex-col w-full'>{parse(props?.data?.title)}</h1>
        </div>
      </div>
    </section>
  )
}

export default HomeBanner