import React from "react";
import "./Nave.css";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Nave() {
  return (
    <>
      <div className="navigaton">
        <Navbar.Brand href="#"> </Navbar.Brand>
  <nav className="item">
    <ul className="uu">
    <li>
          <Link exact to="/Home" activeClassName="nav-active">
            Home
          </Link>
        </li>

        <li>
          <Link exact to="/Service" activeClassName="nav-active">
            Service
          </Link>
        </li>
        <li>
          <Link exact to="/Contact" activeClassName="nav-active">
            Contact
          </Link>
        </li>

        </ul> 
        </nav>
      </div>
    </>
  );
}
