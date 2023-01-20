import "./ModalSearch.css";

function ModalSearch({ active, setActive }) {
  return (
    <div className= {active ? "modal-search active" :  "modal-search"}>
      <div className="modal-search__content">
        <div className="modal-search__content__search-close">
          <div className="modal-search__content__search">
              <input/>
          </div>
          <div className="modal-search__content__close" onClick={() => setActive(false)}>X</div>
        </div>
      </div>
    </div>
  );
}

export default ModalSearch;
