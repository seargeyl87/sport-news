import "./Menu.css";
import ModalMenu from "../ModalMenu/ModalMenu";
import { useState } from "react";
import ModalSearch from "../ModalSearch/ModalSearch";
import { Link } from "react-router-dom"; 


const Menu = ({ topRef }) => {
  const [modalMenuActive, setModalMenuActive] = useState(false);
  const [modalSearchActive, setModalSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  function handleBackClick() {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const changeValueSearch = (e) => {
    setModalSearchActive(true);
    if (!e.target.value) {
      setSearchValue("");
    } else {
      setSearchValue(e.target.value);
    }
  };
  console.log(searchValue)

  return (
    <div className="menu">
      <div className="menu_into">
        <ModalMenu active={modalMenuActive} setActive={setModalMenuActive} />
        <ModalSearch
          active={modalSearchActive}
          setActive={setModalSearchActive}
          handleBackClick={handleBackClick}
          searchValue={searchValue}
        />
        <div className="menu__button-logo">
          <div
            className="menu__button"
            onClick={() => setModalMenuActive(true)}
          >
            <div className="menu__button_item"></div>
            <div className="menu__button_item"></div>
            <div className="menu__button_item"></div>
          </div>
          <div className="menu__logo">
          <Link to="/">
            <img src="/img/logo.svg" />
            </Link>
          </div>
        </div>
        <div className="menu__search">
          <input
            type="text"
            name="search"
            placeholder="Search"
            value={searchValue}
            onChange={changeValueSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
