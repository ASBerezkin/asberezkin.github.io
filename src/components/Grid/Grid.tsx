import React, { FC } from 'react';

import './grid.css';

type TGridProps = {
  children?: React.ReactNode;
};

export const Grid: FC<TGridProps> = ({ children }) => {
  return <div className="grid">{children}</div>;
};
