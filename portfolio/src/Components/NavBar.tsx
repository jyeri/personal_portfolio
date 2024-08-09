import { NavbarToggle } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import linkedin from '../assets/reshot-icon-linkedin.svg';
import github from '../assets/reshot-icon-github.svg';
import instagram from '../assets/reshot-icon-instagram.svg';
import spotify from '../assets/reshot-icon-spotify.svg';
import JYRI from '../assets/bw-logo.png';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

const onUpdateActiveLink = (link: string) => {
    setActiveLink(link);
}

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
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
                <a target='_blank' href='https://github.com/jyeri' className='git'><img src={github} alt=''/></a>
                <a target='_blank' href='https://instagram.com/jyerirummukainen' className='insta'><img src={instagram} alt=''/></a>
                <a target='_blank' href='https://www.linkedin.com/in/jrummukainen/' className='lin'><img src={linkedin} alt=''/></a>
                <a target='_blank' href='https://open.spotify.com/user/31syrrea63mvyjwb7ujvpqynbq4u?si=a9c1ce80fc3f4864' className='spotify'><img src={spotify} alt=''/></a>
            </div>
            <Nav.Link href='#contact' className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>
                <button className="vvd"><span>Let’s Connect</span></button>
            </Nav.Link>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}