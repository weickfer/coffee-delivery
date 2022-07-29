import { Trash } from 'phosphor-react'
import americanCoffeeImg from '../../assets/images/american-coffee.png'
import { Quantity } from '../Quantity'
import { CoffeeItemContainer, Details, Product, RemoveButton } from './styles'

export function CoffeeItem() {
  return (
    <CoffeeItemContainer>
      <Product>
        <img src={americanCoffeeImg} alt="American Coffee" />

        <Details>
          <p>Café Americano</p>
          <div>
            <Quantity value={0} />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </div>
        </Details>
      </Product>

      <span>R$ 19,90</span>
    </CoffeeItemContainer>
  )
}
