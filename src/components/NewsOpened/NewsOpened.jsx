import "./NewsOpened.css";
import Comments from "../Comments/Comments";
import ReadMore from "../ReadMore/ReadMore";


const NewsOpened = () => {
  return (
    <div className="news-opened">
      <div
        className="news-opened__pict"
        style={{
          backgroundImage: `url("../img/ronaldo.jpeg")`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="news-opened__head">
        «Слишком просто делать Роналду козлом отпущения, когда есть и другие
        проблемы» Энди Коул об уходе Криштиану
      </div>
      <div className="news-opened__description">
        Энди Коул высказался об уходе Криштиану Роналду из «Манчестер★ Юнайтед».
      </div>
      <Comments />
      <ReadMore/>
    </div>
  );
}

export default NewsOpened;
