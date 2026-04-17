import React, { createContext, useState } from 'react'


export const ThemeContext = createContext()
export default function ThemeContextProvider({children}) {
    let [theme, setTheme] = useState(false)

    let themeObj ={
        theme,
        setTheme
    }
  return (
    <ThemeContext.Provider value={themeObj}>
        {children}
    </ThemeContext.Provider>
  )
}
