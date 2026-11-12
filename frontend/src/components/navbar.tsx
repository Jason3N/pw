import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const sections = [
  { id: "about-me", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -60% 0px" },
    );
    ["home", ...sections.map((section) => section.id)].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <div className="site-container nav-layout">
        <a className="wordmark" href="#home" aria-label="Jason Nguyen, home" onClick={() => setIsOpen(false)}>
          jason nguyen
        </a>
        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
        <nav id="primary-navigation" aria-label="Main navigation" className={isOpen ? "site-nav is-open" : "site-nav"}>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={activeSection === section.id ? "location" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {section.label}
            </a>
          ))}
          <a className="nav-github" href="https://github.com/Jason3N" target="_blank" rel="noreferrer">
            GitHub <FiArrowUpRight aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
