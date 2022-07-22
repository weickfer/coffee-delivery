import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import bannerImg from '../../assets/banner.png'
import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import {
  HomeContainer,
  IconContainer,
  Intro,
  ItemsGrid,
  Title,
  CoffeeContainer,
  CardList,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <Intro>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ItemsGrid>
            <span>
              <IconContainer color="yellowDark">
                <ShoppingCart weight="fill" />
              </IconContainer>
              Compra simples e segura
            </span>
            <span>
              <IconContainer color="gray">
                <Package weight="fill" />
              </IconContainer>
              Embalagem mantém o café intacto
            </span>
            <span>
              <IconContainer color="yellow">
                <Timer weight="fill" />
              </IconContainer>
              Entrega rápida e rastreada
            </span>
            <span>
              <IconContainer color="purple">
                <Coffee weight="fill" />
              </IconContainer>
              O café fresquinho até você
            </span>
          </ItemsGrid>
        </Title>

        <img src={bannerImg} alt="Coffee Delivery" />
      </Intro>

      <CoffeeContainer>
        <h2>Nossos cafés</h2>

        <CardList>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardList>
      </CoffeeContainer>
    </HomeContainer>
  )
}