import React from 'react';
import {Link} from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
  .navbar {
    background: linear-gradient(90deg, rgb(0, 115, 153)0%, rgb(0, 32, 128) 40%) ;
    display:flex;
  }
  
   a, .navbar-brand, .navbar-nav .nav-link   {
    color:  #efefef;
    &:hover {
      color: white;
    }

`;
const Header = () => {
    
 return (
     <Styles>
        <Navbar expand="lg" >
            <Navbar.Brand href="/">Bookish</Navbar.Brand> 
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Item>
                    <Nav.Link> 
                        <Link to="/">Home</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/bookcase" > Bookcase</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item> 
                    <Nav.Link> 
                    <Link to="/about" > About</Link>
                    </Nav.Link>
                </Nav.Item> 
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>  
 );
 
}

export default Header;