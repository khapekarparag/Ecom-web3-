import React, { createContext, useState } from 'react'


export const UpdateProdContext = createContext()
export default function UpdateProdContextProvider({children}) {
   let schema ={
         "image": "",
         "name": "",
         "category": "",
         "description": "",
         "price": "2100",
         "rating": ""
    }

    let [updateProd, setUpdateProd] = useState(schema)

    let updateObj = {
        updateProd,
        setUpdateProd
    }

  return (
    <UpdateProdContext.Provider value={updateObj}>
        {children}
    </UpdateProdContext.Provider>    
)
}
