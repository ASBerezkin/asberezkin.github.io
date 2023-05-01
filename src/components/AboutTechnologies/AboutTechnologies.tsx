import React from 'react';

import { badges } from './constants';

import './aboutTechnologies.css';

export const AboutTechnologies = () => {
  return (
    <>
      <div className="technologies">
        <span className="text text__size-m text-opacity technologies__subheader">
          Frontend-разработчик
        </span>
        <h1 className="text text__size-xl technologies__header">Александр Березкин</h1>
      </div>
      <div className="badges">
        {badges.map((badge) => (
          <div key={badge} className="badges__item">
            <span className="text text__size-m">{badge}</span>
          </div>
        ))}
      </div>
    </>
  );
};
