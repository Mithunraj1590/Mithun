"use client";
import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import Style from "./Header.module.scss";
import NavLinks from "./NavLinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainHeader = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Only add scroll listener on homepage
    if (pathname === "/") {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const halfPageHeight = window.innerHeight * 0.2;

        if (scrollPosition > halfPageHeight) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      // Always apply scrolled style on other pages
      setScrolled(true);
    }
  }, [pathname]);

  return (
    <header className={`${Style.MainHeader} ${scrolled ? Style.Scrolled : ""}`}>
      <div className="container m-auto px-4">
        <div className="flex items-center justify-between py-6">
          <div className={`${Style.logo} text-white`}>
            <Link href="/">
              <Image src="/images/logo.png" fill alt="logo" />
            </Link>
          </div>
          <div className="flex items-center leading-5 space-x-4 sm:space-x-[50px]">
            <NavLinks />
          </div>
        </div>
        <MobileNav />
      </div>
    </header>
  );
};

export default MainHeader;
