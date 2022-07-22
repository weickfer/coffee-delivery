import { MapPin } from 'phosphor-react'
import logoImg from '../../assets/logo.svg'
import { CartButton } from '../CartButton'

import { HeaderContainer, ShopLocation, CartItemsCounter } from './styles'

export function Header() {
  const totalItems = 1
  const showItemsCounter = totalItems > 0

  return (
    <HeaderContainer>
      <img src={logoImg} alt="Coffee Delivery" />

      <nav>
        <ShopLocation>
          <MapPin weight="fill" size={16} />
          Sobradinho, DF
        </ShopLocation>

        <CartButton schema="yellow">
          {showItemsCounter && (
            <CartItemsCounter>{totalItems}</CartItemsCounter>
          )}
        </CartButton>
      </nav>
    </HeaderContainer>
  )
}
