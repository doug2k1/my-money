import React, { useState, FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  StylesProvider,
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import { teal, lime } from '@material-ui/core/colors';
import MainMenu from './components/MainMenu';
import Page from './components/Page';
import MainAppBar from './components/MainAppBar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: lime[500],
    },
  },
});

const App: FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = (open: boolean) => () => {
    setNavOpen(open);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <Router>
            <MainAppBar onMenuClick={toggleNav(true)} />
            <MainMenu open={navOpen} onClose={toggleNav(false)} />
            <Page />
          </Router>
        </StylesProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default App;
