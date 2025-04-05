
import React, { useState } from "react";
import "./EventosPage.css"; // Estilização específica para a página

const EventosPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="eventos-container">
      <h2>Eventos do Coletivo</h2>
      <p>
        Lançamento dos livros "Questionadora.Eu?" e "Os Nãos e os Porquês" da nossa Kaluniadora{" "}
        <span className="highlight" onClick={() => setShowModal(true)}>Maria Cassavia Zaki</span>.
      </p>
      <img
        src={`${process.env.PUBLIC_URL}/images/evento.jpg`}
        alt="Evento do Coletivo Kalúnia"
        className="evento-imagem"
      />

      {/* Modal de Foto */}
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
