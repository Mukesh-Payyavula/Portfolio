import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Col,
  Container,
  ProgressBar,
  Row,
} from "react-bootstrap";
import defaultImg from "./assets/img/default-img.png"

import htmlIcon from "./assets/img/Technical logos/HTML5.png"
import cssIcon from "./assets/img/Technical logos/CSS3.png"
import bootstrapIcon from "./assets/img/Technical logos/bootstrap.png"
import javaScriptIcon from "./assets/img/Technical logos/java-script.png"
import jQueryIcon from "./assets/img/Technical logos/jQuery.png"
import reactIcon from "./assets/img/Technical logos/react.png"
import materialIcon from "./assets/img/Technical logos/material.png"
import nodeIcon from "./assets/img/Technical logos/node-js.png"
import expressIcon from "./assets/img/Technical logos/express-js.png"
import mongodbIcon from "./assets/img/Technical logos/mongo-db.png"
// import phpIcon from "./assets/img/Technical logos/php.png"
// import mySqlIcon from "./assets/img/Technical logos/mysql.png"
// import wordpressIcon from "./assets/img/Technical logos/wordpress.png"
// import figmaIcon from "./assets/img/Technical logos/figma.png"
import photoshopIcon from "./assets/img/Technical logos/adobe-photoshop.png"

const Skills = () => {

  const skillsData =[
    {
      name: "HTML",
      percentage: 90,
      img: htmlIcon,
    },
    {
      name: "CSS",
      percentage: 90,
      img:cssIcon,
    },
    {
      name: "Bootstrap",
      percentage: 90,
      img:bootstrapIcon,
    },
    {
      name: "Java Script",
      percentage: 75,
      img:javaScriptIcon,
    },
    // {
    //   name: "jQuery",
    //   percentage: 75,
    //   img:jQueryIcon,
    // },
    {
      name: "React Js",
      percentage: 75,
      img:reactIcon,
    },
    {
      name: "Material Ui",
      percentage: 50,
      img:materialIcon,
    },
    {
      name: "Node JS",
      percentage: 85,
      img:nodeIcon,
    },
    {
      name: "Express Js",
      percentage: 50,
      img:expressIcon,
    },
    {
      name: "Mongo Db",
      percentage: 90,
      img:mongodbIcon,
    },
    // {
    //   name: "Php",
    //   percentage: 55,
    //   img:phpIcon,
    // },
    // {
    //   name: "MySql",
    //   percentage: 55,
    //   img:mySqlIcon,
    // },
    // {
    //   name: "Wordpress",
    //   percentage: 90,
    //   img:wordpressIcon,
    // },
    // {
    //   name: "Figma",
    //   percentage: 55,
    //   img:figmaIcon,
    // },
    {
      name: "Photoshop",
      percentage: 60,
      img:photoshopIcon,
    },
  ]

  return (
    <div id="skill" className='pb-5'>
      <Container>
        <Row>
          <Card className="border-none py-3">
            <CardBody className="text-center">
              <CardTitle as="h2">Skill Set</CardTitle>
            </CardBody>
          </Card>
          {skillsData.map((skill,index) => (
            <Col xs={6} md={2} className="py-3" key={index}>
              <Card className="skill-set-card">
                  <CardImg variant="top" src={skill.img} alt={skill.name}></CardImg>
                <CardBody className="text-center">
                  <CardTitle as="h5">{skill.name}</CardTitle>
                </CardBody>
                <ProgressBar now={skill.percentage} label={`${skill.percentage}%`} visuallyHidden />
              </Card>
            </Col>
          ))}
          
          
        </Row>
      </Container>
    </div>
  );
};

export default Skills;





