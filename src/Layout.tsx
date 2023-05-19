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
          <Col sm={3} className="bg-light">
            {/* Left Sidebar */}
            {/* Add your left sidebar content here */}
          </Col>
          <Col sm={9}>
            {/* Main Content */}
            <div style={{ marginTop: '70px' }}>{children}</div>
            {/* Add any footer or other common components here */}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
