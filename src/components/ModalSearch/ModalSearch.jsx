import "./ModalSearch.css";
import ModalSearchContentItem from "./ModalSearchContentItem/ModalSearchContentItem";
import PostService from "../../API/PostService";
import { useState, useEffect } from "react";

const ModalSearch = ({ active, setActive, handleBackClick, searchValue }) => {
  const [newsModalSearch, setNewsModalSearch] = useState([]);

  async function getNewsModalSearch() {
    const response = PostService.getNewsModalSearch(searchValue).then((resp) => {
      setNewsModalSearch(resp.data);
    });
  }
 
  useEffect(() => {
    if(searchValue) {
      getNewsModalSearch();
    }
  }, [searchValue]); 

  return (
    <div
      className={active ? "modal-search active" : "modal-search"}
      onClick={() => setActive(false)}
    >
      <div
        className="modal-search_content"
        onClick={(e) => e.stopPropagation()}
      >
        {newsModalSearch.map((item, index) => (
          <ModalSearchContentItem itemNews={item} key={index} setActive={setActive} handleBackClick={handleBackClick}/>
        ))}
      </div>
    </div>
  );
};

export default ModalSearch;
