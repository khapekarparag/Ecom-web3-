import React, { Children, createContext, useState } from 'react'

export const  productContext = createContext()
export default function ProductContextProvider({children}) {
    let prodObj ={
        prodname : "",
        category : "",
        price : "",
        rating :""
    }

    let [prod, setProd] = useState(prodObj)

    let obj ={
        prod,
        setProd
    }
  return (
    <productContext.Provider value={obj}>
        {children}
    </productContext.Provider>
  )
}
