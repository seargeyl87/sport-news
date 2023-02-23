import "./ReadMoreItem.css";
import { Link } from "react-router-dom";

const ReadMoreItem = ({ itemNews, handleBackClick }) => {
  // console.log(new Date(Date.now()).toLocaleDateString()); // сегодня дата
  // console.log(new Date(itemNews.date).toLocaleDateString()); // дата поста
  // console.log(itemNews.date.substring(11, 16)); //  время поста

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
            <div className="read-more__item__date">
              {new Date(Date.now()).toLocaleDateString() ===
              new Date(itemNews.date).toLocaleDateString()
                ? itemNews.date.substring(11, 16)
                : new Date(itemNews.date).toLocaleString().substring(0, 17)}
            </div>
            <div className="read-more__item__head">{itemNews.header1}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ReadMoreItem;
