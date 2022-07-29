import { Trash } from 'phosphor-react'

import { ProductType } from '../../contexts/CartContext'
import { brazilPriceFormatter } from '../../utils/brazilPriceFormatter'
import { Quantity } from '../Quantity'
import { CoffeeItemContainer, Details, Product, RemoveButton } from './styles'

type CoffeeItemProps = {
  product: ProductType
}

export function CoffeeItem({ product }: CoffeeItemProps) {
  const formattedPrice = brazilPriceFormatter.format(product.price)

  return (
    <CoffeeItemContainer>
      <Product>
        <img src={product.url} alt={product.name} />

        <Details>
          <p>{product.name}</p>
          <div>
            <Quantity value={product.quantity} />
            <RemoveButton type="button">
              <Trash size={16} />
              Remover
            </RemoveButton>
          </div>
        </Details>
      </Product>

      <span>{formattedPrice}</span>
    </CoffeeItemContainer>
  )
}
