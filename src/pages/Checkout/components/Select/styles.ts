import styled, { css } from 'styled-components'
import { BaseStyle } from '../Input/base.styles'

export const SelectContainer = styled.div`
  select {
    ${BaseStyle}
    width: 100%;
    padding-left: 0.25rem;

    color: ${(props) => props.theme.colors['base-label']};

    option {
      color: inherit;
    }
  }
`
