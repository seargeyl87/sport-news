import "./ListNews.css";
import ListNewsItem from "./ListNewsItem/ListNewsItem";
import PostService from "../../API/PostService";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

const ListNews = ({ topRef }) => {
  const [listNews, setListNews] = useState([]);
  const [countLimitPage, setCountLimitPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);
  const [amountQuery, setAmountQuery] = useState(1);
  const [isNewsLoading, setIsNewsLoading] = useState(true);
  const lastElement = useRef();
  const observer = useRef();
  const { id } = useParams();

  async function getNews() {
    setIsNewsLoading(true);
    const responce = PostService.getListNewsItem(
      id,
      countLimitPage,
      currentPage
    ).then((resp) => {
      setAmountQuery(Math.ceil(resp.headers["x-total-count"] / countLimitPage));
      currentPage <= 1
        ? setListNews(resp.data)
        : setListNews((listNews) => [...listNews, ...resp.data]);
      setIsNewsLoading(false);
    });
  }

  useEffect(() => {
    getNews();
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    getNews();
    handleBackClick();
  }, [id]);

  useEffect(() => {
    if (isNewsLoading) return;
    if (observer.current) observer.current.disconnect();
    let callback = (entries, observer) => {
      if (entries[0].isIntersecting && amountQuery > currentPage) {
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
