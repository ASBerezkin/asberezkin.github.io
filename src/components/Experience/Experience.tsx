import React, { FC } from 'react';

import amazing from '../../assets/amazingHiring-logo.svg';
import kodix from '../../assets/kodix-logo.png';
import mts from '../../assets/mtsbank-logo.jpeg';
import sber from '../../assets/sber-logo.png';

import './Experience.css';

export const Experience: FC = () => {
  return (
    <div className="experience">
      <h3 className="text text__size-l experience__title">Опыт работы</h3>
      <div className="experience__table grid">
        <div className="experience__table-td">
          <span className="text__size-s text text-opacity experience__table-td-display_none">
            Место
          </span>
        </div>
        <div className="experience__table-td">
          <span className="text__size-s text text-opacity experience__table-td-display_none">
            Роль
          </span>
        </div>
        <div className="experience__table-td">
          <span className="text__size-s text text-opacity experience__table-td-display_none">
            Опыт
          </span>
        </div>

        <div className="experience__table-td">
          <div className="experience__table-place">
            <span className="text text__size-m">AmazingHiring</span>
            <img className="experience__logo" src={amazing} alt="logo AmazingHiring company" />
          </div>
          <span className="text__size-s text text-opacity">Ноябрь 2022 по настоящее время</span>
        </div>
        <div className="experience__table-td">
          <span className="text text__size-m">Frontend Developer</span>
        </div>
        <div className="experience__table-td text text__size-m">
          <p>
            Занимаюсь разработкой портала для поиска IT-специалистов. Также разрабатываю Google
            Chrome Extension, чтобы пользователи могли воспользоваться нашей платформой, не заходя в
            нее. Что было сделано мной за время работы:
          </p>
          <ul>
            <li>Интеграция нашей платформы с новой ATS по API</li>
            <li>
              Привел к единому стилю несколько компонентов UI Kit, избавился от легаси кода,
              стандартизировал использование компонентов
            </li>
          </ul>
          <br />
          <p>
            Также разрабатываю новый промо-сайт на NextJS. Полностью весь фронтенд реализован мной:
            UIKit, все разводящие страницы сайта, все детальные страницы сайта, парсинг контента из
            CMS.
          </p>
          <p>Стек техонологий, которые используются на проектах:</p>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>TypeScript</li>
            <li>NextJS</li>
            <li>Strapi CMS</li>
            <li>CSS Modules</li>
          </ul>
        </div>

        <div className="experience__table-td">
          <div className="experience__table-place">
            <span className="text text__size-m">СберБанк</span>
            <img className="experience__logo" src={sber} alt="" />
          </div>
          <span className="text__size-s text text-opacity">Август 2021 — сентябрь 2022</span>
        </div>
        <div className="experience__table-td">
          <span className="text text__size-m">Frontend Team Lead</span>
        </div>
        <div className="experience__table-td text text__size-m">
          <p>
            Работал над небанковским продуктом -{' '}
            <a
              href="https://sberunity.ru/"
              target="_blank"
              rel="nofollow noreferrer"
              className="text text__size-m"
            >
              sberunity
            </a>
            . На данном проекте выстроил архитектуру проекта по Atomic-дизайну. Провел рефакторинг
            компонентов, участвовал в переводе компонентов на TS, разрабатывал новую
            функциональность на платформе, добавил мультиязычность на платформу. Распределял задачи
            в команде, давал оценку, проводил код-ревью коллег.
          </p>
          <p>Стек:</p>
          <ul>
            <li>React SPA (create-react-app)</li>
            <li>Redux</li>
            <li>TypeScript</li>
            <li>MaterialUI</li>
            <li>Formik + YUP Validation</li>
          </ul>
        </div>

        <div className="experience__table-td">
          <div className="experience__table-place">
            <span className="text text__size-m">МТС Банк</span>
            <img className="experience__logo" src={mts} alt="" />
          </div>
          <span className="text__size-s text text-opacity">Август 2018 — август 2021</span>
        </div>
        <div className="experience__table-td">
          <span className="text text__size-m">Frontend Developer</span>
        </div>
        <div className="experience__table-td text text__size-m">
          <ul>
            <li>Перенос сайта с Битрикс (PHP + JQuery) на React + Next.js</li>
            <li>Разработка компонентов на React + TS</li>
            <li>Интеграция стороннего SDK на сайт банка (TNPS)</li>
            <li>Интеграция формы с сервисом ГосУслуги.</li>
            <li>Работа с API Яндекс карт.</li>
            <li>Разбиение сайта на отдельные приложения (микрофронтенд)</li>
            <li>Рефакторинг кода и перенос его с JS на TS</li>
          </ul>
        </div>

        <div className="experience__table-td">
          <div className="experience__table-place">
            <span className="text text__size-m">Kodix Automotive</span>
            <img className="experience__logo" src={kodix} alt="" />
          </div>
          <span className="text__size-s text text-opacity">Август 2017 — август 2018</span>
        </div>
        <div className="experience__table-td">
          <span className="text text__size-m">HTML-верстальщик</span>
        </div>
        <div className="experience__table-td text text__size-m">
          <p>
            Верстка страниц для дилерских сайтов. Разработка промо-лендингов, участие в верстке
            внутреннего портала для клиентов платформы и исполнителей задач (тайм-трекер)
          </p>
        </div>
      </div>
    </div>
  );
};
