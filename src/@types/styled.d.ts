import 'styled-components'
import { themeLight } from '../styles/themes/light'

type Theme = typeof themeLight

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
