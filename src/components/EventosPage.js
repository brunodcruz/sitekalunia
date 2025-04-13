import React, { useState, } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./EventosPage.css";

const totalFotos = 22; // Quantidade de fotos numeradas (1.jpg, 2.jpg, ...)

const EventosPage = () => {
  const [classes, setClasses] = useState({});

  const handleImageLoad = (index, e) => {
    const img = e.target;
    const isVertical = img.naturalHeight > img.naturalWidth;
    setClasses((prev) => ({
      ...prev,
      [index]: isVertical ? "vertical" : "horizontal",
    }));
  };

  const items = Array.from({ length: totalFotos }, (_, i) => (
    <div className="carousel-item-evento" key={i}>
      <img
        src={`${process.env.PUBLIC_URL}/images/eventos/${i + 1}.jpg`}
        alt={`Evento ${i + 1}`}
        className={`foto-evento ${classes[i] || ""}`}
        onLoad={(e) => handleImageLoad(i, e)}
      />
    </div>
  ));

  return (
    <div className="eventos-container">
      <h2>Eventos do Coletivo</h2>
      <p>
        Lançamento dos livros "Questionadora.Eu?" e "Os Nãos e os Porquês" da nossa Kaluniadora{" "}
        <span className="highlight">Maria Cassavia Zaki</span>.
      </p>

      <AliceCarousel
        items={items}
        infinite
        mouseTracking
        disableDotsControls={false}
        disableButtonsControls={false}
      />
    </div>
  );
};

export default EventosPage;