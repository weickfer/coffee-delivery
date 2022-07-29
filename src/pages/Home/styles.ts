import styled from 'styled-components'

export const HomeContainer = styled.div``

export const Intro = styled.div`
  display: grid;
  grid-template-areas: 'title img';

  @media (max-width: 1020px) {
    grid-template-areas:
      'img'
      'title';
    align-items: center;
    justify-items: center;
  }

  img {
    grid-area: img;
    width: 29.75rem;
    height: 22.5rem;
  }
`

export const Title = styled.div`
  grid-area: title;

  h1 {
    max-width: 36.75rem;
    color: ${(props) => props.theme.colors['base-title']};
    font-family: 'Baloo 2', sans-serif;
    font-size: ${(props) => props.theme.fonts.title.xl.fontSize};
    font-weight: ${(props) => props.theme.fonts.title.xl.fontWeight};
  }

  p {
    margin-top: 1rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.theme.fonts.text['regular-l'].fontSize};
    font-weight: ${(props) => props.theme.fonts.text['regular-l'].fontWeight};
  }
`

export const ItemsGrid = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }

  max-width: 36.75rem;

  span {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors['base-text']};
    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.theme.fonts.text['regular-m'].fontSize};
    font-weight: ${(props) => props.theme.fonts.text['regular-m'].fontWeight};
    /* padding-left: 0.75rem; */
  }
`

type IconContainerProps = {
  color: 'yellowDark' | 'yellow' | 'gray' | 'purple'
}

const ICON_CONTAINER_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${(props) => {
    const color = ICON_CONTAINER_COLORS[props.color]
    return props.theme.colors[color]
  }};
  margin-right: 0.5rem;

  svg {
    color: ${(props) => props.theme.colors.white};
  }
`

export const CoffeeContainer = styled.div`
  margin-top: 4.125rem;
  padding: 1rem 0;

  @media (max-width: 768px) {
    > h2 {
      text-align: center;
    }
  }

  > h2 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-size: ${(props) => props.theme.fonts.title.l.fontSize};
    font-weight: ${(props) => props.theme.fonts.title.l.fontWeight};
  }
`

export const CardList = styled.main`
  /* margin: 2rem 0; */
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 1rem;

    > div {
      align-self: center;
    }
  }
`
