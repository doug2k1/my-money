import React, { useState } from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import Link from '@material-ui/core/Link';

const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    /* width: 240px; */
  }
`;

type Props = {
  name: string;
};

const App: React.FC<Props> = ({ name }) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = (open: boolean) => () => {
    setNavOpen(open);
  };

  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleNav(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">My Money</Typography>
        </Toolbar>
      </AppBar>
      <StyledDrawer open={navOpen} onClose={toggleNav(false)}>
        <div style={{ width: 250 }}>
          <Divider />
          <List>
            <ListItem button component={props => <Link href="/" />}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary="Extrato" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <MeetingRoomIcon />
              </ListItemIcon>
              <ListItemText primary="Sair" />
            </ListItem>
          </List>
        </div>
      </StyledDrawer>
    </StylesProvider>
  );
};

export default App;
