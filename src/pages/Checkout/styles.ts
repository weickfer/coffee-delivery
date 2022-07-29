import styled, { css } from 'styled-components'

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: 40rem 28rem;
  grid-template-rows: 2fr;
  grid-template-areas: 'form cart';
  column-gap: 1rem;
  padding-bottom: 1rem;

  h2 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-size: ${(props) => props.theme.fonts.title.xs.fontSize};
    font-weight: ${(props) => props.theme.fonts.title.xs.fontWeight};
    line-height: 130%;
    margin-bottom: 0.75rem;
  }

  main {
    grid-area: form;
  }

  aside {
    grid-area: cart;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  background: ${(props) => props.theme.colors['base-card']};
  padding: 2.5rem 2.5rem 1.5rem;
  border-radius: 6px;

  & + & {
    margin-top: 0.75rem;
  }

  footer {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1.5rem;
  }
`

export const CardHeader = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  div {
    h3 {
      color: ${(props) => props.theme.colors['base-subtitle']};
      font-size: ${(props) => props.theme.fonts.text['regular-m'].fontSize};
      font-weight: ${(props) => props.theme.fonts.text['regular-m'].fontWeight};
    }

    p {
      color: ${(props) => props.theme.colors['base-text']};
      font-size: ${(props) => props.theme.fonts.text['regular-s'].fontSize};
      font-weight: ${(props) => props.theme.fonts.text['regular-s'].fontWeight};
    }
  }
`

export const CardSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  strong {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: ${(props) => props.theme.fonts.text['regular-s'].fontSize};
    font-weight: ${(props) => props.theme.fonts.text['regular-s'].fontWeight};
  }

  span {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: ${(props) => props.theme.fonts.text['regular-m'].fontSize};
    font-weight: ${(props) => props.theme.fonts.text['regular-m'].fontWeight};
  }

  h1 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: ${(props) => props.theme.fonts.text['bold-l'].fontSize};
    font-weight: ${(props) => props.theme.fonts.text['bold-l'].fontWeight};
  }
`

export const PaymentsGrid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;
`

type PaymentProps = {
  isSelected?: boolean
}

export const Payment = styled.button<PaymentProps>`
  background: ${(props) => props.theme.colors['base-button']};

  color: ${(props) => props.theme.colors['base-text']};
  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => props.theme.fonts.text['regular-s'].fontSize};
  font-weight: ${(props) => props.theme.fonts.text['regular-s'].fontWeight};
  text-transform: uppercase;
  padding: 1rem 0;

  display: flex;
  justify-content: space-evenly;

  transition: 0.2s;

  border: 2px solid
    ${(props) => {
      const { colors } = props.theme

      return props.isSelected ? colors.purple : colors['base-button']
    }};
  border-radius: 6px;

  &:focus {
    box-shadow: 0 0 0 2px transparent;
  }

  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }
`

export const SubmitButton = styled.button`
  margin-top: 1rem;
  width: 100%;
  height: 2.875rem;
  border: 0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.yellow};
  color: ${(props) => props.theme.colors.white};
  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => props.theme.fonts.components['button-g'].fontSize};
  font-weight: ${(props) =>
    props.theme.fonts.components['button-g'].fontWeight};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
