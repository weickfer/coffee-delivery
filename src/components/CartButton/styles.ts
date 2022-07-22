import styled, { css } from 'styled-components'

type CartButtonContainerProps = {
  schema: 'yellow' | 'purple'
}

const CART_BUTTON_SCHEMA = {
  yellow: {
    bg: 'yellow-light',
    color: 'yellow-dark',
  },
  purple: {
    bg: 'purple-dark',
    color: 'base-card',
  },
} as const

const ButtonSchema = css<CartButtonContainerProps>`
  background-color: ${({ schema, theme }) => {
    return theme.colors[CART_BUTTON_SCHEMA[schema].bg]
  }};

  svg {
    color: ${({ schema, theme }) => {
      return theme.colors[CART_BUTTON_SCHEMA[schema].color]
    }};
  }
`

export const CartButtonContainer = styled.button<CartButtonContainerProps>`
  width: 2.375rem;
  height: 2.375rem;
  border: 0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${ButtonSchema}

  position: relative;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
