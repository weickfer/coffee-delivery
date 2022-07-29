import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Checkout } from '../pages/Checkout'
import { Home } from '../pages/Home'
import { Success } from '../pages/Success'

import { ShopLayout } from './layouts/ShopLayout'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Shop Routes */}
        <Route path="/" element={<ShopLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
