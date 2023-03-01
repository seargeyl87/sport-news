import "./ModalMenu.css";
import PostService from "../../API/PostService";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

const ModalMenu = ({ active, setActive }) => {
  const [listTags, setListTags] = useState([]);

  async function getTagsMenu() {
    const response = PostService.getTags().then((resp) => {
      setListTags(resp);
    });
  }

  useEffect(() => { 
    getTagsMenu();
  }, []);
 


  return (
    <div
      className={active ? "modal-menu active" : "modal-menu"}
      onClick={() => setActive(false)}
    >
      <div className="modal-menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-menu__tags">
          <div className="modal-menu__tags__log-check">
            {listTags.map((item, index) => (
              <Link to={`${item.url}`} key={index}>
                <div onClick={() => setActive(false)}>{item.text}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;
