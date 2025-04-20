import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./TextosPage.css";

const totalImagens = 17; // Só mudar esse número quando adicionar ou remover imagens

const items = Array.from({ length: totalImagens }, (_, i) => {
  const numero = i + 1;
  return (
    <img
      key={numero}
      src={`${process.env.PUBLIC_URL}/images/textos/${numero}.jpg`}
      alt={`Texto ${numero}`}
      className="carousel-image"
    />
  );
});

const TextosPage = () => {
  return (
    <div className="textos-container">
      <h2>Textos do Mês</h2>
      <AliceCarousel 
        items={items} 
        infinite 
        controlsStrategy="responsive"
      />
    </div>
  );
};

export default TextosPage;