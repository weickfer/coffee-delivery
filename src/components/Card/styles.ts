import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${(props) => props.theme.colors['base-card']};
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px 6px 36px;

  padding: 0 1.5rem 1.25rem;

  display: flex;
  flex-direction: column;
  /* align-items: center; */

  img {
    margin-top: calc(0rem - 1rem);
  }
`

export const Description = styled.div`
  margin-top: 1rem;

  h2 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-size: ${(props) => props.theme.fonts.title.s.fontSize};
    font-weight: ${(props) => props.theme.fonts.title.s.fontWeight};
  }

  p {
    margin-top: 0.25rem;
    max-width: 13.5rem;
    text-align: center;
    color: ${(props) => props.theme.colors['base-label']};
    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.theme.fonts.text['regular-s'].fontSize};
    font-weight: ${(props) => props.theme.fonts.text['regular-s'].fontWeight};
  }
`

export const Tags = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;

  span {
    background: ${(props) => props.theme.colors['yellow-light']};
    color: ${(props) => props.theme.colors['yellow-dark']};
    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.theme.fonts.components.tag.fontSize};
    font-weight: ${(props) => props.theme.fonts.components.tag.fontWeight};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }
`

export const BuyContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
`

export const BuyPrice = styled.div`
  color: ${(props) => props.theme.colors['base-text']};
  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => props.theme.fonts.text['regular-s'].fontSize};
  font-weight: ${(props) => props.theme.fonts.text['regular-s'].fontWeight};

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: ${(props) => props.theme.fonts.title.m.fontSize};
    font-weight: ${(props) => props.theme.fonts.title.m.fontWeight};
  }
`
