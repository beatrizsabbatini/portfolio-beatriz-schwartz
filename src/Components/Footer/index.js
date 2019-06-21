import React, { Component } from 'react';
import Text from '../Text';
import Container from '../Container';
import git from '../Images/git.png';
import facebook from '../Images/facebook.png';
import instagram from '../Images/instagram.png';
import './styles.css';

class Portfolio extends Component {
  render() {
    return (
      <section id="rodape">
        <Container cont="rodape">
          <Container cont="social">
            <a href="https://github.com/beatrizsabbatini" target="blank">
              <img className="git" src={git} />
            </a>
            <a
              href="https://www.instagram.com/beatrizsabbatini/?hl=pt-br"
              target="blank"
            >
              <img className="instagram" src={instagram} />
            </a>
            <a
              href="https://www.facebook.com/beatriz.schwartz.16"
              target="blank"
            >
              <img className="facebook" src={facebook} />
            </a>
          </Container>
          <Text item="texto_rodape">
            Desenvolvido por Beatriz Schwartz em junho de 2019 |
            beatriz.sabbatini@gmail.com | +55 (43) 9 88134053
          </Text>
        </Container>
      </section>
    );
  }
}

export default Portfolio;
