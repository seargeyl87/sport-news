import "./ReadMoreItem.css";
import { Link } from "react-router-dom";

const ReadMoreItem = ({ itemNews, handleBackClick }) => {
  console.log(itemNews.date.substring(0, 10))
  return (
    <div className="read-more__item">
      <Link to={`/news/${itemNews.id}`}>
        <div
          className="read-more__item__pict" 
          style={{
            backgroundImage: `url(${itemNews.imageUrl})`,
            backgroundSize: "cover",
          }} 
          onClick={handleBackClick}
        >
          <div className="read-more__item__head-date">
            <div className="read-more__item__date">{itemNews.date.substring(0, 10)}</div>
            <div className="read-more__item__head">
              {itemNews.header1}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ReadMoreItem;
