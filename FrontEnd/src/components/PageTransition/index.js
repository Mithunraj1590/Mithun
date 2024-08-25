"use client";
import React, { useLayoutEffect, useState } from "react";
import Style from "./PageTransition.module.scss";
import { usePathname } from "next/navigation";

const PageTransition = ({ children, duration, easing }) => {
  const [isTransitionActive, setIsTransitionActive] = useState(false);
  const pathname = usePathname();
  useLayoutEffect(() => {
    setIsTransitionActive(true);
  }, [pathname]);

  return (
    <div
      className={`${Style.page_transition ?? "page-transition"} ${
        isTransitionActive ? "transition-active" : ""
      }`}
      style={{ "--pt-duration": duration, "--pt-easing": easing }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
