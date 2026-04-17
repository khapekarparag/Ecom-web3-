import React, { createContext, useState } from 'react'


export const AddProdInCartContext = createContext()
export default function AddProdInCartContextProvider({children}) {
    let [cartProd, setCartProd] =useState([])

    let Addprod = {
        cartProd,
        setCartProd
    }

  return (
        <AddProdInCartContext.Provider value={Addprod}>
            {children}
        </AddProdInCartContext.Provider>
  )
}
