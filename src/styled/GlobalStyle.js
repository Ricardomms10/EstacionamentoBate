import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

body {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    background-color: #95999c;
    
}
`