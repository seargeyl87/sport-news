import "./ReadMore.css";
import ReadMoreItem from "./ReadMoreItem/ReadMoreItem";
import PostService from "../../API/PostService";
import { useState, useEffect } from "react";

const ReadMore = ({handleBackClick}) => {
  const [newsReadMore, setReadMore] = useState([]);
  const [countLimitPageReadMore, setCountLimitPageReadMore] = useState(1);    // количество комментов при 1 запросе (на 1 странице)
  const [currentPageReadMore, setCurrentPageReadMore] = useState(1);          // текущая страница
  const [amountQueryReadMore, setAmountQueryReadMore] = useState(1);          // всего запросов(страниц)

  async function getReadMore() {
    const response = PostService.getNewsReadMore().then((resp) => {
      setReadMore(resp.data);
    });
  }
 
  useEffect(() => {
    getReadMore();
  }, []);


  return (
    <div className="read-more">
      <div className="read-more__head">Read more</div>
      {newsReadMore.map((item, index) => (
        <ReadMoreItem itemNews={item} key={index} handleBackClick={handleBackClick}/>
      ))}
    </div>
  );
};

export default ReadMore;
