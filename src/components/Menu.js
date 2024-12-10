import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><a href="#home">Página Inicial</a></li>
        <li><a href="#sobre">Escritores/as</a></li>
        <li><a href="#servicos">Fotos</a></li>
        <li><a href="#contato">Eventos</a></li>
        <li><a href="#blog">Textos do mês</a></li>
      </ul>
    </nav>
  );
};

export default Menu;