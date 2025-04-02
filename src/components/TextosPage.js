import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./TextosPage.css";

const items = [
<img src={`${process.env.PUBLIC_URL}/images/1.png`} alt="Texto 1" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/2.png`} alt="Texto 2" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/3.png`} alt="Texto 3" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/4.png`} alt="Texto 4" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/5.png`} alt="Texto 5" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/6.png`} alt="Texto 6" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/7.png`} alt="Texto 7" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/8.png`} alt="Texto 8" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/9.png`} alt="Texto 9" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/10.png`} alt="Texto 10" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/11.png`} alt="Texto 11" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/12.png`} alt="Texto 12" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/13.png`} alt="Texto 13" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/14.png`} alt="Texto 14" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/15.png`} alt="Texto 15" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/16.png`} alt="Texto 16" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/17.png`} alt="Texto 17" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/18.png`} alt="Texto 18" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/19.png`} alt="Texto 19" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/20.png`} alt="Texto 20" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/21.png`} alt="Texto 21" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/22.png`} alt="Texto 22" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/23.png`} alt="Texto 23" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/24.png`} alt="Texto 24" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/25.png`} alt="Texto 25" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/27.png`} alt="Texto 27" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/28.png`} alt="Texto 28" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/29.png`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/30.png`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/31.png`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/32.png`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/33.png`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/34.png`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/35.png`} alt="Texto 27" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/36.png`} alt="Texto 28" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/37.png`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/38.png`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/39.png`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/40.png`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/41.png`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/42.png`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/43.png`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/44.png`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/45.png`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/46.jpg`} alt="Texto 27" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/47.jpg`} alt="Texto 28" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/48.jpg`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/49.jpg`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/50.jpg`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/51.jpg`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/52.jpg`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/53.jpg`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/54.jpg`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/55.jpg`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/56.jpg`} alt="Texto 29" className="carousel-image" />,
  <img src={`${process.env.PUBLIC_URL}/images/57.jpg`} alt="Texto 29" className="carousel-image" />,
];



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