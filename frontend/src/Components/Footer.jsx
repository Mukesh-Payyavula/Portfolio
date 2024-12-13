import React, { useEffect, useState } from 'react';
import { Card, CardFooter, Col, Container, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {

  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    // Update the current year on component mount
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div id='footer' className="footer-bg">
      <Card className='border-none text-center'>
        <CardFooter className='py-5'>
          <Container>
            <Row>
              <Col md={5} className="mb-4 mb-md-0">
                <div className="footer-info">
                  <p>Made with ❤️ by Mukesh Payyavula</p>
                  <p>Portfolio | Web Developer | Passionate Learner</p>
                </div>
              </Col>
              <Col md={5}>
              <div>
                  <a href="#about" className="footer-link">About Me</a> | 
                  <a href="#contact" className="footer-link"> Contact</a> |
                  <a href="#projects" className="footer-link"> Projects</a> 
                </div>
                </Col>
              <Col md={2}>
                <ListGroup as="ul" className="social-links">
                  <ListGroupItem as="li" className="list-inline-item">
                    <a href="https://www.linkedin.com/in/payyavula-mukesh/" target="_blank" rel="noopener noreferrer">
                      <FiLinkedin size={30} className="social-icon" />
                    </a>
                  </ListGroupItem>
                  <ListGroupItem as="li" className="list-inline-item">
                    <a href="https://github.com/Mukesh-Payyavula" target="_blank" rel="noopener noreferrer">
                      <FiGithub size={30} className="social-icon" />
                    </a>
                  </ListGroupItem>
                  <ListGroupItem as="li" className="list-inline-item">
                    <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                      <FiTwitter size={30} className="social-icon" />
                    </a>
                  </ListGroupItem>
                  <ListGroupItem as="li" className="list-inline-item">
                    <a href="https://instagram.com/mukesh_payyavula" target="_blank" rel="noopener noreferrer">
                      <FiInstagram size={30} className="social-icon" />
                    </a>
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
            
            <p className="footer-text">Copyright © {currentYear}. All rights reserved.</p>
          </Container>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Footer;
