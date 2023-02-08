import "./ReadMoreItem.css";
import { Link } from "react-router-dom";

const ReadMoreItem = ({ itemNews, handleBackClick }) => {
  return (
    <div className="read-more__item">
      <div className="read-more__item__pict-tags-date">
        <div
          className="read-more__item__pict"
          style={{
            backgroundImage: `url(${itemNews.img})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="read-more__item__tags"></div>
        <div className="read-more__item__date"></div>
      </div>
      <div className="read-more__item__head-description">
        <Link to={`/news/${itemNews.id}`}>
          <div className="read-more__item__head" onClick={handleBackClick}>{itemNews.heading}</div>
        </Link>
        <div className="read-more__item__description">
          {itemNews.description}
        </div>
      </div>
    </div>
  );
};

export default ReadMoreItem;
