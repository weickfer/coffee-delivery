import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { CartButtonContainer } from './styles'

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  schema: 'purple' | 'yellow'
}

export function CartButton({
  children,
  schema,
  ...buttonProps
}: CartButtonProps) {
  return (
    <CartButtonContainer schema={schema} {...buttonProps}>
      {children}
      <ShoppingCart size={22} weight="fill" />
    </CartButtonContainer>
  )
}
