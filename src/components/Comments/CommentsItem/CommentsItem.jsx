import "./CommentsItem.css";

const CommentsItem = () => {
  return (
    <div className="comments__item">
      <div className="profile">
        <div className="profile__img">
          <img src="/img/messi.jpeg" />
        </div>
        <div className="profile__name">leo messi</div>
      </div>
      <div className="comment">
        В целом МЮ смотрится как команда. В коем веке поставили неплохого
        тренера. И я думаю БЧК их вынесет в ЛЕ. В АПЛ возможно в тройку попадут
      </div>
    </div>
  );
}

export default CommentsItem;
