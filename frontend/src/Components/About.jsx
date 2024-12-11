import React from "react";
import aboutImg from "./assets/img/lightImg.jpeg";
import myImg from "./assets/img/mukesh.JPG";

import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
  CardText,
  Image,
  Button,
  CardTitle,
  ListGroup,
  ListGroupItem,
  ModalTitle,
  CardGroup,
} from "react-bootstrap";

import { FiGithub, FiLinkedin } from "react-icons/fi";

const About = () => {
  return (
    <div id="about" className="pb-5">
      <Container>
        <Row>
          {/* <Col xs={12} md={6} className="py-3">
            <Image src={aboutImg} alt="gokul-image" fluid rounded />
          </Col> */}
          <Col xs={12} md={6} className="py-3">
            <Image src={myImg} alt="mukesh" fluid rounded />
          </Col>

          <Col xs={12} md={6} className="py-3">
            <Card className="border-none">
              <CardHeader className="about-header" as="h3">
                Let's
                <br />
                Introduce about
                <br /> myself
              </CardHeader>
              <CardBody>
                <CardText as="p">
                  I'm Mukesh Payyavula, 26 years old. After completing my Bachelor's
                  Degree in B.Tech in 2019, I pursued self-learning to enhance my
                  skills in web development. Currently, I have 1 year of
                  valuable experience in the field, contributing to my
                  continuous growth in this dynamic industry.
                </CardText>
                <CardText as="h2">Personal Info</CardText>
                <Container>
                  <Row>
                    <Col xs={12} md={6} className="py-3">
                      <Card>
                        <CardBody className="p-4">
                          <CardTitle className="mb-4">Email</CardTitle>
                          <CardText
                            as="a"
                            href="mailto:payyavulamukesh@gmail.com"
                          >
                            payyavulamukesh@gmail.com
                          </CardText>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xs={12} md={6} className="py-3">
                      <Card>
                        <CardBody className="p-4">
                          <CardTitle className="mb-4">Phone</CardTitle>
                          <CardText>(+91) 9652931731</CardText>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xs={12} md={6} className="py-3">
                      <Card>
                        <CardBody className="p-4">
                          <CardTitle className="mb-4">Location</CardTitle>
                          <CardText>Hyderabad, Telangana</CardText>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xs={12} md={6} className="py-3">
                      <Card>
                        <CardBody className="p-4">
                          <CardTitle className="mb-0">Follow</CardTitle>
                          <ListGroup as="ul" className="social-icon" horizontal>
                            <ListGroupItem
                              action
                              href="https://www.linkedin.com/in/payyavula-mukesh/"
                              className="border-none"
                              target="blank"
                            >
                              <FiLinkedin />
                            </ListGroupItem>
                            <ListGroupItem
                              action
                              href="https://github.com/Mukesh-Payyavula"
                              className="border-none"
                              target="blank"
                            >
                              <FiGithub />
                            </ListGroupItem>
                          </ListGroup>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <CardGroup>
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader className="border-bottom-0">
                  <CardTitle className="about-header mb-0 border-bottom-0" as="h3">
                    Experience
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
            <Col xs={12} md={6} className="py-3">
              <Card>
                <CardBody className="exp-body">
                  <CardTitle as="h4">Web Developer</CardTitle>
                  <CardText as="p" className="mb-1">
                    TechnoTide Technologies
                  </CardText>
                  <CardText as="p">Sept 2024 - Present</CardText>

                  <CardTitle>Roles & Responsibilities</CardTitle>
                  <CardText as="li">
                    Developed responsive and user-friendly web pages using HTML,
                    CSS, and JavaScript.
                  </CardText>
                  <CardText as="li">
                    Ensured cross-browser compatibility and optimized web
                    applications for various devices.
                  </CardText>
                  <CardText as="li">
                    Implemented modern design principles and collaborated with UI/UX
                    designers to enhance the user experience.
                  </CardText>
                  <CardText as="li">
                    Designed and implemented server-side logic using programming
                    languages PHP, Node JS
                  </CardText>
                  <CardText as="li">
                    Worked with databases, including MySQL to manage and store data
                    efficiently.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={6} className="py-3">
              {/* <Card>
                <CardBody className="exp-body">


                  <CardTitle as="h4">Web Developer</CardTitle>
                  <CardText as="p" className="mb-1">
                    MyFluiditi
                  </CardText>
                  <CardText as="p">April 2024 - Present</CardText>

                  <CardTitle>Roles & Responsibilities</CardTitle>
                  <CardText as="li">
                    Translated Figma designs into fully functional WordPress websites, ensuring pixel-perfect
                    implementation . Developed 12+ websites, all successfully running live.
                  </CardText>
                  <CardText as="li">
                    Implemented frontend API functions to handle data retrieval from backend systems and display it
                    on the client side, as well as posting data from frontend forms to the backend via API, ensuring
                    smooth data exchange and responsiveness.
                  </CardText>
                  <CardText as="li">
                    Built and maintained E-Commerce websites, integrating secure payment gateways for a seamless
                    shopping experience.
                  </CardText>

                </CardBody>
              </Card> */}
            </Col>
            <Col xs={12} md={6} className="py-3">
              <Card>
                <CardHeader>
                  <CardTitle className="about-header mb-0" as="h3">
                    Education
                  </CardTitle>
                </CardHeader>
                <CardBody className="exp-body">
                  <div className="mb-4">
                    <CardTitle as="h6">2012 - 2013</CardTitle>
                    <CardTitle as="h6">SSc</CardTitle>
                    <CardTitle as="h6">
                      Sharada Educational Institute
                    </CardTitle>
                  </div>

                  <div className="mb-4">
                    <CardTitle as="h6">2013 - 2015</CardTitle>
                    <CardTitle as="h6">Intermediate</CardTitle>
                    <CardTitle as="h6">
                      Sri Vikas Jr College
                    </CardTitle>
                  </div>

                  <div className="mb-4">
                    <CardTitle as="h6">2015 - 2019</CardTitle>
                    <CardTitle as="h6">B.Tech </CardTitle>
                    <CardTitle as="h6">
                      Vaagdevi College of Engineering
                    </CardTitle>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardGroup>
      </Container>
    </div>
  );
};

export default About;
