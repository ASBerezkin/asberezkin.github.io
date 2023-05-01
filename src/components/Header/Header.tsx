import Clock from 'react-live-clock';

import photo from '../../assets/photo.png';
import { Switcher } from '../Switcher/Switcher';

import './header.css';

export const Header = () => {
  const dateNow = new Date();
  const birthDateYear = dateNow.getFullYear() - new Date(1994, 5, 9).getFullYear();
  const experienceDevelopment = dateNow.getFullYear() - 2018;

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
          {birthDateYear} лет, из которых {experienceDevelopment} лет — работа разработчиком
        </p>
      </div>
      <span className="header__contact text text__size-m">Связаться</span>
    </>
  );
};
