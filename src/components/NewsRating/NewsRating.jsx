import "./NewsRating.css";
import { useState, useEffect } from "react";

const NewsRating =({rating}) => {

  
  return (
    <div className="news-rating">
      <div className="news-rating__body">
        <div className="news-rating__active" style={{"width": `${rating*20}%`
}}></div>
        <div className="news-rating__items">
          <input
            type="radio"
            className="news-rating__item"
            value="1"
            name="rating"
          ></input>
          <input
            type="radio"
            className="news-rating__item"
            value="2"
            name="rating"
          ></input>
          <input
            type="radio"
            className="news-rating__item"
            value="3"
            name="rating"
          ></input>
          <input
            type="radio"
            className="news-rating__item"
            value="4"
            name="rating"
          ></input>
          <input
            type="radio"
            className="news-rating__item"
            value="5"
            name="rating"
          ></input>
        </div>
      </div>
      <div className="news-rating__value">{rating}</div>
    </div>
  );
}

export default NewsRating;
