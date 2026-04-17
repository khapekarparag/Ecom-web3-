import React, { Children, createContext, useState } from 'react'


export const AdminContext = createContext()

export default function AdminContextProvider({children}) {
    let [admin, setAdmin]=useState(false)

    let adminLogin ={
        admin,
        setAdmin
    }

  return (
    <AdminContext.Provider value={adminLogin}>
        {children}
    </AdminContext.Provider>
)
}
