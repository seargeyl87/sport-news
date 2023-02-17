import "./Comments.css";
import CommentsItem from "./CommentsItem/CommentsItem";
import { useState, useEffect } from "react";
import PostService from "../../API/PostService";
import { useParams } from "react-router-dom";

const Comments = () => {
  const [listComments, setListComments] = useState([]);
  const [countLimitPageComments, setCountLimitPageComments] = useState(3); 
  const [currentPageComments, setCurrentPageComments] = useState(0); 
  const [amountQueryComments, setAmountQueryComments] = useState(1); 
  const [inputName, setInputName] = useState("");
  const [inputPost, setInputPost] = useState("");
  const [stateButton, setStateButton] = useState(true);
  const [stateReadMore, setStateReadMore] = useState(true)
  const { id } = useParams();

  async function getComment() {                    
    const response = PostService.getNewsComments(   //метод unshift вместо push, чтобы коммент запихнуть вначало
      id,
      countLimitPageComments,
      currentPageComments
    ).then((resp) => {
      if(resp.data.length ===0) {
        setStateReadMore(false)
      }
      currentPageComments < 1
        ? setListComments(resp.data)
        : setListComments((listComments) => [...listComments, ...resp.data]);
    });
  }

  async function postComment() {
    PostService.postNewsComment(inputName, inputPost, id).then(() => {
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
    setCurrentPageComments(0);
    getComment();
  }, [id]);

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
      {stateReadMore ? (
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
