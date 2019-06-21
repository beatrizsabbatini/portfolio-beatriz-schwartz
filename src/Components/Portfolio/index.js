import React, { Component } from 'react';
import Text from '../Text';
import Container from '../Container';
import Caixa from '../Caixa';
import Title from '../../Components/Title';
import './styles.css';
import geovanna from '../Images/geovanna.png';
import zumbi from '../Images/zumbi.png';
import cientista1 from '../Images/cientista1.gif';
import cientista2 from '../Images/cientista2.gif';
import cientista3 from '../Images/cientista3.gif';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <Container cont="container_titulo_portfolio">
          <Title borda="borda" item="meu_portfolio">
            Portfólio
          </Title>
          <Text item="descricao">
            {' '}
            Abaixo estão alguns dos trabalhos desenvolvidos por mim ao longo da
            faculdade:
          </Text>

          <Title item="titulo_programacao">Programação:</Title>
        </Container>
        <Container cont="container_portfolio">
          <Caixa caixa="caixa_port">
            <img
              src={geovanna}
              alt="Site Geovanna Garcia"
              className="geovanna"
            />
            <Title item="titulo_programacao">Geovanna Garcia</Title>
            <Text item="subtitulos_port">
              Cópia de um site de uma acessoria de casamentos, desenvolvido
              durante a disciplina de Web 1.
            </Text>
          </Caixa>
          <Caixa caixa="caixa_port">
            <img
              src={zumbi}
              alt="Jogo de Ataque Zumbi Alura"
              className="zumbi"
            />
            <Title item="titulo_programacao">Jogo Ataque Zumbi</Title>
            <Text item="subtitulos_port">
              Um jogo que eu criei a partir dos ensinamentos da plataforma
              online Alura!
            </Text>
          </Caixa>
        </Container>
        <Title item="titulo_programacao">Animação:</Title>
        <Container cont="container_portfolio2">
          <img src={cientista1} alt="cientista1" className="cientista" />
          <img src={cientista3} alt="cientista2" className="cientista" />
          <img src={cientista2} alt="cientista3" className="cientista" />
        </Container>
        <Text item="descricao_animacao">
          {' '}
          Acima estão algumas das animações que eu fiz para um jogo que em breve
          será lançado pela empresa 2DVerse Studio, na qual eu trabalho.
        </Text>
      </section>
    );
  }
}

export default Portfolio;
