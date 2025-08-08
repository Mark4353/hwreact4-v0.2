import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
  font-family: 'Arial', sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: rgba(247, 237, 150, 1);
    color: #333;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
`;

export default GlobalStyle;
