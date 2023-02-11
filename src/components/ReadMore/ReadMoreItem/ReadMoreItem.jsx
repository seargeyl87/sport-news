import "./ReadMoreItem.css";
import { Link } from "react-router-dom";

const ReadMoreItem = ({ itemNews, handleBackClick }) => {
  console.log(itemNews.date);

  // setDate((new Date(resp.date)).toLocaleDateString());

  return (
    <div className="read-more__item">
        <div
          className="read-more__item__pict"
          style={{
            backgroundImage: `url(${itemNews.img})`,
            backgroundSize: "cover",
          }}
        >
          <div className="read-more__item__head-date">
          <div className="read-more__item__date">{itemNews.date}</div>
            <Link to={`/news/${itemNews.id}`}>
              <div className="read-more__item__head" onClick={handleBackClick}>
                {itemNews.heading}
              </div>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default ReadMoreItem;
