import { useMemo } from 'react'
import americanCoffee from '../../assets/images/american-coffee.png'
import { CartButton } from '../CartButton'
import { Quantity } from '../Quantity'
import {
  BuyContainer,
  BuyPrice,
  CardContainer,
  Description,
  Tags,
} from './styles'

type CardProps = {
  title: string
  description: string
  url: string
  price: number
  tags: string[]
}

const brazilPriceFormatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function Card({ title, description, url, tags, price }: CardProps) {
  const [currency, formattedPrice] = useMemo(() => {
    const currency = brazilPriceFormatter.format(price)
    const prefix = currency.substring(0, 3)
    const formattedPrice = currency.slice(3)

    return [prefix, formattedPrice]
  }, [price])

  return (
    <CardContainer>
      <img src={url} alt="Café Americano" />

      <Tags>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Description>
        <h3>{title}</h3>
        <p>{description}</p>
      </Description>

      <BuyContainer>
        <BuyPrice>
          {currency} <span>{formattedPrice}</span>
        </BuyPrice>
        <div>
          <Quantity value={1} />
          <CartButton schema="purple" />
        </div>
      </BuyContainer>
    </CardContainer>
  )
}
