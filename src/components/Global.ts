import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.primary};
    }
    body {
        margin: 0;
    }   
    *, *::before, *::after {
        box-sizing: border-box;
    }
`;

export default GlobalStyles;
