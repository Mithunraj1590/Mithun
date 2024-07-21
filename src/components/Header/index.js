import React from "react";
import MobileNav from "./MobileNav";
import Style from "./Header.module.scss";
import NavLinks from "./NavLinks";
const MainHeader = () => {
  return (
    <header className={`${Style.MainHeader}`}>
      <div className="container m-auto px-4">
        <div className="flex items-center justify-between py-10  ">
          <div className="logo text-white">Logo</div>
          <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
            <NavLinks />
          </div>
        </div>
        <MobileNav />
      </div>
    </header>
  );
};

export default MainHeader;
