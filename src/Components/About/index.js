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
import curriculo from '../Images/curriculo_2019.pdf';

class About extends Component {
  render() {
    return (
      <section id="perfil">
        <Title borda="borda" item="titulo_about">
          Sobre mim:
        </Title>
        <Container cont="container_about">
          <Caixa caixa="caixa1">
            <img src={coracao} alt="Icone Coração" className="icone_coracao" />
            <Title item="subtitulos_about">Interesses:</Title>
            <Text item="texto_about"> Desenvolvimento Web</Text>
            <Text item="texto_about"> Desenvolvimento de Games</Text>
          </Caixa>
          <Caixa caixa="caixa1">
            <img src={balao} alt="Icone Balao" className="icone_balao" />
            <Title item="subtitulos_about">Idiomas:</Title>
            <Text item="texto_about">Português (Nativo)</Text>
            <Text item="texto_about">Inglês (Avançado)</Text>
          </Caixa>
          <Caixa caixa="caixa1">
            <img src={diploma} alt="Icone Diploma" className="icone_diploma" />
            <Title item="subtitulos_about">Formação:</Title>
            <Text item="texto_about">
              Cursando atualmente (2019) Engenharia de Software na UTFPR
            </Text>
          </Caixa>
          <Caixa caixa="caixa1">
            <img src={lapis} alt="Icone lapis" className="icone_lapis" />
            <Title item="subtitulos_about">Atividades:</Title>
            <Text item="texto_about">
              Desenvolvimento de sistemas web e desktop
            </Text>
            <Text item="texto_about">
              Desenvolvimento de animações para games
            </Text>
          </Caixa>
        </Container>
        <Container cont="botao">
          <a className="baixar" href={curriculo} download>
            BAIXAR CURRÍCULO COMPLETO
          </a>
        </Container>
      </section>
    );
  }
}

export default About;
