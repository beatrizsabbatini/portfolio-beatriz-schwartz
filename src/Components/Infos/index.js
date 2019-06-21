import React, { Component } from 'react';
import Text from '../Text';
import Caixa from '../Caixa';
import Title from '../../Components/Title';
import './styles.css';
import Container from '../Container';
import icone_pessoa from '../Images/icone_pessoa.png';
import icone_profissao from '../Images/icone_profissao.png';
import icone_github from '../Images/github.png';

class Portfolio extends Component {
  render() {
    return (
      <section id="infos">
        <Title borda="borda2" item="titulo_infos">
          Mais Informações:
        </Title>
        <Container cont="container_infos">
          <Caixa caixa="caixa_infos">
            <img
              src={icone_pessoa}
              alt="icone_pessoa"
              className="icone_pessoa"
            />
            <Title item="subtitulo_infos">Biografia</Title>
            <Text item="texto_infos">
              Em 2017 iniciei meus estudos na Universidade Tecnológica Federal
              do Paraná (UTFPR). Eu não sabia ao certo se estava no curso certo
              para mim, pois eu sempre fui encantada pelo Design Gráfico. Mas os
              anos foram se passando e atualmente eu sou apaixonada por Web
              Design. Também gosto da área de Games, porém isso ficará mais para
              um Hobby acredito eu.
            </Text>
          </Caixa>
          <Caixa caixa="caixa_infos">
            <img
              src={icone_profissao}
              alt="icone_profissao"
              className="icone_profissao"
            />
            <Title item="subtitulo_infos">Futura Profissão?</Title>
            <Text item="texto_infos">
              Em 2017 iniciei meus estudos na Universidade Tecnológica Federal
              do Paraná (UTFPR). Eu não sabia ao certo se estava no curso certo
              para mim, pois eu sempre fui encantada pelo Design Gráfico. Mas os
              anos foram se passando e atualmente eu sou apaixonada por Web
              Design. Também gosto da área de Games, porém isso ficará mais para
              um Hobby acredito eu.
            </Text>
          </Caixa>
        </Container>
        <Container cont="github">
          <img src={icone_github} alt="icone github" className="icone_github" />
          <a
            className="botao_github"
            href="https://github.com/beatrizsabbatini"
            target="blank"
          >
            Visite meu Github!
          </a>
        </Container>
      </section>
    );
  }
}

export default Portfolio;
