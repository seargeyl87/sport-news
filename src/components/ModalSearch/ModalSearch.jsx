import "./ModalSearch.css";
import ModalSearchContentItem from "./ModalSearchContentItem/ModalSearchContentItem";

const ModalSearch = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal-search active" : "modal-search"}
      onClick={() => setActive(false)}
    >
      <div
        className="modal-search_content"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalSearchContentItem />
        <ModalSearchContentItem />
        <ModalSearchContentItem />
      </div>
    </div>
  );
};

export default ModalSearch;
