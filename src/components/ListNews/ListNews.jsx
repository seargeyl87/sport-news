import "./ListNews.css";
import ListNewsItem from "./ListNewsItem/ListNewsItem";
import PostService from "../../API/PostService";
import { useState, useEffect, useMemo } from "react";
 
const ListNews = () => {
  const [listNews, setListNews] = useState([]);
  const [countLimitPage, setCountLimitPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [amountQuery, setAmountQuery] = useState(1); // всего запросов(страниц)
  const [chooseTags, setChooseTags] = useState("");

  async function getNews() {
    const responce = PostService.getListNewsItem(
      chooseTags,
      countLimitPage,
      currentPage
    ).then((resp) => {
      setAmountQuery(Math.ceil(resp.headers["x-total-count"] / countLimitPage));
      currentPage ===1 ? setListNews(resp.data) : setListNews((listNews) => [...listNews, ...resp.data]);
      //setCurrentPage(currentPage + 1);
    });
  }


  // async function getFilterTags() {
  //   const responce = PostService.getListNewsItem(
  //     chooseTags,
  //     countLimitPage,
  //     1
  //   ).then((resp) => {
  //     setAmountQuery(Math.ceil(resp.headers["x-total-count"] / countLimitPage));
  //     setListNews(resp.data);
  //     setCurrentPage(2);
  //   });
  // }

  useEffect(() => {
    getNews();
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    getNews();
  }, [chooseTags]);

  


  return (
    <div className="list-news">
      {listNews.map((item, index) => (
        <ListNewsItem
          itemNews={item}
          key={index}
          setChooseTags={setChooseTags}
        />
      ))}
      {amountQuery > currentPage ? (
        <button onClick={() => setCurrentPage(currentPage + 1)}>раскрыть</button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ListNews;
