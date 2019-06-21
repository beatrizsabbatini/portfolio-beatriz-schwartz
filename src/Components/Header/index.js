import React, { Component } from 'react';
import Text from '../Text';
import Container from '../Container';
import './styles.css';
import eu from '../Images/eu.jpg';

class Header extends Component {
  render() {
    return (
      <header id="home">
        <Container cont="container_home">
          <img src={eu} alt="Foto Beatriz" className="foto_beatriz" />
          <Text item="item1">Oi! Eu sou a Bia.</Text>
          <Text item="item1_2">
            {' '}
            Sou estudante da UTFPR e futura Engenheira de Software
          </Text>
        </Container>
      </header>
    );
  }
}

export default Header;
