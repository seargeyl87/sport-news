import "./NewsDetails.css";
import Comments from "../Comments/Comments";
import ReadMore from "../ReadMore/ReadMore";
import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import PostService from "../../API/PostService";
import { Link } from "react-router-dom"; 

const NewsDetails = ({ topRef }) => { 
  const [newsItem, setNewsItem] = useState([]);
  const [currentNewsId, setCurrentNewsId] = useState(0);
  const [listTags, setListTags] = useState([])
  const [date, setDate] = useState()
  const { id } = useParams();


  async function getNewsItem() {
    const response = PostService.getOpendNews(id).then((resp) => {
      setNewsItem(resp);
      setCurrentNewsId(resp.newsId); 
      setListTags(resp.tags);
      setDate((new Date(resp.date)).toLocaleDateString());
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
      
      <div className="news-opened__tags-date">
        <div className="news-opened__tags">

          {listTags.map((item, index) => 
                      <Link to={`/news/tag/${item}`} key={index}>
                           <div key={index}>{item}</div>
                    </Link>
          )}
        </div>
        <div className="news-opened__date">{date}</div>
      </div>

      <div className="news-opened__head">{newsItem.heading}</div>
      <div className="news-opened__description">{newsItem.description}</div>
      <Comments newsId={currentNewsId}/>
      <ReadMore handleBackClick={handleBackClick} />
    </div>
  );
};

export default NewsDetails;
