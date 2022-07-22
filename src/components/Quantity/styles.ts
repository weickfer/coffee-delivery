import styled from 'styled-components'

export const QuantityContainer = styled.div`
  width: 4.5rem;
  height: 2.375rem;
  background-color: ${(props) => props.theme.colors['base-button']};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 6px;

  button {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background: transparent;
    cursor: pointer;
    height: 100%;

    &:disabled {
      cursor: not-allowed;

      svg {
        opacity: 0.8;
      }
    }

    svg {
      font-size: ${(props) => props.theme.fonts.text['regular-m'].fontSize};
      color: ${(props) => props.theme.colors.purple};
    }
  }

  p {
    flex: 1;
    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.theme.fonts.text['regular-m'].fontSize};
    font-weight: ${(props) => props.theme.fonts.text['regular-m'].fontWeight};
  }
`
