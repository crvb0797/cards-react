import React from "react";
import propTypes from "prop-types";
import "../cards.css";

function Card({ title, imageSource, url }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img className="card-img-top" src={imageSource} alt="Batman" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illum
          repudiandae earum possimus, dolorum necessitatibus quis repellendus
          praesentium ex eligendi dignissimos aperiam qui delectus nisi sequi
          similique impedit atque reiciendis!
        </p>
        <a
          target="_blank"
          href={url}
          className="btn btn-outline-primary rounded-0"
        >
          Go to Website
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: propTypes.string.isRequired,
  url: propTypes.string,
  imageSource: propTypes.string,
};

export default Card;
