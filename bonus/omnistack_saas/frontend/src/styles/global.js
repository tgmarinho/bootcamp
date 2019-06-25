import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box
  }

  body {
    background: #353940;
    color: #FFF;
    font-family: 'Source Sans Pro', sans-serif;
    text-rendering: optimizeLegibility !important;
    -web-font-smoothing: antialiased !important
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
  }

`;
