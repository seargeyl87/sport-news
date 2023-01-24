import "./Comments.css";
import CommentsItem from "./CommentsItem/CommentsItem";
import NewsRatingVote from "../NewsRatingVote/NewsRatingVote";

const Comments = () => {
  return (
    <div className="comments">
      <div className="comments__head">Comments</div>
      <div className="comments__add">
        <div className="comments__add__area"> 
          <input />
        </div>
        <div className="comments__add__button-rating">
          <NewsRatingVote /> 
          <button>Add comment</button>
        </div>
      </div>
      <div className="comments__list">
      <CommentsItem/>
      <CommentsItem/>
      <CommentsItem/>
      <CommentsItem/>
      </div>
    </div>
  );
}

export default Comments;
