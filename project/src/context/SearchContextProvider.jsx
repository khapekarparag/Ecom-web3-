import React, { createContext, useState } from 'react'



export const SearchContext = createContext()
export default function SearchContextProvider({children}) {
    let  [search, setSearch] =useState("")
    let searchObj ={
        search,
        setSearch
    }
  return (
    <SearchContext.Provider value={searchObj}>
        {children}
    </SearchContext.Provider>
  )
}
