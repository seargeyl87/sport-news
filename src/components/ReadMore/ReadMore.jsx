import "./ReadMore.css";
import ReadMoreItem from "./ReadMoreItem/ReadMoreItem";
import PostService from "../../API/PostService";
import { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";
import axios from "axios";



const ReadMore = ({ handleBackClick }) => {
  const [newsReadMore, setReadMore] = useState([]);
  const { id } = useParams();




  async function getReadMore() {
    const response = PostService.getNewsReadMore(id).then((resp) => {
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
