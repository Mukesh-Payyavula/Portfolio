import React, { useEffect } from "react";
import './Style.css';
import './Responsive.css';
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Duration of the animation
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Animation only happens once while scrolling
    });
  }, []);

  return (
    <>
      {/* Navbar component here */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        {/* Navbar contents */}
      </nav>

      {/* Hero Section */}
      <div className="hero-banner py-3" id="home">
        <Container>
          <Row>
            <Col xs={12} md={12} className="py-3">
              <Card className="left-hero border-none" data-aos="fade-up">
                <CardHeader> 
                  <CardText as='h5'>Hi there!</CardText>
                  <CardText as='h2'>I'm Mukesh Payyavula</CardText>
                </CardHeader>
                <CardBody>
                  <CardTitle as="h1">Creative Web</CardTitle>
                  <CardTitle as="h1" className="d-block text-design" data-text="Designer/Developer">Designer/Developer</CardTitle>
                  <CardText className="py-3">
                    Proficient in both front-end and back-end technologies, I bring a track record of successfully delivering visually appealing, user-friendly websites and applications. My expertise extends to responsive design, performance optimization, and cross-browser compatibility, ensuring seamless functionality across all platforms.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
