import React from 'react';
import { SocialLink } from '../types';

interface NavLink {
  href: string;
  label: string;
}

interface FooterProps {
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navLinks, socialLinks, handleNavClick }) => {
  return (
    <footer className="bg-black/50 text-zinc-300 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="lg:col-span-2">
            <img src="./images/logo.png" alt="Armory Consulting" className="h-16 mb-4" />
            <p className="text-zinc-400 max-w-sm">
              Capacitação, treinamento e consultoria em armamento e tiro. Do básico ao avançado, com expertise e profissionalismo.
            </p>
          </div>
          
          {/* Sitemap */}
          <div>
            <h3 className="font-fira text-lg font-bold uppercase text-white tracking-wider">Sitemap</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map(link => (
                <li key={`footer-${link.href}`}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="hover:text-orange-500 transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="font-fira text-lg font-bold uppercase text-white tracking-wider">Siga-nos</h3>
            <ul className="mt-4 space-y-3">
              {socialLinks.map(social => (
                <li key={social.name}>
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-orange-500 transition-colors duration-300">
                    <social.Icon className="w-6 h-6" />
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
      <div className="bg-black/70 py-4 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-zinc-500">
          <p className="text-sm">
            © {new Date().getFullYear()} Armory Consulting. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-1">
            Desenvolvido por GB - Tecnologia
          </p>
          <p className="text-xs mt-1">
            Contato: (41) 98737-2059
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;