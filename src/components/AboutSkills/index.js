import Image from "next/image";
import Style from "./AboutSkills.module.scss";
import Assets from "../Layout/CommonLayout/assets";
import Animate from "../Animate";
import Link from "next/link";


const AboutSkills = ({ props }) => {
    return (
        <Animate as="section" className={`fade_in ${Style.founder}`}>
            <div className="container">
                <div className="row align-items-center" >
                    <div className="col-md-5">
                        <div className={Style.founder_img}>
                        <h2 className={`ttl-55 d-block d-lg-none mb-3 ${Style.title}`}>My Skills</h2>
                            <figure className="ratio ">
                                <Image src={Assets.founder_Ceo} alt="founder" fill />
                            </figure>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className={Style.founder_about}>
                            <Animate as="h2" className={`fade_in ttl-55 d-none d-lg-block  ${Style.title}`}>My Skills</Animate>
                            <Animate as="p" className={`fade_in ${Style.founder_about_discription}`}>
                            Creating and maintaining websites or web applications. It encompasses various technologies, tools, and skills to build, design, and optimize web content with minimum loading time. 
                            </Animate>
                            <Animate as="div" className="fade_in" >
                            <ul>
                                <li>HTML 5</li>
                                <li>CSS</li>
                                <li>SCSS</li>
                                <li>JAVA SCRIPT</li>
                                <li>REACT JS</li>
                                <li>NEXT JS</li>
                                <li>ANGULAR JS</li>
                                <li>PYTHON</li>
                                <li>GSAP</li>
                                <li>WORDPRESS</li>
                              </ul>
                             
                            </Animate>
                          
                            <Animate as="div" className="fade_in" >
                            <Link href="mithun-resume.pdf" className="" download target='_blank'>Download My Resume</Link>
                            </Animate>
                        </div>

                    </div>
                </div>
            </div>
        </Animate>
    );
};
export default AboutSkills;