"use client";

import { useState } from "react";
import Image from "next/image";
import { assets } from "../../assests/assets";

const navigationLinks = [
    { label: "Home", href: "#top" },
    { label: "About me", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "My work", href: "#work" },
    { label: "My Experience", href: "#experience" },
    { label: "My Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <nav className="navbar" aria-label="Main navigation">
            <div className="navbar-inner">
                <a className="navbar-brand" href="#top" onClick={closeMenu}>
                    <span>Joy Samul</span><i aria-hidden="true">.</i>
                </a>

                <ul className={`navbar-links${menuOpen ? " is-open" : ""}`} id="primary-navigation">
                    {navigationLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={closeMenu}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                <a className="navbar-contact" href="#contact">
                    Let&apos;s talk
                    <Image src={assets.arrow_icon} alt="" width={14} height={14} />
                </a>

                <button
                    className="navbar-toggle"
                    type="button"
                    aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                    aria-expanded={menuOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setMenuOpen((isOpen) => !isOpen)}
                >
                    <Image src={menuOpen ? assets.close_black : assets.menu_black} alt="" width={24} height={24} />
                </button>
            </div>
        </nav>
    );
}
