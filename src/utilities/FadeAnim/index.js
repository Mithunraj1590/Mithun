"use client"
import Style from "./FadeAnim.module.scss"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.config({
    force3D: true,
    nullTargetWarn: false,
});

const FadeAnim = ({ children, className }) => {


    const containerRef = useRef();

    useGSAP((self) => {

        const elm = self.selector(".fade-elem");

        let mm = gsap.matchMedia();

        mm.add("(min-width : 1200px)", () => {


            if (elm) {
                ScrollTrigger.batch(elm, {
                    onEnter: (batch) =>
                        gsap.to(batch,
                            {
                                opacity: 1,
                                y: 0,
                                stagger: 0.15,
                                duration: 1,
                                ease: "power3",
                                delay: 0,
                            }),
                    scrub: true,
                    start: "-20px 99%",
                    end: "top 90%",
                })
            }
        })

    }, { scope: containerRef })

    return (
        <div ref={containerRef} className={`${Style.fade}`}>
            {children}
        </div>
    )
}

export default FadeAnim