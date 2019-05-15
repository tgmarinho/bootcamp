import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}
body {
  text-rendering: optimezeLegebility !important;
  -webkit-font-smoothing: analiased !important;
  font-family: 'Arial', sans-serif;
}
`;
