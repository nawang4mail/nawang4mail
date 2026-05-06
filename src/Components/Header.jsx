import React, { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#contributions", label: "Activity" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#footer", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean);
      const current = sections.findLast((s) => s.getBoundingClientRect().top <= 80);
      if (current) setActive(`#${current.id}`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`site-nav${scrolled ? " scrolled" : ""}`}>
      <span className="nav-brand">NG</span>
      <div className="nav-links">
        {navLinks.map(({ href, label }) => (
          <a key={href} href={href} className={active === href ? "nav-link active" : "nav-link"}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Header;
