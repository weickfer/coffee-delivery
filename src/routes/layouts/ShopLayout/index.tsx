import { Outlet } from 'react-router-dom'
import { Header } from '../../../components/Header'
import { ShopLayoutContainer } from './styles'

export function ShopLayout() {
  return (
    <ShopLayoutContainer>
      <Header />

      <Outlet />
    </ShopLayoutContainer>
  )
}
