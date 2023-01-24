import "./NewsRating.css";
import { useState, useEffect } from "react";

const NewsRating =() => {
  const [newsRatingVote, setNewsRatingVote] = useState([
    { id: 1, vote: 2 },
    { id: 2, vote: 5 },
    { id: 3, vote: 5 },
    { id: 3, vote: 5 },
  ]);

  const [middleRating, setMiddleRating] = useState(0);

  function countOverallRating() { 
    let sum = 0;
    newsRatingVote.forEach((item) => { 
      sum += item.vote;
    });
    setMiddleRating(sum / newsRatingVote.length);
  }

  useEffect(() => {
    countOverallRating();
  });
  return (
    <div className="news-rating">
      <div className="news-rating__body">
        <div className="news-rating__active" style={{"width": `${middleRating*20}%`
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
      <div className="news-rating__value">{middleRating}</div>
    </div>
  );
}

export default NewsRating;
