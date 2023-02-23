import "./ListNewsItem.css";
import { Link } from "react-router-dom";

const ListNewsItem = ({ itemNews, changeToggle }) => {
  return (
    <div className="list-news-item">
      {itemNews.content === null ? (
        <div className="list-news-item__img-tags">
          <Link to={`/news/${itemNews.id}`}>
            <div
              className="list-news-item__img"
              style={{
                backgroundImage: `url(${itemNews.imageUrl})`,
                backgroundSize: "cover",
              }}
            >
              <div className="list-news-item__date">
                {new Date(Date.now()).toLocaleDateString() ===
                new Date(itemNews.date).toLocaleDateString()
                  ? itemNews.date.substring(11, 16)
                  : new Date(itemNews.date)
                      .toLocaleString()
                      .substring(0, 17)}
              </div>

              <div className="list-news-item__img__head">
                {itemNews.header1}
              </div>
              <div className="list-news-item__img__description">
                {itemNews.description}
              </div>
            </div>
          </Link>

          <div className="list-news-item__tags">
            {itemNews.tags.map((item, index) => (
              <Link to={`/news/tag/${item}`} key={index}>
                <div onClick={changeToggle}>{item}</div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="img-tags-description-type-2">
          <div
            className="img-tags-description-type-2__img"
            style={{
              backgroundImage: `url(${itemNews.imageUrl})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="tags-description-type-2">
            <div className="tags-description-type-2__tags">
              {itemNews.tags.map((item, index) => (
                <Link to={`/news/tag/${item}`} key={index}>
                  <div>{item}</div>
                </Link>
              ))}
            </div>
            <div className="tags-description-type-2__date">
              {new Date(Date.now()).toLocaleDateString() ===
              new Date(itemNews.date).toLocaleDateString()
                ? itemNews.date.substring(11, 16)
                : new Date(itemNews.date).toLocaleString().substring(0, 17)}
            </div>

            <Link to={`/news/${itemNews.id}`}>
              <div className="tags-description-type-2__head">
                {itemNews.header1}
              </div>
            </Link>
            <div className="tags-description-type-2__description">
              {itemNews.description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListNewsItem;
