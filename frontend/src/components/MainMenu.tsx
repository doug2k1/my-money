import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Toolbar from '@material-ui/core/Toolbar';

const drawerWidth = 256;

const StyledDrawer = styled(Drawer)`
  width: ${drawerWidth}px;

  .MuiDrawer-paper {
    width: ${drawerWidth}px;
  }
`;

type Props = { open: boolean; onClose: () => void };

const MainMenu: FC<Props> = ({ open, onClose }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
    onClose();
  };

  return (
    <StyledDrawer
      variant={smDown ? 'temporary' : 'permanent'}
      open={open}
      onClose={onClose}
      data-testid="main-menu"
    >
      <Toolbar />
      <List>
        <ListItem
          button
          component={RouterLink}
          to="/"
          selected={selectedIndex === 1}
          onClick={() => handleListItemClick(1)}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          component={RouterLink}
          to="/investments"
          selected={selectedIndex === 2}
          onClick={() => handleListItemClick(2)}
        >
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Investimentos" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component="a" href="/auth/logout">
          <ListItemIcon>
            <MeetingRoomIcon />
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </ListItem>
      </List>
    </StyledDrawer>
  );
};

export default MainMenu;
