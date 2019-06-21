import React, { Component } from 'react';
import Navigation from '../../Components/Navigation';
import Header from '../../Components/Header';
import About from '../../Components/About';
import Abilities from '../../Components/Abilities';
import Blog from '../../Components/Blog';
import Portfolio from '../../Components/Portfolio';
import Infos from '../../Components/Infos';
import Contact from '../../Components/Contact';
import Footer from '../../Components/Footer';
import './styles.css';

//COMPONENTES: Voltemos para o ReactJS, e aqui... TUDO é componente! Botões, links, imagens, inputs, e até mesmo páginas completas!
// Componente: Um conjunto de parte visual (que é o nosso HTML) a parte funcional (que é JavaScript) e a parte de estilização (que é o CSS)

class Main extends Component {
  render() {
    return (
      <>
        <div>
          <Navigation />
          <Header />
          <About />
          <Abilities />
          <Blog />
          <Portfolio />
          <Infos />
          <Contact />
          <Footer />
        </div>
      </>
    );
  }
}

export default Main;
