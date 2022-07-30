import { Trash } from 'phosphor-react'

import { ProductType } from '../../contexts/CartContext'
import { brazilPriceFormatter } from '../../utils/brazilPriceFormatter'
import { Quantity } from '../Quantity'
import { OrderContainer, Details, Product, RemoveButton } from './styles'

type OrderProps = {
  order: ProductType
  onRemove: () => void
  onQuantityChange: (quantity: number) => void
}

export function Order({ order, onRemove, onQuantityChange }: OrderProps) {
  const formattedPrice = brazilPriceFormatter.format(order.price)

  return (
    <OrderContainer>
      <Product>
        <img src={order.url} alt={order.name} />

        <Details>
          <p>{order.name}</p>
          <div>
            <Quantity value={order.quantity} onChange={onQuantityChange} />
            <RemoveButton type="button" onClick={onRemove}>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </div>
        </Details>
      </Product>

      <span>{formattedPrice}</span>
    </OrderContainer>
  )
}
