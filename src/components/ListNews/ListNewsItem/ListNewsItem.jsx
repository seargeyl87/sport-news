import "./ListNewsItem.css";
import NewsRating from "../../NewsRating/NewsRating";
import { Link } from "react-router-dom";
import PostService from "../../../API/PostService";
import { useState, useEffect } from "react";

const ListNewsItem = ({ itemNews, setChooseTags }) => {

  const a = new Date(itemNews.date);
  return (
    <div className="list-news-item">
      <div className="list-news-item__img-tags">
        <div
          className="list-news-item__img"
          style={{
            backgroundImage: `url(${itemNews.img})`,
            backgroundSize: "cover",
          }}
        >
          <Link to={`/news/${itemNews.id}`}>
            <div className="list-news-item__img__head">{itemNews.heading}</div>
          </Link>
          <div className="list-news-item__img__description">
            {itemNews.description}
          </div>
        </div>

        <div className="list-news-item__tags">
          {itemNews.tags.map((item, index) => (
            <Link to={`/news/tag/${item}`} key={index}>
              <div  onClick={() => setChooseTags(item)}>
                {item}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="list-news-item__rating-date">
        <NewsRating rating={itemNews.rating} />
        <div className="list-news-item__date">{a.toLocaleDateString()}</div>
      </div>
    </div>
  );
};

export default ListNewsItem;
