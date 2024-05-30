import { NavbarToggle } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import linkedin from '../assets/reshot-icon-linkedin.svg';
import github from '../assets/reshot-icon-github.svg';
import instagram from '../assets/reshot-icon-instagram.svg';
import spotify from '../assets/reshot-icon-spotify.svg';
import steam from '../assets/reshot-icon-steam.svg';
import JYRI from '../assets/JYRI-txt.svg';
import programmer from '../assets/reshot-icon-programmer.svg';
import arkkiwhite from '../assets/arkki-logo-white.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [ scrolled, setScroll ] = useState(false);

  useEffect(() => {
    const onScroll = () => {
        if(window.scrollY > 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }
    window.addEventListener('scrolled', onScroll);

    return () => {
        window.removeEventListener('scrolled', onScroll);
    }
}, [])

const onUpdateActiveLink = (link: string) => {
    setActiveLink(link);
}

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <div className='page-logo'>
            <img src={JYRI} alt="Logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
            <div className='social-icon'>
                <a href='#' className='git'><img src={github} alt=''/></a>
                <a href='#' className='insta'><img src={instagram} alt=''/></a>
                <a href='#' className='lin'><img src={linkedin} alt=''/></a>
                <a href='#' className='spotify'><img src={spotify} alt=''/></a>
                <a href='#' className='steam'><img src={steam} alt=''/></a>
            </div>
          <button className='vvd-btn' onClick={() => console.log('connect click')}><span>Contact Me</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}