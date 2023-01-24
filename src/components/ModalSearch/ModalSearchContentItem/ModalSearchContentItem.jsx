import "./ModalSearchContentItem.css";

const ModalSearchContentItem = () => {
  return (
    <div className="modal-search_content-item">
      <div className="content-item-pict">
        <div
          className="content-item-pict-into"
          style={{
            backgroundImage: `url("../img/ronaldo.jpeg")`,
          }}
        ></div>
      </div>

      <div className="content-item-news">
        <div className="content-item-news-head">
          «Слишком просто делать Роналду козлом отпущения, когда есть и другие
          проблемы» Энди Коул об уходе Криштиану
        </div>
        <div className="content-item-news-description">
          Энди Коул высказался об уходе Криштиану Роналду из «Манчестер★
          Юнайтед».
        </div>
      </div>
    </div>
  );
};

export default ModalSearchContentItem;
