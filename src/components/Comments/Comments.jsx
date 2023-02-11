import "./Comments.css";
import CommentsItem from "./CommentsItem/CommentsItem";
import { useState, useEffect } from "react";
import PostService from "../../API/PostService";
import axios from "axios";

const Comments = ({ newsId, id }) => {
  const [listComments, setListComments] = useState([]);
  const [countLimitPageComments, setCountLimitPageComments] = useState(1); // количество комментов при 1 запросе (на 1 странице)
  const [currentPageComments, setCurrentPageComments] = useState(1); // текущая страница
  const [amountQueryComments, setAmountQueryComments] = useState(1); // всего запросов(страниц)
  const [inputName, setInputName] = useState("");
  const [inputPost, setInputPost] = useState("");
  let [stateButton, setStateButton] = useState(true);

  async function getComment() {
    const response = PostService.getNewsComments(
      newsId,
      countLimitPageComments,
      currentPageComments
    ).then((resp) => {
      setAmountQueryComments(
        Math.ceil(resp.headers["x-total-count"] / countLimitPageComments)
      );
      currentPageComments === 1
        ? setListComments(resp.data)
        : setListComments((listComments) => [...listComments, ...resp.data]);
    });
  }


  async function postComment() {
    axios
      .post(`http://localhost:3000/comments`, {
        name: inputName,
        text: inputPost,
        newsId: newsId,
      })
      .then((resp) => {
        getComment();
        setInputName("");
        setInputPost("");
      });
  }

  useEffect(() => {
    if (inputName && inputPost) {
      setStateButton(false);
    } else {
      setStateButton(true);
    }
  }, [inputName, inputPost]);

  useEffect(() => {
    getComment();
  }, [currentPageComments]);

  useEffect(() => {
    setCurrentPageComments(1);
    getComment();
  }, [newsId, id]);



  const changeName = (e) => {
    if (!e.target.value) {
      setInputName("");
    } else {
      setInputName(e.target.value);
    }
  };

  const changePost = (e) => {
    if (!e.target.value) {
      setInputPost("");
    } else {
      setInputPost(e.target.value);
    }
  };


  return (
    <div className="comments">
      <div className="comments__head">Comments</div>
      <div className="comments__add">
        <div className="comments__add__area">
          <div className="comments__add__area__name">
            <input
              type="text"
              name="name"
              value={inputName}
              placeholder="Name"
              onChange={changeName}
            />
          </div>
          <div className="comments__add__area__comment">
            <input
              type="text"
              name="post"
              value={inputPost}
              placeholder="Comment"
              onChange={changePost}
            />
          </div>
          <div className="comments__add__area__button">
          <button onClick={postComment} disabled={stateButton}>
            Add comment
          </button>
        </div>
        </div>
      </div>
      <div className="comments__list">
        {listComments.map((item, index) => (
          <CommentsItem comment={item} key={index} />
        ))}
      </div>
      {amountQueryComments > currentPageComments ? (
        <button onClick={() => setCurrentPageComments(currentPageComments + 1)}>
          read more
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Comments;
