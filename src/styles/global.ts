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
    width: 100%;
    background-color:${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors['base-title']};
    -webkit-font-smoothing: antialiased;
    /* max-width: calc(70rem - 2rem);  */
    
    
    /* @media(max-width: 1020px) {
      max-width: calc(36.75rem - 2rem);
    } */
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  @media(max-width: 1180px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 1062px) {
    html {
      font-size: 87.5%;
    }
  }

  @media(max-width: 990px) {
    html {
      font-size: 84.375%;
    }
  }
  
  @media(max-width: 940px) {
    html {
      font-size: 81.25%;
    }
  }
  
  @media(max-width: 910px) {
    html {
      font-size: 75%;
    }
  }
  
  @media(max-width: 770px) {
    html {
      font-size: 68.75%;
    }
  }

  /* @media(max-width: 768px) {
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
