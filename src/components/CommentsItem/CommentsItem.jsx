import "./CommentsItem.css";

function CommentsItem() {
  return (
    <div className="comments__item">
      <div className="comments__item__profile">
        <div className="comments__item__profile__img">
          <img src="/img/messi.jpeg" />
        </div>
        <div className="comments__item__profile__name">leo messi</div>
      </div>
      <div className="comments__item__comment">
        В целом МЮ смотрится как команда. В коем веке поставили неплохого
        тренера. И я думаю БЧК их вынесет в ЛЕ. В АПЛ возможно в тройку попадут
      </div>
    </div>
  );
}

export default CommentsItem;
