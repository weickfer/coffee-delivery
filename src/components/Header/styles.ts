import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  nav {
    display: flex;
    gap: 0.5rem;
  }
`

export const ShopLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['purple-light']};
  padding: 0.5rem;

  color: ${(props) => props.theme.colors['purple-dark']};
  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => props.theme.fonts.text['regular-s'].fontSize};
  font-weight: ${(props) => props.theme.fonts.text['regular-s'].fontWeight};

  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
`

export const CartItemsCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -0.625rem;
  right: -0.625rem;

  background: ${(props) => props.theme.colors['yellow-dark']};
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;

  color: ${(props) => props.theme.colors.white};
  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => props.theme.fonts.text['bold-s'].fontSize};
  font-weight: ${(props) => props.theme.fonts.text['bold-s'].fontWeight};
`
