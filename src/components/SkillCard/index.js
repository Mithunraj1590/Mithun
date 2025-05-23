import Image from 'next/image'
import React from 'react'

const SkillCard = ({ props }) => {
    return (
        <div className='w-full bg-dark_gray p-[24px] rounded-2xl lg:h-full text-center '>
            <div className='w-[90px] h-[90px] m-auto bg-white overflow-hidden rounded-full flex justify-center items-center'>
                <div className='w-[70px] h-[70px] relative'>
                    <Image src={props?.image} fill alt="img"/>
                </div>
            </div>

            <div className='mt-[30px] bg-primary p-2 rounded-md'>
                <p className='text-white'>{props?.name}</p>
            </div>
        </div>
    )
}

export default SkillCard