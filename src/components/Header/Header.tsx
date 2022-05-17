import "./header.css";
import Clock from "react-live-clock";
import { Switcher } from "../Switcher/Switcher";
import photo from "../../assets/photo.png";

export const Header = () => {
  return (
    <>
      <span className="text text__size-m header__logo">A.Berёzkin</span>
      <img className="header__photo" src={photo} alt="me on basketball" />
      <div className="header__column">
        <div className="header__switcherWrapper">
          <span className="text text__size-m">
            Москва, <Clock format="HH:mm" ticking />
          </span>
          <Switcher />
        </div>
        <p className="header__description text text__size-s">
          27 лет, из которых 4 года — работа разработчиком
        </p>
      </div>
      <span className="header__contact text text__size-m">Связаться</span>
    </>
  );
};
