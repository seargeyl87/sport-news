import "./NewsRatingVote.css";
import { useState } from "react";

const NewsRatingVote = () => {
  const [voteRatingArticle, setVoteRatingArticle] = useState(0);
  const voteRating = (event) => {
    setVoteRatingArticle(event.target.value);
  };

  return (
    <div className="news-rating-vote" onClick={(e) => e.stopPropagation()}>
      <div className="news-rating-vote__body">
        <div
          className="news-rating-vote__active"
          style={{ width: `${voteRatingArticle * 20}%` }}
        ></div>
        <div className="news-rating-vote__items" onClick={voteRating}>
          <input
            type="radio"
            className="news-rating-vote__item"
            value="1"
            name="rating"
          ></input>
          <input
            type="radio"
            className="news-rating-vote__item"
            value="2"
            name="rating"
          ></input>
          <input
            type="radio"
            className="news-rating-vote__item"
            value="3"
            name="rating"
          ></input>
          <input
            type="radio"
            className="news-rating-vote__item"
            value="4"
            name="rating"
          ></input>
          <input
            type="radio"
            className="news-rating-vote__item"
            value="5"
            name="rating"
          ></input>
        </div>
      </div>
      {/* <div className="news-rating-vote__value">{voteRatingArticle}</div> */}
    </div>
  );
};

export default NewsRatingVote;
