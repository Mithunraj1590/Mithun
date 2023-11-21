import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Style from "./AboutChooseMe.module.scss";
import Animate from "../Animate";
import SkillCard from "../utils/Skillcard";


const AboutChooseMe = ({ props }) => {

  return (
    <Animate as="section" className={`fade_in ${Style.kent_blog_sec}`}>
        <div className="container">
          <Animate as="div" className={`row gx-0 fade_in  align-items-end flex-column flex-lg-row   ${Style.head_wrap}`}>
            <div className="col">
              <h2 className="h3">WHY CHOOSE ME</h2>
            </div>
          </Animate>

        
              <div className={`position-relative ${Style.skill_wrap}`} >
               
               {props?.data?.card?.map((data,i)=>{
                console.log(data,"console");
                return(
                  
                  <SkillCard props={data} key={i}></SkillCard>
                 
                )
               })}
              </div>
         
        

      
        </div>
     
    </Animate>
  );
};

export default AboutChooseMe;
