import './index.css';
import './tabela.css';
import {Container, Row, Col, Image, Table, Button}  from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import logo from './images/logo.png';
import OBelico from './images/Obelico.png';
import Cabana from './images/logo-cabana.png';
import Face from './images/face.png';
import Insta from './images/insta.png';
import VideoInstitucional from './video/institucional_video.mp4';
import WithAnimation from './WithAnimation';

const WhatsAppButton = ({ phoneNumber }) => {
    const whatsappLink = `https://wa.me/55${phoneNumber}?text=Adorei%20seu%20artigo`;
    return (
      <a href={whatsappLink} className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    );
  };

const ScrollToButton = ({ targetId }) => {
    return (
        <a href={`#${targetId}`} className="float-button">
            <FaArrowUp />
        </a>
    );
};

const App = () => {  

  return (
    <Container fluid style={{ backgroundColor: '#2b2928', minHeight: '100vh' }}>
        <Navbar id='inicio' bg="blue" expand="lg">
            <Navbar.Brand>
                <Image src={logo} alt="Logo" style={{ maxWidth: '15vh', marginRight: '10px', marginLeft: '60px'}} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#curso" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '40px', color: '#ff7300', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic'}}>  Cursos  </Nav.Link>
                    <Nav.Link href="#sobre" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '40px', color: '#ff7300', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic' }}>Sobre Nós</Nav.Link>
                    <Nav.Link href="#contato" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '40px', color: '#ff7300', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic' }}>Contato</Nav.Link>
                    <Nav.Link href="#localizacao" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '40px', color: '#ff7300', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic' }}>Parceria</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Container className='background-space'></Container>
        <WithAnimation>
            <Container id='curso' className='text-first background-cardapio' style={{ color: '#ff7300' }}>Nossos Cursos</Container>
        </WithAnimation>
        <WithAnimation>
            <Container className="mt-3">
                <div className="table-responsive">
                    <Table className="custom-table">
                        <thead>
                            <tr>
                                <th>Nível</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="nivel-cell">Básico</td>
                                <td className="description-cell">Ideal para iniciantes acima de 18 anos, com baixa ou nenhuma experiência com armas de fogo. Optando por esporte ou defesa pessoal.</td>
                            </tr>
                            <tr>
                                <td className="nivel-cell">Intermediário</td>
                                <td className="description-cell">Para atiradores que já possuem um nível de conhecimento elevado de armas curtas. Querendo aprimorar seu aprendizado no emprego de armas portáteis.</td>
                            </tr>
                            <tr>
                                <td className="nivel-cell">Avançado</td>
                                <td className="description-cell">Treinamento tático para civil ou forças armadas. Abrangendo destreza, disciplina e técnicas avançadas de armas semi-automáticas e de repetição.</td>
                            </tr>
                            <tr>
                                <td className="nivel-cell">Consultoria</td>
                                <td className="description-cell">Iniciamos os trâmites no momento do aceite do cliente em adquirir uma arma de fogo, até sua conclusão final. Com seriedade e competência.</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
        </WithAnimation>
        <WithAnimation>
            <Container className='background-button d-flex justify-content-center align-items-center' style={{ minHeight: '10vh' }}>
                <Button
                    style={{
                        backgroundColor: '#ff8c00',
                        borderColor: 'black',
                        borderRadius: '50px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        fontSize: '20px', 
                        padding: '15px 30px', 
                        minWidth: '200px', 
                    }}
                className = 'rounded-pill custom-btn'
                >
                    Conheça Nossa Estrutura
                </Button>
            </Container>
        </WithAnimation>
        <Container id='sobre' className='background-space'></Container>
        <Container className='background-section2'>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <span className='text-first'>Sobre Nós</span>
                    </Col>
                </WithAnimation>
            </Row>
            <Container className='background-space'></Container>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'>
                        <span className='text-before' style={{ color: '#ff7300' }}>UMA BREVE APRESENTAÇÃO</span>
                    </Col>
                </WithAnimation>
            </Row>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'> 
                        <div className='d-flex align-items-start flex-grow-1'>
                            <p className='text-description' style={{ color: 'black' }}>
                                Somos uma empresa de consultoria e treinamento. Nosso principal foco é capacitar clientes com a nossa expertise. Compartilhar experiências e principalmente ensinar nossas técnicas do nível básico ao avançado.
                            </p>
                        </div>
                    </Col>
                </WithAnimation>
            </Row>
            <Container className='background-space'></Container>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'>
                        <span className='text-before' style={{ color: '#ff7300' }}>MUITA PESQUISA E PROFISSIONALISMO</span>
                    </Col>
                </WithAnimation>
            </Row>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'> 
                        <div className='d-flex align-items-start flex-grow-1'>
                            <p className='text-description' style={{ color: 'black' }}>
                                O cidadão brasileiro é prejudicado reiteradamente com informações desencontradas no quesito arma de fogo. Por esta razão, criamos um projeto inovador ao realizar um levantamento mais assertivo. Com uma base sólida de conhecimento, a Armory Consulting foi criada para promover consultoria, cursos e treinamento no crescente mercado nacional de armas.
                            </p>
                        </div>
                    </Col>
                </WithAnimation>
            </Row>
            <Container className='background-space'></Container>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'>
                        <span className='text-before' style={{ color: '#ff7300' }}>ONDE ATUAMOS E NOSSAS PARCERIAS</span>
                    </Col>
                </WithAnimation>
            </Row>
            <Row className='h-100 d-flex justify-content-center align-items-center'>
                <WithAnimation>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'> 
                        <div className='d-flex align-items-start flex-grow-1'>
                            <p className='text-description' style={{ color: 'black' }}>
                                Atualmente exercemos nossos cursos exclusivamente em clubes de tiro. Curitiba e região metropolitana. Firmamos parcerias com despachantes, instrutores, estandes e armeiros credenciados. Isso garante que o profissional contratado esteja em conformidade com as normas e exigências da Polícia Federal e do Exército. A parceria com as lojas de armas e materiais táticos, fornece um vasto acervo para apresentarmos aos nossos clientes, diversos tipos de armas nacionais e importadas.
                            </p>
                        </div>
                    </Col>
                </WithAnimation>
            </Row>
        </Container>
        <Container id='contato' className='background-space'></Container>
        <WithAnimation>
            <Container className='background-contact'>
                <Row className='h-100 d-flex justify-content-center align-items-center' /*style={{ backgroundColor: 'pink'}}*/>
                    <WithAnimation>
                        <Col className='d-flex justify-content-center align-items-center'>
                            <span className='text-first' style={{ color: '#ff7300' }}>Redes Sociais</span>
                        </Col>
                    </WithAnimation>
                </Row>
                <Row>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center flex-column' style={{ /*backgroundColor: 'green',*/ height: '40vh'}}>
                        <a href="https://www.facebook.com/armoryconsulting/" target="_blank" rel="noopener noreferrer">
                            <Image
                                className="d-block zoom-hover"
                                src={Face}
                                alt="Primeiro slide"
                                style={{
                                maxWidth: '100%',     
                                maxHeight: '70vh',     
                                objectFit: 'contain', 
                                objectPosition: 'center center'
                                }}
                            />
                        </a>
                        <p className='text-before' style={{ color: '#ff7300' }}>
                            Armory Consulting
                        </p>
                    </Col>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center flex-column' style={{ /*backgroundColor: 'orange',*/ height: '40vh'}}>
                        <a href="https://www.instagram.com/armoryconsulting/" target="_blank" rel="noopener noreferrer">
                            <Image
                                className="d-block zoom-hover"
                                src={Insta}
                                alt="Primeiro slide"
                                style={{
                                    maxWidth: '100%',     
                                    maxHeight: '70vh',     
                                    objectFit: 'contain', 
                                    objectPosition: 'center center'
                                }}
                            />
                        </a>
                        <p className='text-before' style={{ color: '#ff7300' }}>
                            @armoryconsulting
                        </p>
                    </Col>
                </Row>
            </Container>
        </WithAnimation>
        <Container className='background-space'></Container>
        <WithAnimation>
            <Container className='background-video'>
                <Row>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center flex-column'>
                        <video width="100%" height="auto" controls>
                            <source src={VideoInstitucional} type="video/mp4" />
                            Seu navegador não suporta vídeos MP4.
                        </video>
                    </Col>
                </Row>   
            </Container>
        </WithAnimation>
        <Container id='localizacao' className='background-space'></Container>
        <WithAnimation>
            <Container className='background-contact'>
                <Row className='h-100 d-flex justify-content-center align-items-center' /*style={{ backgroundColor: 'pink'}}*/>
                    <WithAnimation>
                        <Col className='d-flex justify-content-center align-items-center'>
                            <span className='text-first' style={{ color: '#ff7300' }}>Parceiros</span>
                        </Col>
                    </WithAnimation>
                </Row>
                <Row>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center flex-column' style={{ /*backgroundColor: 'green',*/ height: '40vh'}}>
                        <a href="https://obelico.com.br" target="_blank" rel="noopener noreferrer">
                            <Image
                                className="d-block zoom-hover"
                                src={OBelico}
                                alt="Primeiro slide"
                                style={{
                                maxWidth: '100%',     
                                maxHeight: '70vh',     
                                objectFit: 'contain', 
                                objectPosition: 'center center'
                                }}
                            />
                        </a>
                        <p className='text-before' style={{ color: '#ff7300' }}>
                            OBelico
                        </p>
                    </Col>
                    <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center flex-column' style={{ /*backgroundColor: 'orange',*/ height: '40vh'}}>
                        <a href="https://www.cabanadasarmas.com.br" target="_blank" rel="noopener noreferrer">
                            <Image
                                className="d-block zoom-hover"
                                src={Cabana}
                                alt="Primeiro slide"
                                style={{
                                    maxWidth: '100%',     
                                    maxHeight: '70vh',     
                                    objectFit: 'contain', 
                                    objectPosition: 'center center'
                                }}
                            />
                        </a>
                        <p className='text-before' style={{ color: '#ff7300' }}>
                            Cabana Das Armas
                        </p>
                    </Col>
                </Row>
            </Container>
        </WithAnimation>
        <Container className='background-space'></Container>
        <footer className="bg-black text-light py-3">
            <Container fluid>
                <p className="text-center mb-0">© GB - Tecnologia - {new Date().getFullYear()}</p>
            </Container>
        </footer>
        <ScrollToButton targetId="inicio"/>
        <WhatsAppButton phoneNumber="41987372059"/>
    </Container>
  );
}

export default App;