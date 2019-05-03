import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background: #9b65e6;
  text-rendering: optimezeLegebility !important;
  -webkit-font-smoothing: analiased !important;
}
`;

export default GlobalStyle;
