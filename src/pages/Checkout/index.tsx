import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useTheme } from 'styled-components'
import { CoffeeItem } from '../../components/CoffeeItem'
import { PurchaseForm } from './components/Form'
import { getUFs } from '../../utils/getUFs'
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

const validationSchema = zod.object({
  postal_code: zod
    .string({ required_error: 'Campo CEP é obrigatório' })
    .length(8, 'O CEP deve ter 8 dígitos'),
  street: zod.string({ required_error: 'Campo Rua é obrigatório' }),
  number: zod.string({ required_error: 'Campo Número é obrigatório' }),
  complement: zod.string({ required_error: 'Campo Complemento é obrigatório' }),
  neighborhood: zod.string({ required_error: 'Campo Bairro é obrigatório' }),
  city: zod.string({ required_error: 'Campo Cidade é obrigatório' }),
  state: zod.string({ required_error: 'Campo Estado é obrigatório' }),
})

export type PurchaseFormData = zod.infer<typeof validationSchema>
type PaymentsMethod = 'credit_card' | 'debit_card' | 'cash'

export function Checkout() {
  const theme = useTheme()
  const purchaseForm = useForm<PurchaseFormData>({
    resolver: zodResolver(validationSchema),
  })
  const { handleSubmit } = purchaseForm
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentsMethod>('credit_card')
  const { products } = useCart()

  const totalPrice = products.reduce((total, product) => {
    return total + product.price * product.quantity
  }, 0)
  const formattedTotalPrice = brazilPriceFormatter.format(totalPrice)

  const handleSelectPaymentMethod = (method: PaymentsMethod) => {
    setPaymentMethod(method)
  }

  const handleSubmitPurchaseInfo = handleSubmit((data) => {
    console.log(data)
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
              Cartão de Credito
            </Payment>
          </PaymentsGrid>
        </Card>
      </main>
      <aside>
        <h2>Cafés selecionados</h2>
        <Card>
          {products.map((product) => (
            <CoffeeItem key={product.id} product={product} />
          ))}

          <footer>
            <CardSection>
              <strong>Total de itens</strong>
              <p>{formattedTotalPrice}</p>
            </CardSection>
            <CardSection>
              <strong>Entrega</strong>
              <p>R$ 3,50</p>
            </CardSection>
            <CardSection>
              <h1>Total</h1>
              <h1>R$ 33,20</h1>
            </CardSection>

            <SubmitButton type="submit">Confirmar pedido</SubmitButton>
          </footer>
        </Card>
      </aside>
    </CheckoutContainer>
  )
}
