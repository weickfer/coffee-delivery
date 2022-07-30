import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTheme } from 'styled-components'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'

import { Order } from '../../components/Order'
import { PurchaseForm } from './components/Form'
import {
  CheckoutContainer,
  Card,
  CardHeader,
  PaymentsGrid,
  Payment,
  CardSection,
  SubmitButton,
} from './styles'
import { useCart } from '../../contexts/CartContext'
import { brazilPriceFormatter } from '../../utils/brazilPriceFormatter'
import {
  PaymentsMethod,
  PurchaseFormData,
  validationSchema,
} from './validationSchema'

export function Checkout() {
  const theme = useTheme()
  const navigate = useNavigate()

  const purchaseForm = useForm<PurchaseFormData>({
    resolver: zodResolver(validationSchema),
  })
  const { handleSubmit } = purchaseForm
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentsMethod>('credit_card')
  const { orders, removeProduct, updateProductQuantity } = useCart()

  useEffect(() => {
    if (orders.length === 0) {
      navigate('/')
    }
  }, [navigate, orders])

  const totalOrderPrice = orders.reduce((total, product) => {
    return total + product.price * product.quantity
  }, 0)
  const shippingPrice = 7
  const totalPrice = totalOrderPrice + shippingPrice

  const formattedOrderPrice = brazilPriceFormatter.format(totalOrderPrice)
  const formattedShippingPrice = brazilPriceFormatter.format(shippingPrice)
  const formattedTotalPrice = brazilPriceFormatter.format(totalPrice)

  const handleSelectPaymentMethod = (method: PaymentsMethod) => {
    setPaymentMethod(method)
  }

  const handleSubmitPurchaseInfo = handleSubmit((data) => {
    localStorage.setItem(
      '@coffeeShop-1.0.0:purchaseInfo',
      JSON.stringify({ ...data, paymentMethod }),
    )
    navigate('/success')
  })

  return (
    <CheckoutContainer onSubmit={handleSubmitPurchaseInfo}>
      <main>
        <h2>Complete seu pedido</h2>
        <Card>
          <CardHeader>
            <MapPinLine color={theme.colors['yellow-dark']} size={22} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </CardHeader>

          <FormProvider {...purchaseForm}>
            <PurchaseForm />
          </FormProvider>
        </Card>

        {/* Payment Card */}
        <Card>
          <CardHeader>
            <CurrencyDollar
              color={theme.colors.purple}
              weight="regular"
              size={22}
            />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega Escolha a forma que deseja pagar
              </p>
            </div>
          </CardHeader>

          <PaymentsGrid>
            <Payment
              type="button"
              onClick={() => handleSelectPaymentMethod('credit_card')}
              isSelected={paymentMethod === 'credit_card'}
            >
              <CreditCard weight="regular" size={16} />
              Cartão de Credito
            </Payment>
            <Payment
              type="button"
              onClick={() => handleSelectPaymentMethod('debit_card')}
              isSelected={paymentMethod === 'debit_card'}
            >
              <Bank weight="regular" size={16} />
              Cartão de Debito
            </Payment>
            <Payment
              type="button"
              onClick={() => handleSelectPaymentMethod('cash')}
              isSelected={paymentMethod === 'cash'}
            >
              <Money weight="regular" size={16} />
              Dinheiro
            </Payment>
          </PaymentsGrid>
        </Card>
      </main>
      <aside>
        <h2>Cafés selecionados</h2>
        <Card>
          {orders.map((order) => (
            <Order
              key={order.id}
              order={order}
              onRemove={() => removeProduct(order.id)}
              onQuantityChange={(quantity) =>
                updateProductQuantity(order.id, quantity)
              }
            />
          ))}

          <footer>
            <CardSection>
              <strong>Total de itens</strong>
              <p>{formattedOrderPrice}</p>
            </CardSection>
            <CardSection>
              <strong>Entrega</strong>
              <p>{formattedShippingPrice}</p>
            </CardSection>
            <CardSection>
              <h1>Total</h1>
              <h1>{formattedTotalPrice}</h1>
            </CardSection>

            <SubmitButton type="submit">Confirmar pedido</SubmitButton>
          </footer>
        </Card>
      </aside>
    </CheckoutContainer>
  )
}
