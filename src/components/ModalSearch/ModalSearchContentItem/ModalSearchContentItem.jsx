import "./ModalSearchContentItem.css";
import { Link } from "react-router-dom";

const ModalSearchContentItem = ({ itemNews, setActive }) => {
  const closeModal = () => {
    setActive(false)
  }
  return (
    <div className="modal-search_content-item">
      <div className="content-item-pict">
        <div
          className="content-item-pict-into"
          style={{
            backgroundImage: `url(${itemNews.img})`,
          }}
        ></div>
      </div>

      <div className="content-item-news">
        <Link to={`/news/${itemNews.id}`}>
          <div className="content-item-news-head" onClick={() => closeModal()}>{itemNews.heading}</div>
        </Link>
        <div className="content-item-news-description">
          {itemNews.description}
        </div>
      </div>
    </div>
  );
};

export default ModalSearchContentItem;
