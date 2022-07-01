import React from "react";
import Card from "./Card";
import Batman from "../assets/batman.jpg";
import Batman2 from "../assets/batman2.jpg";
import Aliens from "../assets/aliens.jpg";

const cards = [
  {
    id: 1,
    title: "Villatoro.dev",
    image: Batman,
    url: 'https://villatoro.dev',
  },
  {
    id: 2,
    title: "Villatoro blog",
    image: Batman2,
    url:'https://villatoro.dev/blog',
  },
  {
    id: 3,
    title: "Villatoro Tutorial",
    image: Aliens,
    url: 'https://villatoro.dev/login',
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card title={card.title} imageSource={card.image} url={card.url}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
