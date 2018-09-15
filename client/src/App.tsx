import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;

type Props = {
  lang: string;
};

type State = {
  who: string;
};

class App extends React.Component<Props, State> {
  state: State = {
    who: "World"
  };

  render() {
    return (
      <div>
        <h1>App component</h1>
        <p>
          Hello {this.state.who} in {this.props.lang}!
        </p>
        <Button>styled button</Button>
      </div>
    );
  }
}

export default App;
