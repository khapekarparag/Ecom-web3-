import React, { createContext, useState } from 'react'


export const  UserLoginContext = createContext()
export default function UserLoginContextProvider({children}) {
    let [user, setUser] = useState(false)

    let userLogin ={    
        user,
        setUser
    }
  return (
    <UserLoginContext.Provider value={userLogin}>
        {children}
    </UserLoginContext.Provider>
  )
}
