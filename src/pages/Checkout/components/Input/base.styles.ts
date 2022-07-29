import { css } from 'styled-components'

export const BaseStyle = css`
  height: 2.625rem;
  background: ${(props) => props.theme.colors['base-input']};
  border: 2px solid ${(props) => props.theme.colors['base-button']};
  border-radius: 4px;
`
