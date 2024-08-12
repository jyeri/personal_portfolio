import React from 'react';
import { useNavbar } from './useNavbar';
import NavbarView from '../../Presentational/NavbarView';

const NavBar: React.FunctionComponent = () => {
  const { activeLink, scrolled, onUpdateActiveLink } = useNavbar();

  return <NavbarView activeLink={activeLink} scrolled={scrolled} onUpdateActiveLink={onUpdateActiveLink} />;
};

export default NavBar;