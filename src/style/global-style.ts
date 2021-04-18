import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body {
        font-family: 'Open Sans', sans-serif;
        margin:0;
        color: ${({ theme }) => theme.colors.text};
    }
    *, *:before, *:after {
        box-sizing: border-box;
    }
`;
