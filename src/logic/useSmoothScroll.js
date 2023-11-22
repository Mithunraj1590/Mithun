import React, { useLayoutEffect } from "react";
import Lenis from "@studio-freight/lenis";

const useSmoothScroll = () => {
    useLayoutEffect(() => {
        // Check if the screen width is greater than 768 pixels (adjust as needed)
        const isDesktop = window.innerWidth > 992;

        if (isDesktop) {
            const lenis = new Lenis({
                // ... (your configurations for desktop)
            });

            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);

            // Expose lenis if needed outside the hook
            window.lenis = lenis;
        }
    }, []);
};

export default useSmoothScroll;