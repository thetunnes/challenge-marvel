import 'styled-components'
import { defaultTheme } from '../styles/theme/default'

type Theme = typeof defaultTheme

declare module 'styled-components' {
  export type DefaultTheme = Theme
}
