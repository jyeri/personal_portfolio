import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import linkedin from '../Assets/reshot-icon-linkedin.svg';
import github from '../Assets/reshot-icon-github.svg';
import instagram from '../Assets/reshot-icon-instagram.svg';
import JYRI from '../Assets/bw-logo.png';

interface NavbarViewProps {
  activeLink: string;
  scrolled: boolean;
  onUpdateActiveLink: (link: string) => void;
}

const NavbarView: React.FunctionComponent<NavbarViewProps> = React.memo(({ activeLink, scrolled, onUpdateActiveLink }) => {
  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <div className='page-logo'>
            <img src={JYRI} alt="Logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className='social-icon'>
              <a target='_blank' rel="noopener noreferrer" href='https://github.com/jyeri' className='git'><img src={github} alt=''/></a>
              <a target='_blank' rel="noopener noreferrer" href='https://instagram.com/jyerirummukainen' className='insta'><img src={instagram} alt=''/></a>
              <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/jrummukainen/' className='lin'><img src={linkedin} alt=''/></a>
            </div>
            <Nav.Link href='#contact' className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>
              <button className="vvd"><span>Let´s Connect</span></button>
            </Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});

export default NavbarView;