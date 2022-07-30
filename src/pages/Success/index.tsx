import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import successImg from '../../assets/success.svg'
import { useCart } from '../../contexts/CartContext'
import { PaymentsMethod, PurchaseFormData } from '../Checkout/validationSchema'
import { IconContainer } from '../Home/styles'
import { SuccessContainer, OrderInfo, OrderInfoSection } from './styles'

type PurchaseInfo = PurchaseFormData & { paymentMethod: PaymentsMethod }

export function Success() {
  const [data, setData] = useState<PurchaseInfo | null>(null)
  const navigate = useNavigate()
  const { clearCart } = useCart()

  useEffect(() => {
    const purchaseInfo = localStorage.getItem('@coffeeShop-1.0.0:purchaseInfo')

    if (!purchaseInfo) return

    try {
      const parsedPurchaseInfo = JSON.parse(purchaseInfo) as PurchaseInfo
      setData(parsedPurchaseInfo)
      clearCart()
    } catch {
      clearCart()
      // navigate('/')
    }
  }, [])

  if (!data) {
    return <p>Carregando (provisório)...</p>
  }

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
                Entrega em{' '}
                <span>
                  {data.street}, {data.number}
                </span>{' '}
                <br />
                {data.neighborhood}, {data.city} - {data.state}
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
                {data.paymentMethod === 'credit_card' && (
                  <span>Cartão de Crédito</span>
                )}
                {data.paymentMethod === 'debit_card' && (
                  <span>Cartão de Débito</span>
                )}
                {data.paymentMethod === 'cash' && <span>Dinheiro</span>}
              </p>
            </OrderInfoSection>
          </div>
        </OrderInfo>
        <img src={successImg} alt="" />
      </main>
    </SuccessContainer>
  )
}
