import './index.css';
import './tabela.css';
import {Container, Carousel, Row, Col, Image, Table, Button}  from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import logo from './images/logo.png';
import Arma2 from './images/arma2.jpg';
// import Sanduba2 from './images/sanduba2.jpg';
// import Tacos from './images/tacos.jpg';
// import Hb1 from './images/hb1.jpg';
// import Hb2 from './images/hb2.jpg';
// import Hb3 from './images/hb3.jpg';
import Face from './images/face.png';
import Insta from './images/insta.png';
import WithAnimation from './WithAnimation';

const WhatsAppButton = ({ phoneNumber }) => {
    const whatsappLink = `https://wa.me/55${phoneNumber}?text=Adorei%20seu%20artigo`;
    return (
      <a href={whatsappLink} className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    );
  };

const App = () => {  

  return (
    <Container fluid style={{ backgroundColor: '#2b2928', minHeight: '100vh' }}>
        <Navbar bg="blue" expand="lg">
            <Navbar.Brand>
                <Image src={logo} alt="Logo" style={{ maxWidth: '15vh', marginRight: '10px', marginLeft: '60px'}} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#sobre" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '40px', color: '#ff7300', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic'}}>  Sobre Nós  </Nav.Link>
                    <Nav.Link href="#cardapio" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '40px', color: '#ff7300', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic' }}>Cursos</Nav.Link>
                    <Nav.Link href="#contato" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '40px', color: '#ff7300', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic' }}>Contato</Nav.Link>
                    <Nav.Link href="#localizacao" className="nav-link-hover" style={{ margin: '0 20px', fontSize: '40px', color: '#ff7300', fontFamily: 'Fira Sans Condensed , sans-serif', fontWeight: 900, fontStyle: 'italic' }}>Parceiria</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Container className='background-space'></Container>
        <Container className='background-section2'>
            <Row className="mb-3">
                <Col xs={12} md={4} style={{ padding: 0, backgroundColor: 'purple', height: '40vh'}}>
                    <Image
                        className="d-block move"
                        src={Arma2}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '40vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />
                </Col>
                <Col xs={12} md={4} style={{ padding: 0, backgroundColor: 'white', height: '40vh'}}>
                    <Image
                        className="d-block move"
                        src={Arma2}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '40vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />
                </Col>
                <Col xs={12} md={4} style={{ padding: 0, backgroundColor: 'grey', height: '40vh'}}>
                    <Image
                        className="d-block move"
                        src={Arma2}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '40vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4} style={{ padding: 0, backgroundColor: 'pink', height: '40vh'}}>
                    <Image
                        className="d-block move"
                        src={Arma2}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '40vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />           
                </Col>
                <Col xs={12} md={4} style={{ padding: 0, backgroundColor: 'blue', height: '40vh'}}>
                    <Image
                        className="d-block move"
                        src={Arma2}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '40vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />
                </Col>
                <Col xs={12} md={4} style={{ padding: 0, backgroundColor: 'orange', height: '40vh'}}>
                    <Image
                        className="d-block move"
                        src={Arma2}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '40vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />
                </Col>
            </Row>
        </Container> 
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
        <Container id='cardapio' className='background-space'></Container>
        <Container id='cardapio' className='text-first background-cardapio' style={{ color: '#ff7300' }}>Nossos Cursos</Container>
        <Container className="mt-3">
            <div className="table-responsive">
                <Table className="custom-table" data-aos='fade-right'>
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
      data-aos='fade-up'
      >
        Conheça Nossa Estrutura
      </Button>
    </Container>
        {/* <Container className='background-section2'>
            <Row className="mb-3">
                <Col xs={12} md={4} style={{ padding: 0, backgroundColor: 'purple', height: '40vh'}}>
                    <Image
                        className="d-block move"
                        src={Sanduba2}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '40vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />
                </Col>
                <Col xs={12} md={4} style={{ padding: 0, backgroundColor: 'white', height: '40vh'}}>
                    <Image
                        className="d-block move"
                        src={Sanduba}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '40vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />
                </Col>
                <Col xs={12} md={4} style={{ padding: 0, backgroundColor: 'grey', height: '40vh'}}>
                    <Image
                        className="d-block move"
                        src={Hb1}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '40vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4} style={{ padding: 0, backgroundColor: 'pink', height: '40vh'}}>
                    <Image
                        className="d-block move"
                        src={Hb2}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '40vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />           
                </Col>
                <Col xs={12} md={4} style={{ padding: 0, backgroundColor: 'blue', height: '40vh'}}>
                    <Image
                        className="d-block move"
                        src={Hb3}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '40vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />
                </Col>
                <Col xs={12} md={4} style={{ padding: 0, backgroundColor: 'orange', height: '40vh'}}>
                    <Image
                        className="d-block move"
                        src={Sanduba}
                        alt="Primeiro slide"
                        style={{
                        width: '100%',        
                        height: '40vh',       
                        objectFit: 'cover', 
                        objectPosition: 'center center' 
                        }}
                    />
                </Col>
            </Row>
        </Container> */}
        <Container id='contato' className='background-space'></Container>
        <Container className='background-contact'>
            <Row className='h-100 d-flex justify-content-center align-items-center' /*style={{ backgroundColor: 'pink'}}*/>
                <Col className='d-flex justify-content-center align-items-center'>
                    <span className='text-first' style={{ color: '#f5ddba' }}>Redes Sociais</span>
                </Col>
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
                    <p className='text-before' style={{ color: '#f5ddba' }}>
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
                    <p className='text-before' style={{ color: '#f5ddba' }}>
                        @armoryconsulting
                    </p>
                </Col>
            </Row>
        </Container>
        <Container id='localizacao' className='background-space'></Container>
        <Container id='cardapio' className='text-first background-cardapio' style={{ color: '#f5ddba' }}>Parceiros</Container>
        <Container className='background-maps'>
            <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6634855092907!2d-46.5690953239996!3d-23.544602878811403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5eeb62a33cfd%3A0x4bde5f170256d2d2!2sR.%20Serra%20de%20Japi%2C%20445%20-%20Vila%20Gomes%20Cardim%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1705361038240!5m2!1spt-BR!2sus"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            >
            </iframe> 
        </Container>
        <Container className='background-space'></Container>
        <footer className="bg-dark text-light py-3">
            <Container fluid>
                <p className="text-center mb-0">© GB - Tecnologia - {new Date().getFullYear()}</p>
            </Container>
        </footer>
        <WhatsAppButton phoneNumber="41987372059"/>
    </Container>
  );
}

export default App;