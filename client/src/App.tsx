import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider } from '@material-ui/core/styles';

const StyledH1 = styled.h1`
  font-size: 30px;
  text-transform: uppercase;
`;

type Props = {
  name: string;
};

const App: React.FC<Props> = ({ name }) => {
  const [who, setWho] = useState('World');

  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <StyledH1>React App</StyledH1>
      <p>
        Hello {who}! This is {name}!
      </p>
      <Button variant="contained" color="primary">
        Material Button
      </Button>
    </StylesProvider>
  );
};

export default App;
