import "./Menu.css";
import ModalMenu from "../ModalMenu/ModalMenu";
import { useState } from "react";
import ModalSearch from "../ModalSearch/ModalSearch";

const Menu = ({topRef}) => {
  const [modalMenuActive, setModalMenuActive] = useState(false);
  const [modalSearchActive, setModalSearchActive] = useState(false);


  function handleBackClick() {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="menu">
      <div className="menu_into" > 
        <ModalMenu active={modalMenuActive} setActive={setModalMenuActive}/>
        <ModalSearch
          active={modalSearchActive}
          setActive={setModalSearchActive}
          handleBackClick={handleBackClick}
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
            <img src="/img/logo.svg" />
          </div>
        </div>
        <div className="menu__search">
          <input
            defaultValue="search"
            onClick={() => {
              setModalSearchActive(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
