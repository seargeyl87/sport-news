import "./ModalMenu.css";

const ModalMenu = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal-menu active" : "modal-menu"}
      onClick={() => setActive(false)}
    >
      <div className="modal-menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-menu__auth">
          <div className="modal-menu__auth__head">Авторизация</div>
          <div className="modal-menu__auth__log-check">
            <div>Войти</div>
            <div>Регистрация</div>
          </div>
        </div>
        <div className="modal-menu__list-sports">
          <div className="modal-menu__list-sports__head">Виды спорта</div>
          <div className="modal-menu__list-sports__list">
            <div>Хоккей</div>
            <div>Футбол</div>
            <div>Баскетбол</div>
            <div>Теннис</div>
            <div>Биатлон</div>
            <div>Авто</div>
            <div>Бокс</div>
            <div>Фигурное катание</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalMenu;
