import { useMemo, useState } from 'react'

import { useCart } from '../../contexts/CartContext'
import { brazilPriceFormatter } from '../../utils/brazilPriceFormatter'
import { CartButton } from '../CartButton'
import { Quantity } from '../Quantity'

import {
  BuyContainer,
  BuyPrice,
  CardContainer,
  Description,
  Tags,
} from './styles'

type Product = {
  id: number
  url: string
  name: string
  price: number
  description: string
  tags: string[]
}

type CardProps = {
  data: Product
}

export function Card({ data }: CardProps) {
  const [quantity, setQuantity] = useState(0)
  const [currency, formattedPrice] = useMemo(() => {
    const currency = brazilPriceFormatter.format(data.price)
    const prefix = currency.substring(0, 3)
    const formattedPrice = currency.slice(3)

    return [prefix, formattedPrice]
  }, [data.price])
  const { addOrder } = useCart()

  const handleChangeQuantity = (value: number) => {
    setQuantity(value)
  }

  const handleAddProductToCart = () => {
    if (quantity > 0) {
      addOrder({
        ...data,
        quantity,
      })
    }
  }

  return (
    <CardContainer>
      <img src={data.url} alt="Café Americano" />

      <Tags>
        {data.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Description>
        <h3>{data.name}</h3>
        <p>{data.description}</p>
      </Description>

      <BuyContainer>
        <BuyPrice>
          {currency} <span>{formattedPrice}</span>
        </BuyPrice>
        <div>
          <Quantity value={quantity} onChange={handleChangeQuantity} />
          <CartButton schema="purple" onClick={handleAddProductToCart} />
        </div>
      </BuyContainer>
    </CardContainer>
  )
}
