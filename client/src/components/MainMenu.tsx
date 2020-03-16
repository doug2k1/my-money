import React from 'react';
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

const StyledDiv = styled('div')`
  width: 250px;
`;

type Props = { open: boolean; onClose: () => void };

const MainMenu: React.FC<Props> = ({ open, onClose }) => {
  const closeMenu = () => {
    onClose();
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <StyledDiv>
        <Divider />
        <List>
          <ListItem button component={RouterLink} to="/" onClick={closeMenu}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            component={RouterLink}
            to="/investments"
            onClick={closeMenu}
          >
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Investimentos" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component={RouterLink} to="/logout">
            <ListItemIcon>
              <MeetingRoomIcon />
            </ListItemIcon>
            <ListItemText primary="Sair" />
          </ListItem>
        </List>
      </StyledDiv>
    </Drawer>
  );
};

export default MainMenu;
