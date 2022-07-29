import { ThemeProvider } from 'styled-components'

import { Router } from './routes'
import { themeLight } from './styles/themes/light'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  )
}
