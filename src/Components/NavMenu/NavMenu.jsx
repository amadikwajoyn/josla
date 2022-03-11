import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavMenu.css';
import joslalogo from '../../assets/image/Josla_icon.png'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,} from 'reactstrap';

function NavMenu(){
  return (
    <div>
        <Navbar color="light" light expand="sm" className="navbar">
          <NavbarBrand href="/">  
            <img src= {joslalogo} alt="logo" width="20%"/>
          </NavbarBrand>
          <NavbarToggler />
          <Collapse navbar className="justify-content-end navbar-hold">
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/smart-meter-page/" className="menutext">Smart Meter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/features/" className="menutext">App Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about/" className="menutext">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login/">
                  <Button outline color="success" className="btn-login">Login</Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
  )
}

export default NavMenu