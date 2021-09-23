import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body{
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
        background-color:#eee;
        color:#333333;
        font-size:62.5%;

        @media only screen and (max-width: 1300px) {
            font-size: 50%;
        }
    }

    *,
    *::before,
    *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`