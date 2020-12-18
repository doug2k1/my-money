import React, { useState, FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Page from './components/Page';
import MainAppBar from './components/MainAppBar';

const App: FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = (open: boolean) => () => {
    setNavOpen(open);
  };

  return (
    <BrowserRouter>
      <MainAppBar onMenuClick={toggleNav(true)} />
      <MainMenu open={navOpen} onClose={toggleNav(false)} />
      <Page />
    </BrowserRouter>
  );
};

export default App;
