import React from 'react'
import headerNavLinks from "@/api/staticData/headerNavLinks";
import Link from "next/link";

const NavLinks = () => {
    return (
        <>
            {headerNavLinks.map((link) => (
                <Link
                    key={link.title}
                    href={link.href}
                    className="hidden sm:block font-medium text-white"
                >
                    {link.title}
                </Link>
            ))}
        </>
    )
}

export default NavLinks