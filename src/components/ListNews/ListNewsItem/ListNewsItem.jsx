import "./ListNewsItem.css";
import NewsRating from "../../NewsRating/NewsRating";
import {Link} from 'react-router-dom';

const ListNewsItem = () => {
  let a = new Date("2017-01-26");
  return (
    <div className="list-news-item">
      <div className="list-news-item__img-tags">
        <div
          className="list-news-item__img"
          style={{
            backgroundImage: `url("img/ronaldo.jpeg")`,
            backgroundSize: "cover",
          }}
        >
            <Link to="/news/15">
            <div className="list-news-item__img__head">
            «Слишком просто делать Роналду козлом отпущения, когда есть и другие
            проблемы» Энди Коул об уходе Криштиану
          </div>
            </Link>
          <div className="list-news-item__img__description">
            Энди Коул высказался об уходе Криштиану Роналду из «Манчестер★
            Юнайтед».
          </div>
        </div>
        <div className="list-news-item__tags">
          <div>Месси</div>
          <div>Роналду</div>
          <div>Коул</div>
          <div>Манчестер Юнайтед</div>
        </div>
      </div>
      <div className="list-news-item__rating-date">
        <NewsRating />
        <div className="list-news-item__date">{a.toLocaleDateString()}</div>
      </div>
    </div>
  );
}

export default ListNewsItem;
