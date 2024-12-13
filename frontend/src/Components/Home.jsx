import React from "react";
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
  Image,
  Row,
} from "react-bootstrap";
import defaultImage from "./assets/img/default-img.png";
import myImg from "./assets/img/mukesh.jpeg";

const Home = () => {
  return (
    <div className="hero-banner py-3" id="home">
      <Container>
        <Row>
          <Col xs={12} md={12} className="py-3">
            <Card className="left-hero border-none">
              <CardHeader> 
                <CardText as='h5'>Hi there!</CardText>
                <CardText as='h2'>I'm Mukesh Payyavula</CardText>
              </CardHeader>
              <CardBody>
                <CardTitle as="h1">Creative Web</CardTitle>
                <CardTitle as="h1" className="d-block text-design" data-text="Designer/Developer">Designer/Developer</CardTitle>
                <CardText className="py-3">Proficient in both front-end and back-end technologies, I bring a track record of successfully delivering visually appealing, user-friendly websites and applications. My expertise extends to responsive design, performance optimization, and cross-browser compatibility, ensuring seamless functionality across all platforms.</CardText>
              </CardBody>
            </Card>
          </Col>
          {/* <Col xs={12} md={5} className="py-3">
            <Image src={myImg} alt="gokul-image" fluid rounded />
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
