import React, { Component } from 'react';
import './styles.css';
import Container from '../Container';
import Title from '../Title';
import Text from '../Text';
import Caixa from '../Caixa';
import coracao from '../Images/coracao.png';
import balao from '../Images/balao.png';
import diploma from '../Images/diploma.png';
import lapis from '../Images/lapis.png';

class Contact extends Component {
  render() {
    return (
      <section id="contato">
        <Title borda="borda" item="titulo_contato">
          Contato
        </Title>
        <Text item="subtitulo_contato">Entre em contato comigo!</Text>
        <Container cont="form">
          <form
            action="https://formspree.io/beatriz.sabbatini@gmail.com"
            method="POST"
          >
            <Container cont="form2">
              <Title item="subtitulo_contato2">Digite seu nome:</Title>
              <input type="text" className="name" />
              <Title item="subtitulo_contato2">Digite seu email:</Title>
              <input type="text" className="email" />
              <Title item="subtitulo_contato3">Digite o assunto:</Title>
              <input type="text" className="assunto" />
              <Title item="subtitulo_contato4">Digite sua mesagem:</Title>
              <input type="text" className="_replyto" />
              <input type="submit" className="enviar" value="Enviar" />
            </Container>
          </form>
        </Container>
      </section>
    );
  }
}

export default Contact;
