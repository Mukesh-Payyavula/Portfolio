import React from 'react'
import { Button, Card, CardBody, CardGroup, CardHeader, CardImg, CardText, CardTitle, Col, Container, ListGroup, ListGroupItem, ModalTitle, Row } from 'react-bootstrap'
import loginImg from "./assets/img/loginfromImg.jpeg"
import portfolioImg from "./assets/img/portfolioImg.jpg"
import defaultImg from "./assets/img/default-img.png"
import soccerblissImg from "./assets/img/soccerbliss-webPage.jpeg"
import profiviImg from "./assets/img/profivi-webPage.jpeg"
import lakhImg from "./assets/img/la-kh-webPage.jpeg"
import elitesalonImg from "./assets/img/elitesalon-webPage.jpeg"
import vanishyaImg from "./assets/img/vanishya-webPage.jpeg"

const Projects = () => {

  const projectData = [
    // {
    //   img:loginImg ,
    //   link:'https://github.com/Gokul095/Login-form-1.0' ,
    //   titleName: "Login Form Validation",
    //   content: "User Login Form Validation with proper registration and Backend connectivity with middleware concept. Used Pug view engin for HTML template, normal css and stored user data's in Mongo Data Base .",
    //   programs: {
    //     frontend:"Pug View Engin, CSS, Javascript, Bootstrap, React Js",
    //     backend:"Node Js, Express Js",
    //     database: "Mongo DB",
    //   },
    // },
    {
      img:portfolioImg ,
      link:'https://github.com/Gokul095/Portfolio.git' ,
      titleName: "My Portfolio",
      content: "Designed and developed a personal portfolio website to showcase my skills, projects, and achievements. The website serves as an interactive and informative platform for potential employers and collaborators.",
      programs: 
        {
        frontend:"HTML, CSS, Javascript, Bootstrap, React Js",
        backend:"Node Js, Express Js, Nodemailer (for email)",
        database:"Not applicable",
      }
    
    },
  ];

  const liveProjectData =[
    // {
    //   img:soccerblissImg,
    //   name: "Soccer bliss",
    //   url:"https://soccerblisss.com/",
    //   content:"",
    //   developed:{
    //     tech:"Wordpress"
    //   },
    // },
    // {
    //   img:profiviImg,
    //   name: "Profivi Technology",
    //   url:"https://profivi.com/",
    //   content:"",
    //   developed:{
    //     tech:"Wordpress, Divi Theme"
    //   },
    // },
    // {
    //   img:lakhImg,
    //   name: "LA-KH ",
    //   url:"https://la-kh.com/",
    //   content:"",
    //   developed:{
    //     tech:"HTML, CSS, JavaScript, Bootstrap, Php"
    //   },
    // },
    // {
    //   img:vanishyaImg,
    //   name: "Vanishya Consumer Products",
    //   url:"https://vanishya.com/",
    //   content:"",
    //   developed:{
    //     tech:"Wordpress, Divi Theme"
    //   },
    // },
    // {
    //   img:elitesalonImg,
    //   name: "Elite Unisex Hair And Beauty Salon",
    //   url:"https://eliteunisexhairandbeautysalon.in/",
    //   content:"",
    //   developed:{
    //     tech:"Wordpress, Divi Theme"
    //   },
    // },
  ]



  return (
    <div id='project' className='pb-5'>
      <Container>
        <Row>
          <Card className="border-none py-3">
            <CardBody className="text-center">
              <CardTitle as="h2">Projects</CardTitle>
            </CardBody>
          </Card>
          {projectData.map((project, index) => (
            <Col xs={12} md={6} className='pt-5' key={index}>
              <Card>
                <CardImg variant='top' src={project.img} alt={project.titleName}></CardImg>
                <CardHeader className='text-center py-3'>
                  <Button href={project.link} className='btn-cutom-color' target='blank'>View Github Code</Button>
                </CardHeader>
                <CardBody>
                  <CardTitle as="h4">{project.titleName}</CardTitle>
                  <CardText>{project.content}</CardText>
                  <ListGroup as="ol" numbered>
                    <ModalTitle as="h5" className='mb-2'>Technologies Used:</ModalTitle>
                    <CardText>Frontend : {project.programs.frontend}</CardText>
                    <CardText>Backend : {project.programs.backend}</CardText>
                    <CardText>Database : {project.programs.database}</CardText>
                  </ListGroup>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container>
        <Row>
          <Card className="border-none pt-5">
            <CardBody className="text-center">
              <CardTitle as="h2">Live Projects</CardTitle>
            </CardBody>
          </Card>
            {liveProjectData.map((liveProject, index) => (
              <Col xs={12} md={4} className='pt-5' key={index}>
                <Card>
                  <CardImg variant='top' src={liveProject.img} alt={liveProject.name}></CardImg>
                  <CardHeader className='text-center py-3'>
                    <Button href={liveProject.url} className='btn-cutom-color' target='blank'>View Website</Button>
                  </CardHeader>
                  <CardBody>
                    <CardTitle as="h4">{liveProject.name}</CardTitle>
                    <CardText>{liveProject.content}</CardText>
                    <ListGroup as="ol" numbered>
                      <ModalTitle as="h5" className='mb-2'>Technologies Used:</ModalTitle>
                      <CardText>Build in : {liveProject.developed.tech}</CardText>
                    </ListGroup>
                  </CardBody>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  )
}

export default Projects