import "./ReadMore.css";
import ReadMoreItem from "./ReadMoreItem/ReadMoreItem";
import PostService from "../../API/PostService";
import { useState, useEffect } from "react";

const ReadMore = ({ handleBackClick }) => {
  const [newsReadMore, setReadMore] = useState([]);

  async function getReadMore() {
    const response = PostService.getNewsReadMore().then((resp) => {
      setReadMore(resp);
    });
  }

  useEffect(() => {
    getReadMore();
  }, []);

  return (
    <div className="read-more">
      <div className="read-more__head">Other news</div>
      {newsReadMore.map((item, index) => (
        <ReadMoreItem
          itemNews={item}
          key={index}
          handleBackClick={handleBackClick}
        />
      ))}
    </div>
  );
};

export default ReadMore;
