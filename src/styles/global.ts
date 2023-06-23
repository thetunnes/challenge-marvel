import { createGlobalStyle } from 'styled-components'
import { defaultTheme } from './theme/default'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${defaultTheme.colors.red[300]};
  }

  body {
    background: ${defaultTheme.colors.gray[100]};
    color: ${defaultTheme.colors.gray[800]};
    min-height: 100vh;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${defaultTheme.colors.gray[800]};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
  }

  @media screen and (max-width: 1120px) {
    html {
      font-size: 93.75% !important;
    }
  }

  @media screen and (max-width: 768px) {
    html {
      font-size: 87.5% !important;
    }
  }
`
export default GlobalStyle
