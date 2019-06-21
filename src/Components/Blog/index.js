import React, { Component } from 'react';
import './styles.css';
import Container from '../Container';
import Title from '../Title';
import Text from '../Text';
import cheer from '../Images/cheer.jpeg';
import lisboa from '../Images/lisboa.jpeg';
import gamejam from '../Images/gamejam.jpeg';
import Caixa from '../Caixa';

class Blog extends Component {
  render() {
    return (
      <section id="blog">
        <Title borda="borda" item="titulo_blog">
          Blog
        </Title>
        <Container cont="container1_blog">
          <Caixa caixa="caixa_blog">
            <img src={cheer} alt="Cheer" className="cheer" />
            <Title item="titulo2_blog">Cheerleading</Title>
            <Text item="texto_blog">
              Embora a faculdade consuma muito do meu tempo, sempre sobra um
              tempinho para treinar! É inevitável pois o cheerleading é um
              esporte lindo, que não tem como não se apaixonar.
            </Text>
          </Caixa>
          <Caixa caixa="caixa_blog">
            <img src={gamejam} alt="Game Jam" className="gamejam" />
            <Title item="titulo2_blog">Game Jam</Title>
            <Text item="texto_blog">
              Embora não ganhamos, meus amigos e eu participamos da nossa
              primeira competição de criação de games (GameJam), realizada na
              Semana da Computação (SECOMP) na UTFPR câmpus cornélio procópio.
              Foi uma ótima experiência.
            </Text>
          </Caixa>
          <Caixa caixa="caixa_blog">
            <img src={lisboa} alt="Lisboa" className="lisboa" />
            <Title item="titulo2_blog">Viagens</Title>
            <Text item="texto_blog">
              De tempos em tempos eu viajo para alguns lugares, minha última
              visita foi em Lisboa, Portugal. Felizmente, já tive a oportunidade
              de visitar outros países como França, Itália e Canadá!
            </Text>
          </Caixa>
        </Container>
      </section>
    );
  }
}

export default Blog;
