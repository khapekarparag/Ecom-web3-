import React, { createContext, useState } from 'react'

export const CartProdValueContext = createContext()
export default function CartProdValueContextProvider({children}) {
    let [cartval, setCartval] = useState(0)

    let cartObj = {
        cartval,
        setCartval
    }
  return (
    <CartProdValueContext.Provider value={cartObj}>
        {children}
    </CartProdValueContext.Provider>
  )
}
