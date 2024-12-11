import React, { useEffect, useState } from "react";
import "./navbar.css";
import {
  Container,
  Nav,
  Navbar,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  Image,
} from "react-bootstrap";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

const NavComp = ({ handleDownloadCv }) => {
  const storedMode = localStorage.getItem("mode") || "dark";
  const [mode, setMode] = useState(storedMode);
  const [scrolled, setScrolled] = useState(false);

  const handleChange = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    // Save the mode in localStorage
    localStorage.setItem("mode", newMode);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Adjust the value as needed for when you want the class to be added
    const scrollThreshold = 50;

    if (scrollY > scrollThreshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    document.documentElement.setAttribute("data-bs-theme", mode);
  }, [mode]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header-section">
      <Navbar collapseOnSelect  expand="lg" className={`bg-body-tertiary ${scrolled ? "menu-fixed" : ""}`} bg={mode} data-bs-theme={mode} >
        <Container>
          <div className="d-flex align-items-center left-div">
            <Navbar.Brand as={Link} to={"/"}>
              <Image
                src="mukesh logo white.png"
                width="200"
                height="80"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              ></Image>
              {/* <img src="GS-logo.png" width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo" /> */}
            </Navbar.Brand>

            <ToggleButtonGroup
              type="checkbox"
              className="mobileToggle"
              onChange={handleChange}
            >
              <ToggleButton id="mobileModeBtn" variant="" className="modeToggle">
                {" "}
                {mode === "dark" ? (
                  <MdOutlineLightMode />
                ) : (
                  <MdOutlineDarkMode />
                )}{" "}
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#home" >Home</Nav.Link>
              <Nav.Link href="#about" >About</Nav.Link>
              <Nav.Link href="#skill" >Skills</Nav.Link>
              <Nav.Link href="#project" >Projects</Nav.Link>
              <Nav.Link href="#contact" >Contact Us</Nav.Link>
              {/* <a className="nav-link" href="#home">
                Home
              </a>
              <a className="nav-link" href="#about">
                About
              </a>
              <a className="nav-link" href="#skill">
                Skills
              </a>
              <a className="nav-link" href="#project">
                Projects
              </a>
              <a className="nav-link" href="#contact">
                Contact Us
              </a> */}
              <Button
                className="btn-cutom-color"
                variant=" "
                onClick={handleDownloadCv}
              >
                Download CV
              </Button>
            </Nav>
          </Navbar.Collapse>

          <ToggleButtonGroup
            type="checkbox"
            className="decToggle"
            onChange={handleChange}
          >
            <ToggleButton id="modeBtn" variant="" className="modeToggle">
              {" "}
              {mode === "dark" ? (
                <MdOutlineLightMode />
              ) : (
                <MdOutlineDarkMode />
              )}{" "}
            </ToggleButton>
          </ToggleButtonGroup>
        </Container>
      </Navbar>

    </header>
  );
};

export default NavComp;
