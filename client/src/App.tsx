import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  StylesProvider,
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { teal, lime } from '@material-ui/core/colors';
import MainMenu from './components/MainMenu';
import Page from './components/Page';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[500]
    },
    secondary: {
      main: lime[500]
    }
  }
});

type Props = {
  name: string;
};

const App: React.FC<Props> = ({ name }) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = (open: boolean) => () => {
    setNavOpen(open);
  };

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <Router>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={toggleNav(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">My Money</Typography>
            </Toolbar>
          </AppBar>
          <MainMenu open={navOpen} onClose={toggleNav(false)} />
          <Page />
        </Router>
      </StylesProvider>
    </ThemeProvider>
  );
};

export default App;
