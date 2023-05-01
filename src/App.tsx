import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

import { AboutTechnologies } from './components/AboutTechnologies/AboutTechnologies';
import { ContactBtn } from './components/ContactBtn/ContactBtn';
import { Experience } from './components/Experience/Experience';
import { FrontedDeveloper } from './components/FrontedDeveloper/FrontedDeveloper';
import { Grid } from './components/Grid/Grid';
import { Header } from './components/Header/Header';

import './normalize.css';
import './index.css';

export const ThemeContext = createContext<{
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}>({ theme: 'light', setTheme: () => undefined });

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App theme-${theme}`}>
        <Grid>
          <Header />
          <AboutTechnologies />
          <ContactBtn />
          <FrontedDeveloper />
          <Experience />
        </Grid>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
