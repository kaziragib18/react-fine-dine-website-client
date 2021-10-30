import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo/logo_new-02.png'
import './Menubar.css'
const Menubar = () => {
      const { user, logOut } = useAuth();
      return (
            <>
                  <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                        <Container>
                              <Navbar.Brand href="/home"><img className="logo__img" src={logo} alt="" /></Navbar.Brand>
                              <Navbar.Toggle />
                              <Navbar.Collapse className="justify-content-end">
                                    <Nav.Link className="nav__design" as={HashLink} to="/home#home">Home</Nav.Link>
                                    <Nav.Link className="nav__design" as={HashLink} to="/home#services">Services</Nav.Link>
                                    <Nav.Link className="nav__design" as={HashLink} to="/home#ourteam">Our Team</Nav.Link>
                                    {/* <Nav.Link className="nav__design" as={HashLink} to="/home#about">About</Nav.Link> */}

                                    <Nav.Link className="nav__design" as={Link} to="/myOrder">My Order</Nav.Link>
                                    {/* <Nav.Link className="nav__design" as={Link} to="/about">About</Nav.Link> */}

                                    {user.displayName ?
                                          <Navbar.Text>
                                                <a className="logged__user me-2" href="#login">{user.displayName}</a>
                                          </Navbar.Text> :
                                          <Nav.Link className="nav__design" as={Link} to="/admin"><button className="btn btn-dark">Admin</button></Nav.Link>

                                    }

                                    {
                                          user.displayName ?
                                                <Button onClick={logOut} variant="danger" className="rounded-pill px-2 py-1 me-2">Sign out</Button> :

                                                <Nav.Link className="" as={Link} to="/login"><button className="btn btn-info text-light">Register</button></Nav.Link>

                                    }

                              </Navbar.Collapse>

                        </Container>
                  </Navbar>

            </>
      );
};

export default Menubar;