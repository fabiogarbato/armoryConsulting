
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WhatsAppIcon, ArrowUpIcon, ArrowLeftIcon } from './icons';

interface FloatingButtonsProps {
  showBack?: boolean;
}

const FloatingButtons: React.FC<FloatingButtonsProps> = ({ showBack = false }) => {
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    navigate('/');
  };

  const phoneNumber = '41997388481';
  const whatsappLink = `https://wa.me/55${phoneNumber}?text=Vim%20atrav%C3%A9s%20do%20site%2C%20e%20gostaria%20de%20conhecer%20mais%20sobre%20os%20cursos`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 hover:shadow-green-500/50"
        aria-label="Contact via WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8" />
      </a>
      <button
        onClick={showBack ? handleBack : handleScrollToTop}
        className="w-16 h-16 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-110 hover:shadow-orange-600/50"
        aria-label={showBack ? 'Go Back' : 'Scroll to Top'}
      >
        {showBack ? <ArrowLeftIcon className="w-8 h-8" /> : <ArrowUpIcon className="w-8 h-8" />}
      </button>
    </div>
  );
};

export default FloatingButtons;
