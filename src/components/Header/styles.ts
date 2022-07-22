import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
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
