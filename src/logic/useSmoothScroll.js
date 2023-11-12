import React, { useLayoutEffect } from "react";
import Lenis from "@studio-freight/lenis";


const useSmoothScroll = () => {
    let lenis = "";
    useLayoutEffect(() => {
        lenis = new Lenis({
            //       duration: 1.2,
            //       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            //       direction: "vertical",
            //       gestureDirection: "vertical",
            //       smooth: true,
            //       smoothTouch: false, 
            //       touchMultiplier: 2,
            //       infinite: false,
            speed: 800,
            offset: 50,
            duration: 2,
            easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -20 * t)),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            smoothTouch: true,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        requestAnimationFrame(raf);
        window.lenis = lenis;
    }, []);
};

export default useSmoothScroll;

