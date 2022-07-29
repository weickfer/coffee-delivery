import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import successImg from '../../assets/success.svg'
import { IconContainer } from '../Home/styles'
import { SuccessContainer, OrderInfo, OrderInfoSection } from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <main>
        <OrderInfo>
          <div>
            <OrderInfoSection>
              <IconContainer color="purple">
                <MapPin weight="fill" size={16} />
              </IconContainer>

              <p>
                Entrega em <span>Avenida Central Conjunto 19, 03</span> <br />
                Sobradinho - Brasília, DF
              </p>
            </OrderInfoSection>
            <OrderInfoSection>
              <IconContainer color="yellow">
                <Timer weight="fill" size={16} />
              </IconContainer>

              <p>
                Previsão de entrega <br />
                <span>20 min - 30 min</span>
              </p>
            </OrderInfoSection>
            <OrderInfoSection>
              <IconContainer color="yellowDark">
                <CurrencyDollar weight="fill" size={16} />
              </IconContainer>

              <p>
                Pagamento na entrega <br />
                <span>Cartão de Crédito</span>
              </p>
            </OrderInfoSection>
          </div>
        </OrderInfo>
        <img src={successImg} alt="" />
      </main>
    </SuccessContainer>
  )
}
