import React, { useContext, useState } from 'react'
import { createContext } from 'react'

export const PerProdValContext = createContext()
export default function PerProdValContextProvider({children}) {
    let [perProdVal, setPerProdVal] = useState(0)
    let obj = {
        perProdVal,
        setPerProdVal
    }
    return (
    <PerProdValContext.Provider value={obj}>
        {children}
    </PerProdValContext.Provider>
  )
}
