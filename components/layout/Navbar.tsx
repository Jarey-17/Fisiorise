"use client";

import Image from "next/image";
import { useState } from "react";
import { NAVBAR_DATA } from "@/constants";
import AppLink from "@/components/ui/AppLink";
import Icon from "@/components/ui/Icon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const { logo, links, cta, menuLabels } = NAVBAR_DATA;

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Image
          className="navbar__logo"
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          priority
        />

        <div className="navbar__links">
          {links.map((link) => (
            <AppLink key={link.label} href={link.href} className="navbar__link">
              {link.label}
            </AppLink>
          ))}
          <AppLink href={cta.href} className="btn btn--primary btn--sm">
            {cta.label}
          </AppLink>
        </div>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={isOpen ? menuLabels.close : menuLabels.open}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <Icon
            name={isOpen ? "close" : "menu"}
            className="navbar__toggle-icon"
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`navbar__mobile${isOpen ? " is-open" : ""}`}
      >
        {links.map((link) => (
          <AppLink
            key={link.label}
            href={link.href}
            className="navbar__mobile-link"
            onClick={closeMenu}
          >
            {link.label}
          </AppLink>
        ))}
        <AppLink
          href={cta.href}
          className="btn btn--primary navbar__mobile-cta"
          onClick={closeMenu}
        >
          {cta.label}
        </AppLink>
      </div>
    </nav>
  );
}
