import Image from 'next/image'
import Style from "./ProjectCard.module.scss"
import Link from 'next/link';

const ProjectCard = ({ props }) => {
    
    return (
        <div className={`w-full group bg-dark_gray relative h-[500px] lg:h-[735px] max-h-[850px] rounded-[40px] ${Style.project_card} overflow-hidden`}>
            <div className={`h-full absolute w-[846px] lg:left-[20%] lg:top-[16%] ${Style.image}`}>
                <figure className={`${Style.figure}`}>
                    <Image src={props?.image} fill alt="works"></Image>
                </figure>
            </div>
            <Link href={`${props?.url}`} className='stretched-link'></Link>
        </div>
    )
}

export default ProjectCard