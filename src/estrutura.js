import './estrutura.css';
import React, { useRef } from 'react';

function Estrutura() {

  return (
    <Container fluid style={{ backgroundColor: '#2b2928', minHeight: '100vh' }}>
        <footer className="bg-black text-light py-3">
            <Container fluid>
                <p className="text-center mb-0">© GB - Tecnologia - {new Date().getFullYear()}</p>
            </Container>
        </footer>
        <WhatsAppButton phoneNumber="41987372059"/>
    </Container>
  );
}

export default Estrutura;