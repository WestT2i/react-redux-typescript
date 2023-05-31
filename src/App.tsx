import { Routes, Route } from 'react-router-dom'

import { Layout } from './components/layout/Layout'
import { PrivateRoute } from './utils/router/PrivateRoute'
import { LoginPage } from './components/auth'
import { NotFound } from './pages/NotFound'
import { HomePage } from './pages/HomePage'
import { ProductsPage } from './components/products'
import { ClientsPage } from './components/clients'
import { OrdersPage } from './components/orders'

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route element={<Layout />}>
          <Route element={<PrivateRoute />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/orders" element={<OrdersPage />} />
          </Route>
          <Route index path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
