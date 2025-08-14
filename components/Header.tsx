
import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './icons';

interface NavLink {
  href: string;
  label: string;
}

interface HeaderProps {
  navLinks: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Active section logic
      let currentSection = '';
      const sectionElements = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(el => el);

      for (const section of sectionElements) {
        if (section) {
          const sectionTop = section.offsetTop;
          // 120px offset to account for header height and give some buffer
          if (window.scrollY >= sectionTop - 120) {
            currentSection = section.id;
          }
        }
      }
      
      // Check if user has scrolled to the very bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        // The last nav link is 'contato'
        currentSection = navLinks[navLinks.length - 1].href.substring(1);
      } else if (!currentSection && window.scrollY < 200) {
         // Default to 'inicio' if at the top
        currentSection = 'inicio';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call on mount to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 96; // h-24 = 6rem = 96px
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      if (isOpen) {
        setIsOpen(false);
      }
    }
  };
  
  const getNavLinkClasses = (href: string) => {
    const isActive = activeSection === href.substring(1);
    const baseClasses = "font-fira text-sm font-bold uppercase tracking-wider transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-orange-500 after:transition-transform after:duration-300";
    if (isActive) {
      return `${baseClasses} text-orange-500 after:scale-x-100`;
    }
    return `${baseClasses} text-zinc-300 hover:text-orange-500 after:scale-x-0 after:origin-left hover:after:scale-x-100`;
  };

  const getMobileNavLinkClasses = (href: string) => {
    const isActive = activeSection === href.substring(1);
    const baseClasses = "font-fira text-lg font-bold uppercase tracking-wider block px-3 py-4 rounded-md text-center transition-colors duration-300";
     if (isActive) {
      return `${baseClasses} text-orange-500 bg-orange-500/10`;
    }
    return `${baseClasses} text-zinc-200 hover:text-orange-500`;
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-900/80 backdrop-blur-lg shadow-2xl shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="flex-shrink-0">
            <img className="h-16 w-auto transition-transform duration-300 hover:scale-105" src="./images/logo.png" alt="Armory Consulting Logo" />
          </a>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={getNavLinkClasses(link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-orange-500 hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-zinc-900/95 backdrop-blur-sm border-t border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={getMobileNavLinkClasses(link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
