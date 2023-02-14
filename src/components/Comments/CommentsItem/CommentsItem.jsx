import "./CommentsItem.css";

const CommentsItem = ({ comment }) => {
  return (
    <div className="comments__item">
      <div className="profile">
        <div className="profile__img">
          <img src="/img/messi.jpeg" />
        </div>
        <div className="profile__name">{comment.name}</div>
      </div>
      <div className="comment">{comment.text}</div>
    </div>
  );
};

export default CommentsItem;
