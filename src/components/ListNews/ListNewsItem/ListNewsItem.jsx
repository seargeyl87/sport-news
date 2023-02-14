import "./ListNewsItem.css";
import { Link } from "react-router-dom";

const ListNewsItem = ({ itemNews }) => {
  const a = new Date(itemNews.date);

  return (
    <div className="list-news-item">
      {itemNews.type === 1 ? (
        <div className="list-news-item__img-tags">
          <div
            className="list-news-item__img"
            style={{
              backgroundImage: `url(${itemNews.img})`,
              backgroundSize: "cover",
            }}
          >
            <div className="list-news-item__date">{a.toLocaleDateString()}</div>

            <Link to={`/news/${itemNews.id}`}>
              <div className="list-news-item__img__head">
                {itemNews.heading}
              </div>
            </Link>
            <div className="list-news-item__img__description">
              {itemNews.description}
            </div>
          </div>

          <div className="list-news-item__tags">
            {itemNews.tags.map((item, index) => (
              <Link to={`/news/tag/${item}`} key={index}>
                <div>{item}</div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="img-tags-description-type-2">
          <div
            className="img-tags-description-type-2__img"
            style={{
              backgroundImage: `url(${itemNews.img})`,
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
                {itemNews.heading}
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
