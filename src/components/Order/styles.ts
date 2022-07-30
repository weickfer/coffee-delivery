import styled from 'styled-components'

export const OrderContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;

  > span {
    display: block;
    width: 100%;
    text-align: right;
    color: ${(props) => props.theme.colors['base-text']};
    font-size: ${(props) => props.theme.fonts.text['bold-m'].fontSize};
    font-weight: ${(props) => props.theme.fonts.text['bold-m'].fontWeight};
  }

  & + & {
    margin-top: 1.5rem;
  }

  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -0.75rem;
    background: ${(props) => props.theme.colors['base-button']};
  }
`

export const Product = styled.div`
  width: 15.9375rem;
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.theme.fonts.text['regular-m'].fontSize};
    font-weight: ${(props) => props.theme.fonts.text['regular-m'].fontWeight};
  }

  > div {
    margin-top: auto;
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;

    > div {
      /* Resize height of Quantity Component */
      height: 2rem;
    }
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 2rem;
  padding: 0 0.5rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme.colors['base-button']};
  color: ${(props) => props.theme.colors['base-text']};
  font-size: ${(props) => props.theme.fonts.components['button-s'].fontSize};
  font-weight: ${(props) =>
    props.theme.fonts.components['button-s'].fontWeight};
  text-transform: uppercase;

  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`
