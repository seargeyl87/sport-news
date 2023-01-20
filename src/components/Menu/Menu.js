import './Menu.css';
import ModalMenu from "../ModalMenu/ModalMenu";
import {useState} from "react";
import ModalSearch from "../ModalSearch/ModalSearch";


function  Menu() {
    const [modalMenuActive, setModalMenuActive] = useState(false)
    const [modalSearchActive, setModalSearchActive] = useState(false);


    return (
        <div className="menu">
            <ModalMenu active={modalMenuActive} setActive={setModalMenuActive}/>
            <ModalSearch active={modalSearchActive} setActive={setModalSearchActive}/>
            <div className="menu__button-logo">
                <div className="menu__button" onClick={() => setModalMenuActive(true)}>
                   <div className="menu__button_item"></div>
                   <div className="menu__button_item"></div>
                   <div className="menu__button_item"></div>
                </div>
                <div className="menu__logo">
                    <img src="img/sports.png"/>
                </div>
            </div>
            <div className="menu__search">
                <input defaultValue="search" onClick={() => {setModalSearchActive(true)}}/>
            </div>
        </div>
    )

}

export default Menu;