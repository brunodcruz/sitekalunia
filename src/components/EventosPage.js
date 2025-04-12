import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./EventosPage.css";

const totalFotos = 14; // <- ajuste esse número conforme o total de fotos
const fotos = Array.from({ length: totalFotos }, (_, i) => `${process.env.PUBLIC_URL}/images/eventos/${i + 1}.jpg`);

const EventosPage = () => {
  const [showModal, setShowModal] = useState(false);

  const items = fotos.map((src, index) => (
    <div className="carousel-item" key={index}>
      <img src={src} alt={`Evento ${index + 1}`} />
    </div>
  ));

  return (
    <div className="eventos-container">
      <h2>Eventos do Coletivo</h2>
      <p>
        Lançamento dos livros "Questionadora.Eu?" e "Os Nãos e os Porquês" da nossa Kaluniadora{" "}
        <span className="highlight" onClick={() => setShowModal(true)}>Maria Cassavia Zaki</span>.
      </p>

      <AliceCarousel
        items={items}
        infinite
        mouseTracking
        disableButtonsControls={false}
        disableDotsControls={false}
      />

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={`${process.env.PUBLIC_URL}/images/maria-cassavia.jpg`} alt="Maria Cassavia Zaki" />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventosPage;