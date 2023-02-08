import "./NewsDetails.css";
import Comments from "../Comments/Comments";
import ReadMore from "../ReadMore/ReadMore";
import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import PostService from "../../API/PostService";

const NewsDetails = ({ topRef }) => { 
  const [newsItem, setNewsItem] = useState([]);
  const [currentNewsId, setCurrentNewsId] = useState(0);
  const { id } = useParams();

  async function getNewsItem() {
    const response = PostService.getOpendNews(id).then((resp) => {
      setNewsItem(resp);
      setCurrentNewsId(resp.newsId);
    });
  }


  function handleBackClick() {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useMemo(() => {
    getNewsItem();
  }, [id]);

  return (
    <div className="news-opened">
      <div
        className="news-opened__pict"
        style={{
          backgroundImage: `url(${newsItem.img})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="news-opened__head">{newsItem.heading}</div>
      <div className="news-opened__description">{newsItem.description}</div>
      <Comments newsId={currentNewsId} id={id}/>
      <ReadMore handleBackClick={handleBackClick} />
    </div>
  );
};

export default NewsDetails;
