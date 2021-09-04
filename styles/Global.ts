import { ThemeType } from './theme';
import { createGlobalStyle } from "styled-components";

interface Props {
  theme: ThemeType
}

const GlobalStyle = createGlobalStyle<Props> `
  *, *:after, *:before {
    box-sizing: border-box;
    margin: 0;
    outline: none;
  }
  body {
    font-size: calc(14px + .5vw);
    font-family: 'Fira Sans', 'Lato', sans-serif;
    background ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.medium};
  }
  a {
    text-decoration: none;
    color: ${({theme}) => theme.dark};
  }
  ul {
    list-style: none;
  }
`

export default GlobalStyle;