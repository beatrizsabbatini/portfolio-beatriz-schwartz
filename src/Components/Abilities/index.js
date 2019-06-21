import React, { Component } from 'react';
import './styles.css';
import Container from '../Container';
import Title from '../Title';
import Text from '../Text';
import notebook from '../Images/icons8-notebook-filled-100.png';

class Abilities extends Component {
  render() {
    return (
      <section id="habilidades">
        <Container cont="container_habilidades2">
          <Title borda="borda2" item="titulo_habilidades">
            Habilidades
          </Title>
          <img src={notebook} alt="Icone Notebook" className="icone_notebook" />
        </Container>
        <Container cont="container_habilidades">
          <Text item="subtitulo_habilidades2">JavaScript</Text>
          <Text item="subtitulo_habilidades2">HTML/CSS3</Text>
          <Text item="subtitulo_habilidades2">React JS</Text>
          <Text item="subtitulo_habilidades2">Java</Text>
          <Text item="subtitulo_habilidades2">UX</Text>
        </Container>
      </section>
    );
  }
}

export default Abilities;
