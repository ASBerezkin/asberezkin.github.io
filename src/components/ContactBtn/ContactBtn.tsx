import React, { FC } from "react";
import "./contactBtn.css";
import { ReactComponent as Arrow } from "../../assets/contactArrow.svg";

export const ContactBtn: FC = () => {
  return (
    <div className="contactBtn__wrapper">
      <div className="contactBtn">
        {"Связаться со мной "
          .repeat(3)
          .split("")
          .map((letter, i) => (
            <span className="contactBtn__letter" key={`${i}-${letter}`}>
              {letter}
            </span>
          ))}
      </div>
      <Arrow className="contactBtn__arrow" />
    </div>
  );
};
