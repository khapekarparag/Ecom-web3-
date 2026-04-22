import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AdminContextProvider from './context/AdminContextProvider.jsx'
import UserLoginContextProvider from './context/UserLoginContextProvider.jsx'
import CartProdValueContextProvider from './context/CartProdValueContextProvider.jsx'
import AddProdInCartContextProvider from './context/AddProdInCartContextProvider.jsx'
import SearchContextProvider from './context/SearchContextProvider.jsx'
import ThemeContextProvider from './context/ThemeContextProvider.jsx'
import UpdateProdContextProvider from './context/UpdateProdContextProvider.jsx'
import PerProdValContextProvider from './context/PerProdValContextProvider.jsx'

createRoot(document.getElementById('root')).render(
    <AdminContextProvider>
        <UserLoginContextProvider>
            <CartProdValueContextProvider>
                <AddProdInCartContextProvider>
                    <SearchContextProvider>
                        <ThemeContextProvider>
                            <UpdateProdContextProvider>
                                <PerProdValContextProvider>
                                     <BrowserRouter>
                                            <App/>
                                    </BrowserRouter>
                                </PerProdValContextProvider>
                            </UpdateProdContextProvider>
                        </ThemeContextProvider>
                    </SearchContextProvider>
                </AddProdInCartContextProvider>
            </CartProdValueContextProvider>
        </UserLoginContextProvider>
    </AdminContextProvider>
)
