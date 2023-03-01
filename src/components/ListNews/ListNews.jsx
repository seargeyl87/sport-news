import "./ListNews.css";
import ListNewsItem from "./ListNewsItem/ListNewsItem";
import PostService from "../../API/PostService";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

const ListNews = ({ topRef }) => {
  const [listNews, setListNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isNewsLoading, setIsNewsLoading] = useState(true);
  const [newsQuery, setNewsQuery] = useState(true);
  const lastElement = useRef();
  const observer = useRef();
  const { id } = useParams();


  console.log(listNews)
  console.log(id);
  console.log(currentPage)

   function getNews() {
    setIsNewsLoading(true);
    const responce = PostService.getListNewsItem(id, currentPage).then(
      (resp) => {
        if (resp.data.length) {
          setNewsQuery(true);
        } else {
          setNewsQuery(false);
        }
        currentPage < 1
          ? setListNews(resp.data)
          : setListNews((listNews) => [...listNews, ...resp.data]);
        setIsNewsLoading(false);
      }
    );
  }

  useEffect(() => {
      getNews();
  }, [currentPage]);

  useEffect(() => {
      setCurrentPage(0);
      handleBackClick();
  }, [id]);

  useEffect(() => {
    if (isNewsLoading) return;
    if (observer.current) observer.current.disconnect();
    const callback = (entries) => {
      console.log(entries[0])

      if (entries[0].isIntersecting && newsQuery) {
          setCurrentPage(currentPage + 1);
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [isNewsLoading]);

  function handleBackClick() {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="list-news">
      {listNews.map((item, index) => (
        <ListNewsItem itemNews={item} key={index} />
      ))}
      <div ref={lastElement} style={{ height: 1 }}></div>
    </div>
  );
};

export default ListNews;
