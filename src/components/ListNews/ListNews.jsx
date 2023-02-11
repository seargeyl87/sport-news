import "./ListNews.css"; 
import ListNewsItem from "./ListNewsItem/ListNewsItem";
import PostService from "../../API/PostService";
import { useState, useEffect, useRef } from "react";

const ListNews = ({topRef}) => { 
  const [listNews, setListNews] = useState([]);
  const [countLimitPage, setCountLimitPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [amountQuery, setAmountQuery] = useState(1); // всего запросов(страниц)
  const [chooseTags, setChooseTags] = useState("");
  const [isNewsLoading, setIsNewsLoading] = useState(true);
  const lastElement = useRef();
  const observer = useRef();

  async function getNews() {
    setIsNewsLoading(true);
    const responce = PostService.getListNewsItem(
      chooseTags,
      countLimitPage,
      currentPage
    ).then((resp) => {
      setAmountQuery(Math.ceil(resp.headers["x-total-count"] / countLimitPage));
      currentPage === 1
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
  }, [chooseTags]);

  useEffect(() => {
    if(isNewsLoading) return;
    if(observer.current) observer.current.disconnect();
    let callback = (entries, observer) => {
      if (entries[0].isIntersecting && amountQuery > currentPage) {
        setCurrentPage(currentPage + 1)      }
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
          key={index}
          setChooseTags={setChooseTags}
        />
      ))}
      <div ref={lastElement} style={{ height: 1}}></div>
    </div>
  );
};

export default ListNews;
