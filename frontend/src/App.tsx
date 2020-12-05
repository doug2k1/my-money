import React, { useState, FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  StylesProvider,
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import { blue, green } from '@material-ui/core/colors';
import MainMenu from './components/MainMenu';
import Page from './components/Page';
import MainAppBar from './components/MainAppBar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[600],
    },
    secondary: {
      main: green[600],
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
          <BrowserRouter>
            <MainAppBar onMenuClick={toggleNav(true)} />
            <MainMenu open={navOpen} onClose={toggleNav(false)} />
            <Page />
          </BrowserRouter>
        </StylesProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default App;
