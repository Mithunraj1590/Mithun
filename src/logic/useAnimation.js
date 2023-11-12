import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Power2 } from "gsap/dist/all";

gsap.registerPlugin(ScrollTrigger);

const useAnimation = () => {
  const slideTop = useRef([]);
  slideTop.current = [];
  const slideRight = useRef([]);
  slideRight.current = [];

  useEffect(() => {
    slideTop.current.map((item) => {
      return gsap.fromTo(
        item,
        {
          autoAlpha: 1,
          y: 20,
          ease: Power2,
        },
        {
          y: 0,
          duration: 0.5,
          autoAlpha: 1,
          ease: Power2,
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=100",
          },
        }
      );
    });
    slideRight.current.map((item) => {
      return gsap.fromTo(
        item,
        {
          autoAlpha: 0,
          x: -30,
          ease: Power2,
        },
        {
          x: 0,
          duration: 0.5,
          autoAlpha: 1,
          ease: Power2,
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  const slideTopRef = (item) => {
    if (item) {
      slideTop.current.push(item);
    }
  };
  const slideRightRef = (item) => {
    if (item) {
      slideRight.current.push(item);
    }
  };

  return slideTopRef;
};

export default useAnimation;