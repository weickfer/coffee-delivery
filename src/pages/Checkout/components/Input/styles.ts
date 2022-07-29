import styled, { css } from 'styled-components'
import { BaseStyle } from './base.styles'

type InputContainerProps = {
  hasError?: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  input {
    ${BaseStyle}
    width: 100%;
    padding: 0.75rem;
    color: ${(props) => props.theme.colors['base-text']};
    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.theme.fonts.text['regular-s'].fontSize};
    font-weight: ${(props) => props.theme.fonts.text['regular-s'].fontWeight};

    ${(props) =>
      props.hasError &&
      css`
        border-color: ${props.theme.colors.red};
      `}

    &::placeholder {
      color: ${(props) => props.theme.colors['base-label']};
    }
  }

  position: relative;

  span {
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);

    color: ${(props) => props.theme.colors['base-label']};
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-style: italic;
    font-size: 0.75rem;
  }
`
