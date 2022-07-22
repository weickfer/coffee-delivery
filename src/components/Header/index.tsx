import { MapPin } from 'phosphor-react'
import logoImg from '../../assets/logo.svg'
import { CartButton } from '../CartButton'

import { HeaderContainer, ShopLocation, CartItemsCounter } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="Coffee Delivery" />

      <nav>
        <ShopLocation>
          <MapPin weight="fill" size={16} />
          Sobradinho, DF
        </ShopLocation>

        <CartButton schema="yellow">
          <CartItemsCounter>0</CartItemsCounter>
        </CartButton>
      </nav>
    </HeaderContainer>
  )
}
