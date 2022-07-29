import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['yellow-dark']};
  }

  body {
    background-color:${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors['base-title']};
    -webkit-font-smoothing: antialiased;
    margin: 0 auto;
    /* max-width: calc(70rem - 2rem);  */
    max-width: calc(68rem + 2rem + 1rem); // 40rem 28rem
    padding: 0 1rem;
    
    /* @media(max-width: 1020px) {
      max-width: calc(36.75rem - 2rem);
    } */
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  /* @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
  
  @media(max-width: 540px) {
    html {
      font-size: 75%;
    }
  }
  
  @media(max-width: 376px) {
    html {
      font-size: 62.5%;
    }
  } */
  /* 
  */
`

/*
16 -> 100%
12 -> X

12 * 100 / 16 = 66.6667%
15 * 100 / 16 = 75%
*/
