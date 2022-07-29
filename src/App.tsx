import { ThemeProvider } from 'styled-components'

import { Router } from './routes'
import { themeLight } from './styles/themes/light'
import { GlobalStyle } from './styles/global'
import { CartProvider } from './contexts/CartContext'

export function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <CartProvider>
        <Router />
      </CartProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
