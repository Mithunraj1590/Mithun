import Icons from '@/styles/Icons'
import Link from 'next/link'
import React from 'react'

const StackCard = ({ props }) => {
    return (
        <Link href={`${props?.link?.url}`} className='lg:flex-1 btn-icon !block hover-translateX group w-full bg-dark_gray p-[24px] rounded-2xl lg:h-full text-center'>
            <div className='mb-[20px] lg:mb-[40px] xl:mb-0 lg:h-[65px] xl:h-[80%] flex items-center justify-center'>
                <h3 className='ttl text-[20px]'>{props.title}</h3>
            </div>
            <div className='w-full mt-auto'>
                <button className="text-xs btn-icon hover-translateX w-full justify-center">
                    {props?.link?.text}
                    <span className="icon">
                        <Icons size={18} icon="aroow-top" />
                    </span>
                </button>
            </div>
        </Link>
    )
}

export default StackCard