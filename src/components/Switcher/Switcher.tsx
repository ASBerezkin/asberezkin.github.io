import { FC, useState } from "react";
import "./switcher.css";

type TSwitcherProps = {
  children?: React.ReactNode;
};

export const Switcher: FC<TSwitcherProps> = ({ children }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className="slider round"></span>
    </label>
  );
};
