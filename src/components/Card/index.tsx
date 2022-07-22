import americanCoffee from '../../assets/images/american-coffee.png'
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
        <h2>Expresso Americano</h2>
        <p>Expresso diluído, menos intenso que o tradicional</p>
      </Description>

      {/* <BuyContainer>
        <BuyPrice>
          R$ <span>9,90</span>
        </BuyPrice>
        <Quantity value={1} />
      </BuyContainer> */}
    </CardContainer>
  )
}
