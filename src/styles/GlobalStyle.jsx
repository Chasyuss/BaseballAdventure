import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}


  body {
    background-color: #fff;  
  }

`;

export default GlobalStyle;