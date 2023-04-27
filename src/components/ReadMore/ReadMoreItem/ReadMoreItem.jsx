import "./ReadMoreItem.css";
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import { CalendarStrings } from "../../Common/Dates";

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
                <Moment calendar={CalendarStrings} date={itemNews.date}></Moment>
            </div>
            <div className="read-more__item__head">{itemNews.header1}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ReadMoreItem;
