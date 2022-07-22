import { MapPin } from 'phosphor-react'
import logoImg from '../../assets/logo.svg'

import { HeaderContainer, ShopLocation } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="Coffee Delivery" />

      <nav>
        <ShopLocation>
          <MapPin weight="fill" size={16} />
          Sobradinho, DF
        </ShopLocation>
      </nav>
    </HeaderContainer>
  )
}
