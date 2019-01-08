import React, { Component } from 'react';
import './App.css';
import { createGlobalStyle} from 'styled-components';
import BuyerApp from './buyer/buyerApp';

const GlobalStyle = createGlobalStyle`
  body {
    background-color:#f4f5f8;
  }
  p,h1,h2,h3,h4,h5{
    margin:0;
  }
`;

class App extends Component {
  render() {
    return (
        <div>
          <GlobalStyle />
            <BuyerApp />
        </div>
    );
  }
}

export default App;
