import React from 'react';
import { Navbar, Nav, Container, Image, Card, Dropdown, Button } from 'react-bootstrap';

import HeaderLogo from './header_logo.svg';
import { useValue } from '~/context/UserAuthContext';

import UserIcon from '~/components/user/UserIcon';


const Header = () => {

  const {
    state: { currentUser },
    dispatch,
  } = useValue();

  return (
    <Navbar className="navbar ps-4 pe-4 sticky-top " expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">
          <Image className="img-fluid " src={HeaderLogo} alt="logo" width="150" height="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-link ms-auto text-uppercase align-items-center">
            <Nav.Link className="nav-title" href="/">
              home
            </Nav.Link>
            <Nav.Link className="nav-title" href="/tickets">
              tickets
            </Nav.Link>
            <Nav.Link className="nav-title" href="/store">
              store
            </Nav.Link>
            <Nav.Link className="nav-title" href="/vip">
              vip area
            </Nav.Link>
            {!currentUser ? (
                <Button style={{backgroundColor: '#FFCE37'}} className="nav-title-signin text-uppercase rounded-pill border border-0"
                  onClick={() => {
                    dispatch({ type: 'OPEN_LOGIN' });
                  }}
                >
                  sign in
                </Button>
            ) : (
              <UserIcon />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
