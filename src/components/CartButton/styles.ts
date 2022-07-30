import styled, { css } from 'styled-components'

type CartButtonContainerProps = {
  background: 'yellow' | 'purple'
}

const CART_BUTTON_BACKGROUND = {
  yellow: 'yellow-light',
  purple: 'purple-dark',
} as const

export const CartButtonContainer = styled.button<CartButtonContainerProps>`
  width: 2.375rem;
  height: 2.375rem;
  border: 0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => {
    const background = CART_BUTTON_BACKGROUND[props.background]

    return props.theme.colors[background]
  }};
  position: relative;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    cursor: not-allowed;
    filter: brightness(0.8);
  }
`
