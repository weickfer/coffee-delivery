import { Link } from 'react-router-dom'
import { MapPin } from 'phosphor-react'
import logoImg from '../../assets/logo.svg'
import { CartButton } from '../CartButton'

import { HeaderContainer, ShopLocation, CartItemsCounter } from './styles'
import { useCart } from '../../contexts/CartContext'

export function Header() {
  const { products } = useCart()
  const totalItems = products.length
  const showItemsCounter = totalItems > 0

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoImg} alt="Coffee Delivery" />
      </Link>

      <nav>
        <ShopLocation>
          <MapPin weight="fill" size={16} />
          Sobradinho, DF
        </ShopLocation>

        <Link to="/checkout">
          <CartButton schema="yellow">
            {showItemsCounter && (
              <CartItemsCounter>{totalItems}</CartItemsCounter>
            )}
          </CartButton>
        </Link>
      </nav>
    </HeaderContainer>
  )
}
