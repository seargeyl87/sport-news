import "./ReadMoreItem.css";

function ReadMoreItem() {
  return (
    <div className="read-more__item">
      <div className="read-more__item__pict-tags-date">
        <div
          className="read-more__item__pict"
          style={{
            backgroundImage: `url("../img/kantona.jpeg")`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="read-more__item__tags"></div>
        <div className="read-more__item__date"></div>
      </div>
      <div className="read-more__item__head-description">
        <div className="read-more__item__head">
          Эрик Кантона: «При Фергюсоне «МЮ» был главным клубом мира и мог
          подписать кого угодно. Сейчас лучшие не поедут в «Юнайтед» – они хотят
          побеждать»
        </div>
        <div className="read-more__item__description">
          Экс-форвард Эрик Кантона оценил привлекательность «Манчестер Юнайтед»
          для топ-игроков.
        </div>
      </div>
    </div>
  );
}

export default ReadMoreItem;
