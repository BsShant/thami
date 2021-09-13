import React, { Component } from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import Logo from "../assests/Logo.png";
import ContactUs from "../Pages/ContactUs";
const NavigationBar = () => {
  return (
    <Navbar
      className="navbar-overlay"
      expand="lg"
      sticky="top"
      style={{ float: "left", width: "100%" }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} style={{ height: "80px", width: "80px" }}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav className="">
            <Nav.Link href="/" style={{ color: "#ffffff", fontFamily: "" }}>
              Home
            </Nav.Link>
            <Nav.Link
              href="/about"
              style={{ color: "#ffffff", fontFamily: "" }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="/event"
              style={{ color: "#ffffff", fontFamily: "" }}
            >
              Event
            </Nav.Link>
            <Nav.Link
              href="/publication"
              style={{ color: "#ffffff", fontFamily: "" }}
            >
              Publication
            </Nav.Link>
            <Nav.Link
              href="/GetInvolved"
              style={{ color: "#ffffff", fontFamily: "" }}
            >
              Get Involved
            </Nav.Link>
            <Nav.Link style={{ color: "#ffffff" }} onClick={ContactUs}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
