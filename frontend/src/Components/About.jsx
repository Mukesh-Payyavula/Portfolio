import React from "react";
import aboutImg from "./assets/img/lightImg.jpeg";
import myImg from "./assets/img/mukesh.jpeg";

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
  CardGroup,
} from "react-bootstrap";

import { FiGithub, FiLinkedin } from "react-icons/fi";

const About = () => {
  return (
    <div id="about" className="pb-5">
      <Container>
        <Row>
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
                          <CardText as="a" href="mailto:payyavulamukesh@gmail.com">
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
            <Col xs={12} md={4} className="py-3">
              <Card>
                <CardBody className="exp-body">
                  <CardTitle as="h4">Ecommerce Last Mile Operations</CardTitle>
                  <CardText as="p" className="mb-1">
                    Ekart Logistics
                  </CardText>
                  <CardText as="p">Aug 2019 - Sept 2022</CardText>

                  <CardTitle>Roles & Responsibilities</CardTitle>
                  <CardText as="li">
                  Managed end-to-end last mile delivery operations, ensuring timely and efficient deliveries to customers.
                  </CardText>
                  <CardText as="li">
                  Coordinated with fulfillment centers, third-party delivery partners, and customer service to optimize delivery processes.
                  </CardText>
                  <CardText as="li">
                  Oversaw route planning and optimization, utilizing technology to reduce delivery times and costs.
                  </CardText>
                  {/* <CardText as="li">
                  Monitored key performance indicators (KPIs), such as delivery speed, cost efficiency, and customer satisfaction.
                  </CardText> */}
                  <CardText as="li">
                  Handled customer inquiries and complaints, ensuring a high level of customer service throughout the delivery process.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={4} className="py-3">
              <Card>
                <CardBody className="exp-body">
                  <CardTitle as="h4">System Administrater</CardTitle>
                  <CardText as="p" className="mb-1">
                    SoftnSol Trainings
                  </CardText>
                  <CardText as="p">Oct 2022 - Aug 20214</CardText>

                  <CardTitle>Roles & Responsibilities</CardTitle>
                  <CardText as="li">
                  Configuring and maintaining the networked computer system, including 
                  hardware, software and applications. 
                  </CardText>
                  <CardText as="li">
                  Managing network servers and technology tools. 
                  </CardText>
                  <CardText as="li">
                  Providing Remote Desktop support through a centralised server. 
                  </CardText>
                  <CardText as="li">
                    Provided technical support to end-users, ensuring timely resolution of system-related issues.
                  </CardText>
                  <CardText as="li">
                    Provided technical support for remote users, resolving connectivity and system issues promptly.
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={4} className="py-3">
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
                    languages PHP, Node JS.
                  </CardText>
                  <CardText as="li">
                    Worked with databases, including MySQL to manage and store data
                    efficiently.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={12} className="py-3">
              <Card>
                <CardHeader>
                  <CardTitle className="about-header mb-0" as="h3">
                    Education
                  </CardTitle>
                </CardHeader>
                <CardBody className="exp-body">
                  <div className="mb-4">
                    <CardTitle as="h6">2012 - 2013</CardTitle>
                    <CardTitle as="h6">SSC</CardTitle>
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
                    <CardTitle as="h6">B.Tech</CardTitle>
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
