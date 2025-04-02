import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./WritersPage.css";

const writers = [
  { name: "Escritor 1", image: `${process.env.PUBLIC_URL}/images/writer1.jpg`, bio: "Neide Klein Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum elementum eros, condimentum laoreet metus bibendum quis. Fusce placerat sit amet magna ac ornare. Ut vehicula tortor dui, fermentum lacinia purus vehicula non. Aenean vel arcu dignissim, convallis quam ut, convallis purus. Etiam a magna a nisl volutpat ultrices sit amet ut turpis. Nunc gravida dapibus porta. In dignissim libero ut neque facilisis euismod." },
  { name: "Escritor 2", image: `${process.env.PUBLIC_URL}/images/writer2.jpg`, bio: "Rosália Corrêa Nunc elementum eros et ipsum rutrum suscipit. Maecenas dui dolor, pellentesque vitae quam vel, viverra posuere nisl. Cras id nulla sed lectus tincidunt semper a sed lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sollicitudin mauris vitae dignissim volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec tempus congue dictum. Mauris at ligula et nisi blandit volutpat." },
  { name: "Escritor 3", image: `${process.env.PUBLIC_URL}/images/writer3.jpg`, bio: "Juliana Gobbe Praesent pretium finibus nulla in placerat. Donec vitae tempor nunc. Curabitur vel condimentum leo. Vivamus id dolor ultrices, facilisis metus facilisis, dapibus orci. Vestibulum pretium justo a ullamcorper maximus. Sed id urna augue. Suspendisse non enim et libero porttitor viverra. Duis et purus neque. Morbi porttitor, nisi ut lobortis pretium, augue erat mattis massa, ut ullamcorper eros augue id massa. Nulla porta volutpat nulla vel tristique. Cras dictum sagittis magna, vitae posuere dolor tincidunt eget. Donec vel pellentesque est, quis hendrerit ligula." },
];

const items = writers.map((writer, index) => (
  <div className="carousel-item" key={index}>
    <img src={writer.image} alt={writer.name} />
    <p>{writer.bio}</p>
  </div>
));
/*
const WritersPage = () => {
  return (
    <div className="writers-container">
      <h2>Conheça os escritores</h2>
      <AliceCarousel autoPlay autoPlayInterval={3000} infinite items={items} />
    </div>
  );
};
*/

const WritersPage = () => {
    return (
      <div className="writers-container">
        <div className="writers-title-box"> {/* Caixa com fundo personalizado */}
          <h2>Conheça nossos/as escritores/as</h2>
        </div>
        <AliceCarousel autoPlay autoPlayInterval={3000} infinite items={items} />
      </div>
    );
  };

export default WritersPage;