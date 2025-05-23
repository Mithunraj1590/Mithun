"use client";

import { useState } from "react";
import Link from "next/link";
import headerNavLinks from "src/api/staticData/headerNavLinks";
import Style from "./Header.module.scss";


const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
        document.documentElement.style.height = ""
         document.body.style.height = "";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
         document.body.style.height = "100vh";
           document.documentElement.style.height = "100vh";
      }
      return !status;
    });
  };

  return (
    <>
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className={`sm:hidden ${Style.mobMenuBtn}`}
      >
      <span></span><span></span>
      </button>
      <div
        className={`fixed left-0 top-[93px] z-10 w-full transform opacity-95 dark:opacity-[0.98] bg-black duration-300 ease-in-out dark:bg-gray-950 ${
          navShow ? "translate-x-0" : "translate-x-full"
        }`}
         style={{ height: 'calc(100vh - 94px)',  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(15.3px)',
    WebkitBackdropFilter: 'blur(15.3px)', }}
      >
     
        <nav className="fixed mt-8 h-full">
          {headerNavLinks.map((link) => (
            <div key={link.title} className="px-12 py-4">
              <Link
                href={link.href}
                className="text-2xl font-bold tracking-widest text-white"
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
