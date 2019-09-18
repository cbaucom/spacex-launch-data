import React from 'react';
import './App.styles.jsx';

import { GlobalStyle } from './global.styles';

import { AppWrapper, AppMain } from './App.styles.jsx';
import Header from './components/header/header.component';
import Launches from './components/launches/launches.component';

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Header />
      <AppMain>
        <Launches />
      </AppMain>
    </AppWrapper>
  );
};

export default App;
