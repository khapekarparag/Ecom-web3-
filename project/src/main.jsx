import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AdminContextProvider from './context/AdminContextProvider.jsx'
import UserLoginContextProvider from './context/UserLoginContextProvider.jsx'
import CartProdValueContextProvider from './context/CartProdValueContextProvider.jsx'
import AddProdInCartContextProvider from './context/AddProdInCartContextProvider.jsx'

createRoot(document.getElementById('root')).render(
    <AdminContextProvider>
        <UserLoginContextProvider>
            <CartProdValueContextProvider>
                <AddProdInCartContextProvider>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </AddProdInCartContextProvider>
            </CartProdValueContextProvider>
        </UserLoginContextProvider>
    </AdminContextProvider>
)
