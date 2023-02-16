import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
--background: #F0F2F5; 
--red: #e52e4d;
--blue: #5429cc;
--green: #33cc95;
--blue-light: #6933ff;
--text-title: #363f5f;
--text-body:#969CB2;
--background: #fef2f5;
--shape: #ffffff;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
   @media (max-width: 1080px) {
    font-size: 93.75%;
   }

   @media (max-width: 720px) {
    font-size: 87.5%;
   }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

button {
    cursor: pointer;
}

[disable] {
    opacity: 8.6;
    cursor: not-allowed;
}
`