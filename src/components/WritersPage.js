import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./WritersPage.css";
import writers from "../data/writers.json"; // Caminho para o JSON

const items = writers.map((writer, index) => (
  <div className="carousel-item" key={index}>
    <img src={process.env.PUBLIC_URL + writer.image} alt={writer.name} />
    <div
      className="bio-container"
      dangerouslySetInnerHTML={{ __html: writer.bio }}
    ></div>
  </div>
));

const WritersPage = () => {
  return (
    <div className="writers-container">
      <div className="writers-title-box">
        <h2>Conheça nossos/as escritores/as</h2>
      </div>
      <AliceCarousel
        infinite
        items={items}
        // autoplay removido
        // autoPlayInterval removido
        mouseTracking // permite clique/arraste no desktop
        disableDotsControls={false} // você pode mudar isso se quiser esconder os dots
        disableButtonsControls={false} // ativa as setas
      />
    </div>
  );
};

export default WritersPage;