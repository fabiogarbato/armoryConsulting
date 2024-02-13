import './estrutura.css';
import {Container, Row, Col, Image, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef } from 'react';
import WithAnimation from './WithAnimation';
import { FaWhatsapp, FaArrowUp, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import imagem1 from './images/fabricantes/BERETTA.png';
import imagem2 from './images/fabricantes/Bersa.png';
import imagem3 from './images/fabricantes/boito.png';
import imagem4 from './images/fabricantes/Caracal.png';
import imagem5 from './images/fabricantes/Colt.png';
import imagem6 from './images/fabricantes/FN.jpg';
import imagem7 from './images/fabricantes/Girsan.jpg';
import imagem8 from './images/fabricantes/Glock.jpg';
import imagem9 from './images/fabricantes/glock-old.jpg';
import imagem10 from './images/fabricantes/GRAND-POWER-Logo-2012.jpg';
import imagem11 from './images/fabricantes/HATSAN.jpg';
import imagem12 from './images/fabricantes/HECKER & KOCH.png';
import imagem13 from './images/fabricantes/Imbel.jpg';
import imagem15 from './images/fabricantes/Mossberg.jpg';
import imagem16 from './images/fabricantes/REMINGTON.jpg';
import imagem17 from './images/fabricantes/RUGER.png';
import imagem18 from './images/fabricantes/SAVAGE.png';
import imagem19 from './images/fabricantes/SIG-logo.png';
import imagem20 from './images/fabricantes/SPRINGFIELD.jpeg';
import imagem21 from './images/fabricantes/SW.png';
import imagem22 from './images/fabricantes/Taurus.jpg';
import EstruturaFoto from './images/estrutura.jpeg';
import Humanoide1 from './images/humanoide1.jpeg';
import Humanoide2 from './images/humanoide2.jpeg';
import Humanoide3 from './images/humanoide3.jpeg';
import Humanoide4 from './images/humanoide4.jpeg';

const WhatsAppButton = ({ phoneNumber }) => {
  const whatsappLink = `https://wa.me/55${phoneNumber}?text=Adorei%20seu%20artigo`;
  return (
    <a href={whatsappLink} className="whatsapp-float" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp />
    </a>
  );
};

const BackToHome = () => {
  const navigate = useNavigate();

  return (
    <div className="float-button" onClick={() => navigate('/')}>
      <FaArrowLeft />
    </div>
  );
};

function Estrutura() {
  const imagens = [
    imagem1, imagem2, imagem3, imagem4, imagem5, imagem6,
    imagem7, imagem8, imagem9, imagem10, imagem11, imagem12,
    imagem13, imagem15, imagem16, imagem17, imagem18, imagem19,
    imagem20, imagem21, imagem22
  ];
  
  return (
    <Container fluid style={{ backgroundColor: '#2b2928', minHeight: '100vh' }}>
      <WithAnimation>
        <Container>
          <Row className='h-100 d-flex justify-content-center align-items-center'>
              <WithAnimation>
                <Col className='d-flex justify-content-center align-items-center'>
                  <span className='text-first'>Nossa Estrutura</span>
                </Col>
              </WithAnimation>
          </Row>
        </Container>
      </WithAnimation>
      <Container id='sobre' className='background-space'></Container>
      <Container className='background-structure'>
        <Row>
          <Col xs={12} md={6}>
            <WithAnimation>
              <Image
                className="d-block zoom-hover"
                src={Humanoide1}
                alt="Primeiro slide"
                style={{
                maxWidth: '100%',     
                maxHeight: '70vh',     
                objectFit: 'contain', 
                objectPosition: 'center center'
                }}
              />
            </WithAnimation>
          </Col>
          <Col xs={12} md={6} className='text-container'>
            <WithAnimation>
              <span className='text-before' style={{ color: '#ff7300' }}>Realismo</span>
            </WithAnimation>
          </Col>
        </Row>
        <Container id='sobre' className='background-space'></Container>              
        <Row>
          <Col xs={12} md={{ span: 6, order: 2 }}>
            <WithAnimation>
              <Image
                className="d-block zoom-hover"
                src={Humanoide1}
                alt="Primeiro slide"
                style={{
                maxWidth: '100%',     
                maxHeight: '70vh',     
                objectFit: 'contain', 
                objectPosition: 'center center'
                }}
              />
            </WithAnimation>
          </Col>
          <Col xs={12} md={{ span: 6, order: 1 }}>
            <WithAnimation>
              <span className='text-before' style={{ color: '#ff7300' }}>Visibilidade mais assertiva</span>
            </WithAnimation>
          </Col>            
        </Row>      
        <Container id='sobre' className='background-space'></Container>
        <Row>
          <Col xs={12} md={6}>
            <WithAnimation>
              <Image
                className="d-block zoom-hover"
                src={Humanoide1}
                alt="Primeiro slide"
                style={{
                maxWidth: '100%',     
                maxHeight: '70vh',     
                objectFit: 'contain', 
                objectPosition: 'center center'
                }}
              />
            </WithAnimation>
          </Col>
          <Col xs={12} md={6} className='text-container'>
            <WithAnimation>
              <span className='text-before' style={{ color: '#ff7300' }}>Noção de profundidade</span>
            </WithAnimation>
          </Col>
        </Row> 
        <Container id='sobre' className='background-space'></Container>   
        <Row>
          <Col xs={12} md={{ span: 6, order: 2 }}>
            <WithAnimation>
              <Image
                className="d-block zoom-hover"
                src={Humanoide1}
                alt="Primeiro slide"
                style={{
                maxWidth: '100%',     
                maxHeight: '70vh',     
                objectFit: 'contain', 
                objectPosition: 'center center'
                }}
              />
            </WithAnimation>
          </Col>
          <Col xs={12} md={{ span: 6, order: 1 }}>
            <WithAnimation>
              <span className='text-before' style={{ color: '#ff7300' }}>Melhor enquadramento nas áreas predefinido</span>
            </WithAnimation>
          </Col>            
        </Row>   
        <Container id='sobre' className='background-space'></Container>                  
        <Row>
          <Col xs={12} md={6}>
            <WithAnimation>
              <Image
                className="d-block zoom-hover"
                src={Humanoide1}
                alt="Primeiro slide"
                style={{
                maxWidth: '100%',     
                maxHeight: '70vh',     
                objectFit: 'contain', 
                objectPosition: 'center center'
                }}
              />
            </WithAnimation>
          </Col>
          <Col xs={12} md={6} className='text-container'>
            <WithAnimation>
              <span className='text-before' style={{ color: '#ff7300' }}>Visualização mais ampla na cadência de tiro</span>
            </WithAnimation>
          </Col>
        </Row> 
      </Container>
      <Container id='sobre' className='background-space'></Container>
      <WithAnimation>
            <Container id='curso' className='text-first background-cardapio' style={{ color: '#ff7300' }}>Fabricantes</Container>
        </WithAnimation>
      <Container className='background-carousel'>
        <Carousel>
          {Array.from({ length: Math.ceil(imagens.length / 3) }, (_, index) => (
            <Carousel.Item key={index}>
              <Row>
                {imagens.slice(index * 3, index * 3 + 3).map((imagem, idx) => (
                  <Col key={idx} xs={12} md={4}>
                    <img
                      className="d-block w-100 carousel-image"
                      src={imagem}
                      alt={`Slide ${index}`}
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
      <Container id='sobre' className='background-space'></Container>
      <footer className="bg-black text-light py-3">
          <Container fluid>
              <p className="text-center mb-0">© GB - Tecnologia - {new Date().getFullYear()}</p>
          </Container>
      </footer>
      <WhatsAppButton phoneNumber="41987372059"/>
      <BackToHome />
    </Container>
  );
}

export default Estrutura;