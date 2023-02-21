import "./ListNews.css";
import ListNewsItem from "./ListNewsItem/ListNewsItem";
import PostService from "../../API/PostService";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

const ListNews = ({ topRef }) => {
  const [listNews, setListNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isNewsLoading, setIsNewsLoading] = useState(true);
  const lastElement = useRef();
  const [stateToggle, setStateToggle] = useState(true);
  const observer = useRef();
  const { id } = useParams();


  function  changeToggle() {
    setStateToggle(item => !item);
  }

  async function getNews() {

    setIsNewsLoading(true);
    const responce = PostService.getListNewsItem(id, currentPage).then(
      (resp) => {
        console.log(resp.data);
        currentPage < 1
          ? setListNews(resp.data)
          : setListNews((listNews) => [...listNews, ...resp.data]);
        setIsNewsLoading(false);
      }
    );
  }

  useEffect(() => {
    getNews();
  }, [currentPage, stateToggle]);

  useEffect(() => {
    setCurrentPage(0);
    handleBackClick();
  }, [id]);

  useEffect(() => {
    if (isNewsLoading) return;
    if (observer.current) observer.current.disconnect();
    let callback = (entries) => {
      if (entries[0].isIntersecting > currentPage) {
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
        <ListNewsItem
          itemNews={item}
          changeToggle={changeToggle}
          key={index}
        />
      ))}
      <div ref={lastElement} style={{ height: 1 }}></div>
    </div>
  );
};

export default ListNews;
