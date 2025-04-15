"use client";
import "./style.css";

import Link from "next/link";
import { DownloadOutlined } from "@ant-design/icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar expand="lg" className="header-bg">
      <Container>
        <Navbar.Brand className="logo">Sunaina.</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" /> {/* This is the toggle button */}
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto pos">
            <Link href="/" className="nav-links">
              Home
            </Link>
            <Link href="#about" className="nav-links">
              About
            </Link>
            <Link href="#skill" className="nav-links one">
              Skills
            </Link>
            <Link href="#work" className="nav-links">
            Work
            </Link>
            <Link href="#contact" className="nav-links">
              Contact
            </Link>
          </Nav>
          <button className="cv-btn1">
            Download CV <DownloadOutlined />
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );
}

export default Header;
