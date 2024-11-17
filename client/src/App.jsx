import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthLayout } from './pages/auth/authLayout'
import { AuthLogin } from './pages/auth/login'
import { AuthRegister } from './pages/auth/register'
import { AdminLayout } from './components/admin-view/layout'
import { AdminDashboard } from './pages/auth/admin-view/dashboard'
import { AdminProducts } from './pages/auth/admin-view/product'
import { AdminOrders } from './pages/auth/admin-view/orders'
import { AdminFeatures } from './pages/auth/admin-view/features'
import { ShoppingLayout } from './components/admin-view/shopping-view/layout'
import { NotFound } from './pages/not-found'
import { ShoppingHeader } from './components/admin-view/shopping-view/header'
import { ShoppingListing } from './pages/auth/shopping-view/listing'
import { ShoppingCheckout } from './pages/auth/shopping-view/checkout'
import { ShoppingAccount } from './pages/auth/shopping-view/account'

function App() {

  return (
    <div className='flex flex-col overflow-hidden bg-white'>
   <Routes>
    <Route path='/auth' element={<AuthLayout></AuthLayout>}>
    <Route path='login' element={<AuthLogin></AuthLogin>}>
    </Route>
    <Route path='register' element={<AuthRegister></AuthRegister>}>
    </Route>
    </Route>
    <Route path='/admin' element={<AdminLayout></AdminLayout>}>
    <Route path='dashboard' element={<AdminDashboard></AdminDashboard>}></Route>
    <Route path='products' element={<AdminProducts></AdminProducts>}></Route>
    <Route path='orders' element={<AdminOrders></AdminOrders>}></Route>
    <Route path='features' element={<AdminFeatures></AdminFeatures>}></Route>
    </Route>
    <Route path='/shop' element={<ShoppingLayout></ShoppingLayout>}>
    <Route path='home' element={<ShoppingHeader></ShoppingHeader>}></Route>
    <Route path='listing' element={<ShoppingListing></ShoppingListing>}></Route>
    <Route path='checkout' element={<ShoppingCheckout></ShoppingCheckout>}></Route>
     <Route path='account' element={<ShoppingAccount></ShoppingAccount>}></Route>
    
    </Route>
    <Route path='*' element={<NotFound></NotFound>}></Route>
   </Routes>
    </div>
  )
}

export default App
