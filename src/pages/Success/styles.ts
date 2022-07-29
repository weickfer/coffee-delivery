import styled from 'styled-components'

export const SuccessContainer = styled.div`
  h1 {
    color: ${(props) => props.theme.colors['yellow-dark']};
    font-family: 'Baloo 2', sans-serif;
    font-size: ${(props) => props.theme.fonts.title.l.fontSize};
    font-weight: ${(props) => props.theme.fonts.title.l.fontWeight};
  }

  p {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: ${(props) => props.theme.fonts.text['regular-l'].fontSize};
    font-weight: ${(props) => props.theme.fonts.text['regular-l'].fontWeight};
  }

  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2.5rem;

    img {
      margin-left: auto;
    }
  }
`

export const OrderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: linear-gradient(
    to right,
    rgba(219, 172, 44, 1),
    rgba(128, 71, 248, 1)
  );
  border-radius: 6px 36px 6px 36px;
  padding: 3px;

  > div {
    width: 100%;
    height: 100%;
    border-radius: 6px 36px 6px 36px;
    padding: 2.5rem;
    background: ${(props) => props.theme.colors.background};

    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

export const OrderInfoSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: ${(props) => props.theme.fonts.text['regular-m'].fontSize};
    font-weight: ${(props) => props.theme.fonts.text['regular-m'].fontWeight};
  }

  span {
    font-weight: bold;
  }
`
