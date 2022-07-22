import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { themeLight } from './styles/themes/light'

export function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}
