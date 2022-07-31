import { ButtonHTMLAttributes, ReactNode } from 'react'
import { useTheme } from 'styled-components'
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
  const theme = useTheme()

  return (
    <CartButtonContainer background={schema} {...buttonProps}>
      {children}
      {schema === 'purple' && (
        <ShoppingCart
          // size={22}
          weight="fill"
          color={theme.colors['base-card']}
        />
      )}

      {schema === 'yellow' && (
        <ShoppingCart
          // size={22}
          weight="fill"
          color={theme.colors['yellow-dark']}
        />
      )}
    </CartButtonContainer>
  )
}
