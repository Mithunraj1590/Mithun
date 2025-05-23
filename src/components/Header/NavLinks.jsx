import React from 'react'
import headerNavLinks from "@/api/staticData/headerNavLinks";
import Link from "next/link";
import Style from "./Header.module.scss";
import { usePathname } from 'next/navigation'

const NavLinks = () => {
    const pathname = usePathname();

    return (
        <>
            {headerNavLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <Link
                        key={link.title}
                        href={link.href}
                        className={`${Style.menu_link} hidden sm:block font-medium text-white 
              ${isActive ? Style.active : ""}`}
                    >
                        {link.title}
                    </Link>
                )
            })}
        </>
    )
}

export default NavLinks;