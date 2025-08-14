
import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  const [ref, isVisible] = useOnScreen<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      id={id}
      className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
