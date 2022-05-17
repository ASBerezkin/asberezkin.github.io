import { FC, useContext, useState } from "react";
import "./switcher.css";
import { ThemeContext } from "../../App";

export const Switcher: FC = () => {
  const [checked, setChecked] = useState(false);
  const { setTheme } = useContext(ThemeContext);

  const handleChange = () => {
    setChecked((prevState) => !prevState);
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className="slider round" />
    </label>
  );
};
