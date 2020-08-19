import React, { FC } from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Hidden } from '@material-ui/core';

const StyledAppBar = styled(AppBar)`
  ${({ theme }) => `
    z-index: ${theme.zIndex.drawer + 1};
  `}
`;

interface Props {
  onMenuClick(): void;
}

const MainAppBar: FC<Props> = ({ onMenuClick }) => {
  return (
    <StyledAppBar position="relative">
      <Toolbar>
        <Hidden mdUp>
          <IconButton edge="start" color="inherit" onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography variant="h6">My Money</Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default MainAppBar;
