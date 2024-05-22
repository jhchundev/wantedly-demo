import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';


const Layout = ({ children }: {children: any} ) => {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Row>
            {/* Main Content */}
            <div style={{ marginTop: '70px' }}>{children}</div>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
