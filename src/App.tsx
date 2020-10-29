import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ThemeProvider } from '@material-ui/core';

import MainPlayer from './player/main-player';
import darkTheme from './theme-config/dark-theme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <MainPlayer id={1} />
    </ThemeProvider>

  );
}

export default App;
