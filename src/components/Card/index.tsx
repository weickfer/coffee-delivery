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

export function Card() {
  return (
    <CardContainer>
      <img src={americanCoffee} alt="Café Americano" />

      <Tags>
        <span>Especial</span>
        <span>Alcoólico</span>
        <span>Gelado</span>
      </Tags>

      <Description>
        <h3>Expresso Americano</h3>
        <p>Expresso diluído, menos intenso que o tradicional</p>
      </Description>

      <BuyContainer>
        <BuyPrice>
          R$ <span>9,90</span>
        </BuyPrice>
        <div>
          <Quantity value={1} />
          <CartButton schema="purple" />
        </div>
      </BuyContainer>
    </CardContainer>
  )
}
