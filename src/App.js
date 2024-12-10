import React from "react";
import Slider from "react-slick"; // Importando o Slider do react-slick
import Header from "./components/Header";
import Menu from "./components/Menu";
import "./App.css"; // Certifique-se de importar o arquivo CSS

// Importando o CSS do slick-carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

function App() {
  // Configuração do carrossel
  const settings = {
    dots: true,           // Adiciona pontos de navegação
    infinite: true,       // Faz com que o carrossel volte ao início após o final
    speed: 500,           // Velocidade da transição (em ms)
    slidesToShow: 1,      // Número de slides visíveis por vez
    slidesToScroll: 1,    // Número de slides para avançar de cada vez
    arrows: true,         // Exibe setas de navegação
    centerMode: true,     // Centraliza o slide ativo
    focusOnSelect: true,  // Foca no slide ao clicar
  };

  return (
    <div className="app-container">
      <Header />
      <Menu />
      <main>
        <h1>B E M V I N D O S(AS)!</h1>
        <p>Site do Coletivo Literário Kalúnia.</p>

        {/* Carrossel de Imagens */}
        <Slider {...settings}>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/fotomeio.jpg`}
              alt="Foto 1"
              className="carousel-image"
            />
          </div>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/foto2.jpg`}
              alt="Foto 2"
              className="carousel-image"
            />
          </div>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/foto3.jpg`}
              alt="Foto 3"
              className="carousel-image"
            />
          </div>
          {/* Adicione mais imagens conforme necessário */}
        </Slider>
      </main>
    </div>
  );
}

export default App;