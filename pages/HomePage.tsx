import React from 'react';
import { Course, Partner, SocialLink, StructureItem } from '../types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import Section from '../components/Section';
import { FacebookIcon, InstagramIcon } from '../components/icons';
import { useOnScreen } from '../hooks/useOnScreen';

// Helper component for individual scroll animations
const AnimatedDiv: React.FC<{ children: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ children, className = '', style }) => {
  const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.15, triggerOnce: false });
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

const navLinks = [
  { href: '#cursos', label: 'Cursos' },
  { href: '#estrutura', label: 'Estrutura' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#parceiros', label: 'Parcerias' },
  { href: '#contato', label: 'Contato' },
];

const courses: Course[] = [
  { level: 'Básico', description: 'Ideal para iniciantes acima de 18 anos, com baixa ou nenhuma experiência com armas de fogo. Optando por esporte ou defesa pessoal.' },
  { level: 'Intermediário', description: 'Para atiradores que já possuem um nível de conhecimento elevado de armas curtas. Querendo aprimorar seu aprendizado no emprego de armas portáteis.' },
  { level: 'Avançado', description: 'Treinamento tático para civil ou forças armadas. Abrangendo destreza, disciplina e técnicas avançadas de armas semi-automáticas e de repetição.' },
  { level: 'Consultoria', description: 'Iniciamos os trâmites no momento do aceite do cliente em adquirir uma arma de fogo, até sua conclusão final. Com seriedade e competência.' },
];

const socialLinks: SocialLink[] = [
  { name: 'Facebook', url: 'https://www.facebook.com/armoryconsulting/', handle: 'Armory Consulting', Icon: FacebookIcon },
  { name: 'Instagram', url: 'https://www.instagram.com/armoryconsulting/', handle: '@armoryconsulting', Icon: InstagramIcon },
];

const partners: Partner[] = [
  { name: 'OBelico', logo: '/images/Obelico.png', url: 'https://obelico.com.br' },
  { name: 'Cabana Das Armas', logo: '/images/logo-cabana.png', url: 'https://www.cabanadasarmas.com.br' },
];

const structureItems: StructureItem[] = [
  { image: '/images/humanoide1.jpeg', title: 'Realismo', description: 'Nossos alvos humanoides oferecem um feedback visual imediato, simulando cenários reais para um treinamento de defesa mais instintivo e eficaz.' },
  { image: '/images/humanoide2.jpeg', title: 'Visibilidade Assertiva', description: 'A forma tridimensional permite uma melhor percepção de zonas vitais e não vitais, aprimorando a precisão e o discernimento do atirador sob pressão.' },
  { image: '/images/humanoide3.jpeg', title: 'Noção de Profundidade', description: 'Treinar com alvos 3D desenvolve a capacidade de avaliar distâncias e ângulos de tiro complexos, uma habilidade crucial que alvos de papel não podem oferecer.' },
  { image: '/images/humanoide4.jpeg', title: 'Enquadramento Superior', description: 'A silhueta realista força o atirador a praticar o enquadramento correto da visada e o alinhamento corporal, fundamentais para a memória muscular e agilidade.' },
];

const manufacturers = [
  '/images/fabricantes/BERETTA.png', '/images/fabricantes/Bersa.png', '/images/fabricantes/boito.png',
  '/images/fabricantes/Caracal.png', '/images/fabricantes/Colt.png', '/images/fabricantes/FN.jpg',
  '/images/fabricantes/Girsan.jpg', '/images/fabricantes/Glock.jpg', '/images/fabricantes/glock-old.jpg',
  '/images/fabricantes/GRAND-POWER-Logo-2012.jpg', '/images/fabricantes/HATSAN.jpg', '/images/fabricantes/HECKER & KOCH.png',
  '/images/fabricantes/Imbel.jpg', '/images/fabricantes/Mossberg.jpg', '/images/fabricantes/REMINGTON.jpg',
  '/images/fabricantes/RUGER.png', '/images/fabricantes/SAVAGE.png', '/images/fabricantes/SIG-logo.png',
  '/images/fabricantes/SPRINGFIELD.jpeg', '/images/fabricantes/SW.png', '/images/fabricantes/Taurus.jpg'
];

const HomePage: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href?: string) => {
    e.preventDefault();
    const targetHref = href || e.currentTarget.getAttribute('href');
    if (!targetHref) return;

    const targetId = targetHref.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 96; // h-24 from Header.tsx
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-zinc-900" id="inicio">
      <Header navLinks={navLinks} />

      <main>
        {/* Hero Section */}
        <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
            poster="https://picsum.photos/1920/1080?grayscale&blur=2"
          >
            <source src="/video/institucional_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 px-4 flex flex-col items-center">
            <AnimatedDiv>
              <h1 className="font-fira text-6xl md:text-8xl lg:text-9xl font-black italic text-white uppercase tracking-wider drop-shadow-2xl">
                Armory <span className="text-orange-600">Consulting</span>
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-zinc-300 drop-shadow-lg">
                Capacitação, treinamento e consultoria em armamento e tiro. Do básico ao avançado, com expertise e profissionalismo.
              </p>
              <a href="#cursos" onClick={handleSmoothScroll} className="mt-10 inline-block border-2 border-orange-600 text-orange-500 font-bold py-3 px-10 rounded-full text-lg uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                Explore Nossos Cursos
              </a>
            </AnimatedDiv>
          </div>
        </div>

        {/* Courses Section */}
        <Section id="cursos" className="bg-black/20">
          <h2 className="font-fira text-4xl md:text-5xl font-black italic text-center text-orange-600">Nossos Cursos</h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <AnimatedDiv key={course.level} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="bg-zinc-800/50 p-8 rounded-lg border border-zinc-700/50 transition-all duration-300 hover:border-orange-600/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 h-full">
                  <h3 className="font-fira text-2xl font-bold text-orange-500">{course.level}</h3>
                  <p className="mt-4 text-zinc-300">{course.description}</p>
                </div>
              </AnimatedDiv>
            ))}
          </div>
          <div className="text-center mt-16">
            <a href="#estrutura" onClick={handleSmoothScroll} className="inline-block bg-orange-600 text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-600/20">
              Conheça Nossa Estrutura
            </a>
          </div>
        </Section>

        {/* Structure Section */}
        <Section id="estrutura">
          <div className="text-center">
            <h2 className="font-fira text-4xl md:text-5xl font-black italic text-orange-600">Nossa Estrutura</h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-zinc-300">
              Utilizamos alvos humanoides para treinamento, proporcionando uma experiência mais realista e eficaz na avaliação de precisão, profundidade e enquadramento.
            </p>
          </div>
          <div className="mt-24 space-y-28">
            {structureItems.map((item, index) => (
              <AnimatedDiv key={item.title}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
                  <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-lg shadow-2xl object-cover w-full aspect-square border-4 border-zinc-800 transition-all duration-300 hover:border-orange-600/50 hover:scale-105"
                    />
                  </div>
                  <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} text-center lg:text-left`}>
                    <div className={`${index % 2 === 0 ? 'lg:pl-8 lg:border-l-4' : 'lg:pr-8 lg:text-right lg:border-r-4'} lg:border-orange-600`}>
                      <h3 className="font-fira text-4xl md:text-5xl font-black italic text-orange-600">{item.title}</h3>
                      {item.description && <p className="mt-6 text-lg text-zinc-300">{item.description}</p>}
                    </div>
                  </div>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </Section>

        {/* About Us Section */}
        <Section id="sobre" className="bg-black/20">
          <h2 className="font-fira text-4xl md:text-5xl font-black italic text-center text-orange-600">Sobre Nós</h2>
          <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
            <AnimatedDiv style={{ transitionDelay: '0ms' }}>
              <div className="group cursor-pointer bg-zinc-800/50 p-8 rounded-lg border border-zinc-700/50 h-full transition-all duration-300 hover:bg-zinc-800 hover:-translate-y-2 hover:border-orange-600/50 hover:shadow-2xl hover:shadow-black/30">
                <h3 className="font-fira text-2xl font-bold text-white uppercase transition-colors duration-300 group-hover:text-orange-500">Apresentação</h3>
                <p className="mt-4 text-lg text-zinc-300">
                  Somos uma empresa de consultoria e treinamento. Nosso principal foco é capacitar clientes com a nossa expertise, compartilhar experiências e ensinar nossas técnicas do nível básico ao avançado.
                </p>
              </div>
            </AnimatedDiv>
            <AnimatedDiv style={{ transitionDelay: '100ms' }}>
              <div className="group cursor-pointer bg-zinc-800/50 p-8 rounded-lg border border-zinc-700/50 h-full transition-all duration-300 hover:bg-zinc-800 hover:-translate-y-2 hover:border-orange-600/50 hover:shadow-2xl hover:shadow-black/30">
                <h3 className="font-fira text-2xl font-bold text-white uppercase transition-colors duration-300 group-hover:text-orange-500">Profissionalismo</h3>
                <p className="mt-4 text-lg text-zinc-300">
                  O cidadão brasileiro é prejudicado com informações desencontradas sobre armas de fogo. Por isso, criamos um projeto inovador para promover consultoria, cursos e treinamento no mercado nacional.
                </p>
              </div>
            </AnimatedDiv>
            <AnimatedDiv style={{ transitionDelay: '200ms' }}>
              <div className="group cursor-pointer bg-zinc-800/50 p-8 rounded-lg border border-zinc-700/50 h-full transition-all duration-300 hover:bg-zinc-800 hover:-translate-y-2 hover:border-orange-600/50 hover:shadow-2xl hover:shadow-black/30">
                <h3 className="font-fira text-2xl font-bold text-white uppercase transition-colors duration-300 group-hover:text-orange-500">Onde Atuamos</h3>
                <p className="mt-4 text-lg text-zinc-300">
                  Atuamos em clubes de tiro em Curitiba e região, com parcerias com despachantes, instrutores e armeiros credenciados, garantindo conformidade com a Polícia Federal e Exército.
                </p>
              </div>
            </AnimatedDiv>
          </div>
        </Section>

        {/* Partners Section */}
        <Section id="parceiros">
          <h2 className="font-fira text-4xl md:text-5xl font-black italic text-center text-orange-600">Parceiros e Acervo</h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-zinc-300">
            Trabalhamos com parceiros e fabricantes renomados para oferecer o melhor em armamento e equipamentos.
          </p>
          <div className="mt-16 flex justify-center items-center gap-12 md:gap-20 flex-wrap">
            {partners.map((partner, index) => (
              <AnimatedDiv key={partner.name} style={{ transitionDelay: `${index * 100}ms` }}>
                <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-110">
                  <img src={partner.logo} alt={partner.name} className="h-24 object-contain" />
                </a>
              </AnimatedDiv>
            ))}
          </div>
          <div className="mt-16 pt-10 border-t border-zinc-800">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 items-center">
              {manufacturers.map((logo, index) => (
                <AnimatedDiv key={index} style={{ transitionDelay: `${(index % 7) * 50}ms` }}>
                  <div className="flex justify-center items-center p-4 bg-zinc-800/50 rounded-lg h-28 border border-zinc-700/50 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:bg-zinc-800 hover:border-orange-600/50 transition-all duration-300 transform hover:scale-105">
                    <img src={logo} alt={`Fabricante ${index + 1}`} className="max-h-12 max-w-full object-contain" />
                  </div>
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </Section>

        {/* Social and Contact Section */}
        <Section id="contato" className="bg-black/20">
          <h2 className="font-fira text-4xl md:text-5xl font-black italic text-center text-orange-600">Redes Sociais</h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {socialLinks.map((social, index) => (
              <AnimatedDiv key={social.name} style={{ transitionDelay: `${index * 100}ms` }}>
                <a href={social.url} target="_blank" rel="noopener noreferrer" className="group block bg-zinc-800/50 p-8 rounded-lg text-center border border-zinc-700/50 transition-all duration-300 hover:border-orange-600/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-600/10 h-full">
                  <social.Icon className="h-16 w-16 mx-auto text-zinc-400 group-hover:text-orange-500 transition-colors duration-300" />
                  <h3 className="mt-6 font-fira text-2xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">{social.name}</h3>
                  <p className="mt-2 text-lg text-zinc-400">{social.handle}</p>
                </a>
              </AnimatedDiv>
            ))}
          </div>
        </Section>
      </main>

      <Footer navLinks={navLinks} socialLinks={socialLinks} handleNavClick={(e, href) => handleSmoothScroll(e, href)} />
      <FloatingButtons />
    </div>
  );
};

export default HomePage;