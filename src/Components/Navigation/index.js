import React, { Component } from 'react';

import { HashLink as Link } from 'react-router-hash-link';

import './styles.css';

class Navigation extends Component {
  render() {
    const links = [
      'Home',
      'Perfil',
      'Habilidades',
      'Blog',
      'Portfolio',
      'Infos',
      'Contato',
    ];
    const NavLinks = links.map(link => {
      return (
        <li>
          <Link to={'#' + link.toLowerCase()}> {link}</Link>
        </li>
      );
    });

    return (
      <nav id="menu">
        <h1 className="logo">Beatriz Schwartz</h1>

        <ul>{NavLinks}</ul>
      </nav>
    );
  }
}
export default Navigation;
