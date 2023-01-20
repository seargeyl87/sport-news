import "./Comments.css";
import NewsRating from "../NewsRating/NewsRating";
import CommentsItem from "../CommentsItem/CommentsItem";

function Comments() {
  return (
    <div className="comments">
      <div className="comments__head">Comments</div>
      <div className="comments__add">
        <div className="comments__add__area">
          <input />
        </div>
        <div className="comments__add__button-rating">
          <NewsRating /> 
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
