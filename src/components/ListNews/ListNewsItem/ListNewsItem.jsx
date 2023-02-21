import "./ListNewsItem.css";
import { Link } from "react-router-dom";

const ListNewsItem = ({ itemNews, changeToggle }) => {
  const a = new Date(itemNews.date);

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
                {a.toLocaleDateString()}
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
              {a.toLocaleDateString()}
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
